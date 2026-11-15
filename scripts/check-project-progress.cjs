const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const { execSync } = require('child_process');

const SNAPSHOT_FILE = path.resolve(__dirname, '../src/data/project-snapshots.json');

const PROJECTS = [
  {
    id: 'openbots',
    name: 'OpenBots',
    website: 'https://openbots.fr',
    github: 'TakDai/OpenBots',
    branches: ['production', 'main']
  },
  {
    id: 'komeon',
    name: 'Komeon',
    website: 'https://komeon.fr',
    github: 'TakDai/Komeon',
    branches: ['dev/web-v1', 'main']
  },
  {
    id: 'multi-motors',
    name: 'Multi-Motors',
    website: 'https://multi-motors.fr',
    github: 'TakDai/Multi-Motors',
    branches: ['main']
  },
  {
    id: 'superviseur',
    name: 'Superviseur',
    website: null,
    github: 'TakDai/Superviseur',
    branches: ['main', 'master']
  },
  {
    id: '127il',
    name: '127IL',
    website: 'https://twitch.tv/127il',
    github: 'TakDai/127il',
    branches: ['main']
  },
  {
    id: 'pensee-nocturne',
    name: 'Pensée Nocturne',
    website: 'https://pensées-nocturnes.fr',
    github: 'TakDai/Pens-e-Nocturne',
    branches: ['main']
  },
  {
    id: 'lestourangeaux',
    name: 'Les Tourangeaux',
    website: 'https://lestourangeaux.fr',
    github: 'TakDai/LesTourangeaux',
    branches: ['main']
  },
  {
    id: 'inskin',
    name: 'Inskin',
    website: null,
    github: 'TakDai/Inskin',
    branches: ['main', 'master']
  },
  {
    id: 'tete-de-piaf',
    name: 'Tête de Piaf',
    website: null,
    github: 'TakDai/tete-de-piaf',
    branches: ['main', 'master']
  },
  {
    id: 'fix-my-drone',
    name: 'Fix-My-Drone',
    website: null,
    github: 'TakDai/fix-my-drone',
    branches: ['main']
  },
];

function fetchUrl(url, timeoutMs = 8000) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const req = https.get(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/json,*/*'
        },
        timeout: timeoutMs
      }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
          const nextUrl = new URL(res.headers.location, url).href;
          return fetchUrl(nextUrl, timeoutMs).then(resolve);
        }
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: data
          });
        });
      });
      req.on('error', (err) => resolve({ error: err.message }));
      req.on('timeout', () => { req.destroy(); resolve({ error: 'Timeout' }); });
    } catch (e) {
      resolve({ error: e.message });
    }
  });
}

function getGitHubCommits(repo, branch, sinceIso) {
  try {
    const branchFlag = branch ? `&sha=${branch}` : '';
    const cmd = `gh api "repos/${repo}/commits?since=${sinceIso}${branchFlag}" --jq ".[0:5] | .[] | {message: .commit.message, date: .commit.committer.date, sha: .sha[0:7], author: .commit.author.name}"`;
    const out = execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    if (!out) return [];
    return out.split('\n').filter(Boolean).map(l => JSON.parse(l));
  } catch (e) {
    return [];
  }
}

async function analyze() {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const sinceIso = sevenDaysAgo.toISOString();

  let existingSnapshots = {};
  if (fs.existsSync(SNAPSHOT_FILE)) {
    try {
      existingSnapshots = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
    } catch (_) {}
  }

  const results = [];
  const updatedSnapshots = { ...existingSnapshots };

  for (const p of PROJECTS) {
    const projectResult = {
      id: p.id,
      name: p.name,
      website: p.website,
      github: p.github,
      hasAdvanced: false,
      changes: {
        githubCommits: [],
        websiteChanged: false,
        websiteDetails: null
      }
    };

    // 1. Check GitHub across main and listed branches
    if (p.github) {
      const branches = p.branches || ['main'];
      const seenShas = new Set();
      for (const br of branches) {
        const commits = getGitHubCommits(p.github, br, sinceIso);
        for (const c of commits) {
          if (!seenShas.has(c.sha)) {
            seenShas.add(c.sha);
            projectResult.changes.githubCommits.push({ ...c, branch: br });
          }
        }
      }
      if (projectResult.changes.githubCommits.length > 0) {
        projectResult.hasAdvanced = true;
      }
    }

    // 2. Check Website
    if (p.website) {
      const resp = await fetchUrl(p.website);
      if (!resp.error && resp.status === 200 && resp.body) {
        const titleMatch = resp.body.match(/<title[^>]*>([^<]+)<\/title>/i);
        const metaDescMatch = resp.body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
        const title = titleMatch ? titleMatch[1].trim() : '';
        const desc = metaDescMatch ? metaDescMatch[1].trim() : '';
        
        // Strip volatile tokens (like nonces, timestamps, csrf) and hash structure
        const sanitized = resp.body
          .replace(/csrf-token["'][^>]*content=["'][^"']*["']/gi, '')
          .replace(/\b[0-9a-f]{32,64}\b/gi, '')
          .slice(0, 50000);

        const bodyHash = crypto.createHash('sha256').update(sanitized).digest('hex').slice(0, 16);

        const prevSnapshot = existingSnapshots[p.id];
        if (prevSnapshot && prevSnapshot.bodyHash) {
          if (prevSnapshot.bodyHash !== bodyHash) {
            projectResult.hasAdvanced = true;
            projectResult.changes.websiteChanged = true;
            projectResult.changes.websiteDetails = {
              previousHash: prevSnapshot.bodyHash,
              currentHash: bodyHash,
              title,
              description: desc,
              lastChecked: now.toISOString()
            };
          }
        }

        updatedSnapshots[p.id] = {
          bodyHash,
          title,
          description: desc,
          lastChecked: now.toISOString()
        };
      }
    }

    results.push(projectResult);
  }

  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(updatedSnapshots, null, 2));

  const advanced = results.filter(r => r.hasAdvanced);
  const unchanged = results.filter(r => !r.hasAdvanced);

  console.log(JSON.stringify({
    checkedAt: now.toISOString(),
    since: sinceIso,
    advancedCount: advanced.length,
    advancedProjects: advanced,
    unchangedCount: unchanged.length,
    unchangedProjects: unchanged.map(u => u.name)
  }, null, 2));
}

analyze().catch(console.error);
