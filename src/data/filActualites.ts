import https from 'node:https';

export interface PostActualite {
  id: string;
  titre: string;
  description: string;
  date: Date;
  sourceType: 'reseau' | 'projet' | 'twitch';
  sourceNom: string;
  sourceIcon: string;
  sourceUrl?: string;
  badgeType: string;
  tags: string[];
  projetId?: string;
  lienSite?: string;
  lienGitHub?: string;
}

export const postsBase: PostActualite[] = [
  {
    id: 'multi-motors-13700',
    titre: 'Multi-Motors : franchissement du cap des 13 700 moteurs brushless FPV',
    description: "Mise à jour quotidienne du scraping mondial et consolidation des datasheets : nouvelles courbes dynamométriques bancs de test (g/W), relevé automatisé des variations de prix dans 20 boutiques partenaires et filtres multi-critères affinés.",
    date: new Date('2026-11-06T19:41:12Z'),
    sourceType: 'projet',
    sourceNom: 'Multi-Motors.fr',
    sourceIcon: '🌐',
    sourceUrl: 'https://multi-motors.fr',
    badgeType: 'VEILLE & CATALOGUE EN LIGNE',
    tags: ['+13 700 Moteurs', 'Scraping Quotidien', 'Bancs Dynamométriques', 'GitHub Actions'],
    projetId: 'multi-motors',
    lienSite: 'https://multi-motors.fr',
    lienGitHub: 'https://github.com/TakDai/Multi-Motors',
  },
  {
    id: 'inskin-pc-unlock',
    titre: 'Inskin : système de déverrouillage PC via implant NFC & automatisation nodale',
    description: "Ajout du système d'authentification biométrique/NFC par émulation Bluetooth vers PC, intégration du protocole d'automatisation par nœuds et enrichissement de la compatibilité avec les implants sous-cutanés Dangerous Things et Proxmark3.",
    date: new Date('2026-11-06T13:10:40Z'),
    sourceType: 'reseau',
    sourceNom: 'GitHub (@TakDai/Inskin)',
    sourceIcon: '🐙',
    sourceUrl: 'https://github.com/TakDai/Inskin',
    badgeType: 'COMMIT & NOUVELLE FONCTION',
    tags: ['Android Kotlin', 'Jetpack Compose', 'Dangerous Things', 'Proxmark3', 'NFC/RFID'],
    projetId: 'inskin',
    lienGitHub: 'https://github.com/TakDai/Inskin',
  },
  {
    id: 'openbots-nodal-flows',
    titre: 'OpenBots : nouveau moteur de flows nodaux et orchestration multi-tenant',
    description: "Déploiement en ligne du panel d'administration centralisé. Les instances de bots Discord (discord.py) s'exécutent désormais dans des conteneurs Docker isolés et surveillés avec support audio Lavalink et éditeur de flows sans code.",
    date: new Date('2026-11-04T18:20:00Z'),
    sourceType: 'projet',
    sourceNom: 'OpenBots.fr',
    sourceIcon: '🌐',
    sourceUrl: 'https://openbots.fr',
    badgeType: 'DÉPLOIEMENT EN PRODUCTION',
    tags: ['Docker Multi-tenant', 'discord.py', 'Flows Nodaux', 'PostgreSQL', 'Lavalink'],
    projetId: 'openbots',
    lienSite: 'https://openbots.fr',
    lienGitHub: 'https://github.com/TakDai/OpenBots',
  },
  {
    id: 'superviseur-failover',
    titre: 'Superviseur Desktop : module de failover maître/secours et coffre-fort AES-256',
    description: "Validation du basculement automatique sans agent tiers. La console native C# .NET 8 / Avalonia UI interroge les serveurs bare-metal via canaux SSH.NET chiffrés avec télémétrie mémoire et CPU en temps réel.",
    date: new Date('2026-11-03T14:45:00Z'),
    sourceType: 'projet',
    sourceNom: 'GitHub (@TakDai/Superviseur)',
    sourceIcon: '🖥️',
    sourceUrl: 'https://github.com/TakDai/Superviseur',
    badgeType: 'ARCHITECTURE SYSTÈME',
    tags: ['C# .NET 8', 'Avalonia UI', 'Failover Haute Disponibilité', 'SSH.NET & AES-256'],
    projetId: 'superviseur',
    lienGitHub: 'https://github.com/TakDai/Superviseur',
  },
  {
    id: '127il-twitch-live',
    titre: '127IL : live coding firmware STM32, régie vidéo et jam synthétiseur',
    description: "Session en direct sur Twitch : programmation bas niveau d'un contrôleur en C/C++, routage des retours audio multicanaux sous régie OBS et jam musical improvisé au synthétiseur et chant en direct.",
    date: new Date('2026-11-02T20:30:00Z'),
    sourceType: 'twitch',
    sourceNom: 'Twitch.tv/127il',
    sourceIcon: '🟣',
    sourceUrl: 'https://twitch.tv/127il',
    badgeType: 'DIRECT & CRÉATION LIVE',
    tags: ['Twitch Live', 'Live Coding C/C++', 'Régie Audio OBS', 'Synthétiseur & Chant'],
    projetId: '127il',
    lienSite: 'https://twitch.tv/127il',
    lienGitHub: 'https://github.com/TakDai/127il',
  },
  {
    id: 'fix-my-drone-pinouts',
    titre: 'Fix-My-Drone : schémas de câblage et pinouts pour contrôleurs de vol FPV récents',
    description: "Mise en ligne de fiches techniques interactives pour les nouveaux contrôleurs STM32 F7/H7 et systèmes vidéo HD (DJI O3, Walksnail Avatar). Guides pas à pas de diagnostic de pannes électroniques et mods.",
    date: new Date('2026-11-01T11:15:00Z'),
    sourceType: 'projet',
    sourceNom: 'Fix-My-Drone',
    sourceIcon: '🔧',
    sourceUrl: 'https://github.com/TakDai/fix-my-drone',
    badgeType: 'BASE DE CONNAISSANCES & MODS',
    tags: ['Pinouts & Schémas', 'Datasheets FC/ESC', 'Diagnostics Pannes', 'Électronique FPV'],
    projetId: 'fix-my-drone',
    lienGitHub: 'https://github.com/TakDai/fix-my-drone',
  },
  {
    id: 'pensee-nocturne-crypto',
    titre: 'Pensée Nocturne : renforcement du chiffrement Web Crypto SHA-256 côté client',
    description: "Optimisation de la vitesse de dérivation de clé et salage cryptographique dans le navigateur sans transit de clé sur le serveur. Interface nocturne réactive et sauvegarde chiffrée en local.",
    date: new Date('2026-10-28T22:00:00Z'),
    sourceType: 'projet',
    sourceNom: 'Pensées-Nocturnes.fr',
    sourceIcon: '🌙',
    sourceUrl: 'https://pensées-nocturnes.fr',
    badgeType: 'SÉCURITÉ & CONFIDENTIALITÉ',
    tags: ['Web Crypto API', 'React 18 & Vite', 'Zéro-Connaissance', 'Tailwind CSS'],
    projetId: 'pensee-nocturne',
    lienSite: 'https://pensées-nocturnes.fr',
    lienGitHub: 'https://github.com/TakDai/Pens-e-Nocturne',
  },
  {
    id: 'komeon-livekit-sfu',
    titre: 'Komeon : moteur vocal SFU LiveKit et mixage de volume indépendant par membre',
    description: "Architecture audio pour régies et équipes techniques : chaque régisseur peut désormais ajuster individuellement le gain et la spatialisation de chaque intervenant avec latence inférieure à 80 ms.",
    date: new Date('2026-10-22T16:00:00Z'),
    sourceType: 'projet',
    sourceNom: 'Komeon.fr',
    sourceIcon: '🎧',
    sourceUrl: 'https://komeon.fr',
    badgeType: 'AUDIO TEMPS RÉEL RÉGIE',
    tags: ['LiveKit SFU', 'FastAPI & WebSockets', 'Mixage Audio Régie', 'Opus Codec'],
    projetId: 'komeon',
    lienSite: 'https://komeon.fr',
    lienGitHub: 'https://github.com/TakDai/Komeon',
  },
];

async function fetchGitHubPublicEvents(): Promise<any[]> {
  return new Promise((resolve) => {
    const req = https.get('https://api.github.com/users/TakDai/events/public', {
      headers: {
        'User-Agent': 'Tom-Bigot-Portfolio-Build',
        'Accept': 'application/vnd.github.v3+json'
      },
      timeout: 3000
    }, (res) => {
      if (res.statusCode !== 200) return resolve([]);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const events = JSON.parse(data);
          resolve(Array.isArray(events) ? events : []);
        } catch (_) {
          resolve([]);
        }
      });
    });
    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

export async function getFilActualites(): Promise<PostActualite[]> {
  const posts = [...postsBase];

  try {
    const events = await fetchGitHubPublicEvents();
    if (events && events.length > 0) {
      // Find latest distinct push events on other repositories
      const seenRepos = new Set<string>();
      for (const ev of events) {
        if (ev.type === 'PushEvent' && ev.repo && ev.repo.name) {
          const repoName = ev.repo.name;
          if (seenRepos.has(repoName)) continue;
          seenRepos.add(repoName);

          const shortRepo = repoName.replace(/^TakDai\//, '');
          const eventDate = new Date(ev.created_at);

          // Check if there is already a very recent post for this date
          const exists = posts.some(p => p.sourceNom.includes(shortRepo) && Math.abs(p.date.getTime() - eventDate.getTime()) < 3600 * 1000 * 12);
          if (!exists) {
            posts.unshift({
              id: `github-${ev.id}`,
              titre: `Dépôt ${repoName} : nouvelle activité et commits publiés`,
              description: `Mise à jour poussée sur la branche ${ev.payload?.ref ? ev.payload.ref.replace('refs/heads/', '') : 'principale'}. Suivi des versions et code source accessible publiquement sur GitHub.`,
              date: eventDate,
              sourceType: 'reseau',
              sourceNom: `GitHub (@${repoName})`,
              sourceIcon: '🐙',
              sourceUrl: `https://github.com/${repoName}`,
              badgeType: 'COMMIT EN DIRECT',
              tags: ['GitHub @TakDai', shortRepo, 'Code Source', 'Open-Source'],
              lienGitHub: `https://github.com/${repoName}`,
            });
          }
        }
      }
    }
  } catch (_) {}

  // Tri antéchronologique
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}
