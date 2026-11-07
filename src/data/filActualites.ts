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
  illustration?: string;
  logo: string;
  projetId?: string;
  lienSite?: string;
  lienGitHub?: string;
}

export const postsBase: PostActualite[] = [
  {
    id: 'multi-motors-veille',
    titre: 'Multi-Motors : Veille catalogue & 13 700 moteurs brushless FPV',
    description: "Indexation quotidienne mondiale : relevé des courbes dynamométriques de bancs de test et suivi des stocks en ligne.",
    date: new Date('2026-11-06T19:41:12Z'),
    sourceType: 'projet',
    sourceNom: 'Multi-Motors.fr',
    sourceIcon: '🌐',
    sourceUrl: 'https://multi-motors.fr',
    badgeType: 'CATALOGUE EN LIGNE',
    tags: ['13 700 Moteurs', 'Scraping', 'FPV'],
    logo: '/assets/logos/multi-motors.svg',
    projetId: 'multi-motors',
    lienSite: 'https://multi-motors.fr',
    lienGitHub: 'https://github.com/TakDai/Multi-Motors',
  },
  {
    id: 'inskin-pc-unlock',
    titre: 'Inskin : Déverrouillage PC via implant NFC sous-cutané & app Android',
    description: "Support des implants Dangerous Things (xNT, NExT), lecture/écriture NFC et liaison Bluetooth sécurisée pour déverrouiller la machine.",
    date: new Date('2026-11-06T13:10:40Z'),
    sourceType: 'reseau',
    sourceNom: 'GitHub (@TakDai/Inskin)',
    sourceIcon: '🐙',
    sourceUrl: 'https://github.com/TakDai/Inskin',
    badgeType: 'NOUVELLE VERSION',
    tags: ['Android Kotlin', 'Dangerous Things', 'NFC/RFID'],
    logo: '/assets/logos/inskin.png',
    projetId: 'inskin',
    lienGitHub: 'https://github.com/TakDai/Inskin',
  },
  {
    id: 'tete-de-piaf-lancement',
    titre: 'Tête de Piaf : Production vidéo aérienne & prises de vue FPV cinématique',
    description: "Création de la structure audiovisuelle : cadrage haute vitesse 4K/6K et télépilotage professionnel certifié DGAC.",
    date: new Date('2026-11-06T13:11:04Z'),
    sourceType: 'reseau',
    sourceNom: 'GitHub (@TakDai/Tete-De-Piaf)',
    sourceIcon: '🦅',
    sourceUrl: 'https://github.com/TakDai/Tete-De-Piaf',
    badgeType: 'PRODUCTION VIDÉO',
    tags: ['FPV Cinéma', 'Vidéo 4K', 'Télépilote'],
    logo: '/assets/logos/tdp.png',
    projetId: 'tete-de-piaf',
    lienGitHub: 'https://github.com/TakDai/Tete-De-Piaf',
  },
  {
    id: '127il-twitch-stream',
    titre: '127IL : Direct Twitch régie OBS, dev C/C++ & synthétiseurs',
    description: "Sessions en direct régulières : programmation de firmware STM32, mixage vidéo multi-caméras et production audio live.",
    date: new Date('2026-11-05T20:30:00Z'),
    sourceType: 'twitch',
    sourceNom: 'Twitch.tv/127il',
    sourceIcon: '🟣',
    sourceUrl: 'https://twitch.tv/127il',
    badgeType: 'STREAMING DIRECT',
    tags: ['Twitch Live', 'Live Coding', 'Musique'],
    logo: '/assets/logos/127il.svg',
    projetId: '127il',
    lienSite: 'https://twitch.tv/127il',
    lienGitHub: 'https://github.com/TakDai/127il',
  },
  {
    id: 'openbots-nodal',
    titre: 'OpenBots.fr : Orchestration Docker multi-tenant et flows nodaux',
    description: "Panel de pilotage et exécution isolée de bots Discord (discord.py) dans des conteneurs Docker avec streaming Lavalink.",
    date: new Date('2026-11-04T18:20:00Z'),
    sourceType: 'projet',
    sourceNom: 'OpenBots.fr',
    sourceIcon: '🌐',
    sourceUrl: 'https://openbots.fr',
    badgeType: 'EN PRODUCTION',
    tags: ['Docker', 'Discord.py', 'Flows'],
    logo: '/assets/logos/openbots.png',
    projetId: 'openbots',
    lienSite: 'https://openbots.fr',
    lienGitHub: 'https://github.com/TakDai/OpenBots',
  },
  {
    id: 'superviseur-failover',
    titre: 'Superviseur : Failover haute disponibilité & coffre-fort AES-256',
    description: "Monitoring en C# .NET 8 / Avalonia UI avec basculement automatique maître/secours sans agent tiers via tunnels SSH sécurisés.",
    date: new Date('2026-11-03T14:45:00Z'),
    sourceType: 'projet',
    sourceNom: 'GitHub (@TakDai/Superviseur)',
    sourceIcon: '🖥️',
    sourceUrl: 'https://github.com/TakDai/Superviseur',
    badgeType: 'ARCHITECTURE SYSTÈME',
    tags: ['.NET 8', 'Avalonia', 'DevOps'],
    logo: '/assets/logos/superviseur.svg',
    projetId: 'superviseur',
    lienGitHub: 'https://github.com/TakDai/Superviseur',
  },
  {
    id: 'fix-my-drone-pinouts',
    titre: 'Fix-My-Drone : Schémas pinouts FC/ESC & diagnostic matériel FPV',
    description: "Fiches techniques interactives de câblage pour contrôleurs STM32 récents et guides de diagnostic de pannes électroniques.",
    date: new Date('2026-11-01T11:15:00Z'),
    sourceType: 'projet',
    sourceNom: 'Fix-My-Drone',
    sourceIcon: '🔧',
    sourceUrl: 'https://github.com/TakDai/fix-my-drone',
    badgeType: 'SCHÉMAS & MODS',
    tags: ['Pinouts', 'Électronique', 'FPV'],
    logo: '/assets/logos/fix-my-drone.svg',
    projetId: 'fix-my-drone',
    lienGitHub: 'https://github.com/TakDai/fix-my-drone',
  },
  {
    id: 'pensee-nocturne-crypto',
    titre: 'Pensée Nocturne : Chiffrement client Web Crypto SHA-256 éphémère',
    description: "Partage de notes éphémères chiffrées de bout en bout : zéro rétention serveur, salage cryptographique local dans le navigateur.",
    date: new Date('2026-10-28T22:00:00Z'),
    sourceType: 'projet',
    sourceNom: 'Pensées-Nocturnes.fr',
    sourceIcon: '🌙',
    sourceUrl: 'https://pensées-nocturnes.fr',
    badgeType: 'CONFIDENTIALITÉ',
    tags: ['Web Crypto', 'Zero-Knowledge', 'React'],
    logo: '/assets/logos/pensee-nocturne.svg',
    projetId: 'pensee-nocturne',
    lienSite: 'https://pensées-nocturnes.fr',
    lienGitHub: 'https://github.com/TakDai/Pens-e-Nocturne',
  },
  {
    id: 'komeon-livekit',
    titre: 'Komeon : Intercom WebRTC SFU LiveKit & mixage régie par canal',
    description: "Régie audio temps réel pour équipes techniques : réglage individuel des gains et spatialisation des intervenants (< 80ms).",
    date: new Date('2026-10-22T16:00:00Z'),
    sourceType: 'projet',
    sourceNom: 'Komeon.fr',
    sourceIcon: '🎧',
    sourceUrl: 'https://komeon.fr',
    badgeType: 'AUDIO TEMPS RÉEL',
    tags: ['LiveKit SFU', 'WebRTC', 'FastAPI'],
    logo: '/assets/logos/komeon.png',
    projetId: 'komeon',
    lienSite: 'https://komeon.fr',
    lienGitHub: 'https://github.com/TakDai/Komeon',
  },
  {
    id: 'lestourangeaux-communaute',
    titre: 'Les Tourangeaux : Plateforme communautaire & guide des créateurs',
    description: "Mise en réseau locale en région tourangelle : agenda d'événements, cartographie des artisans et vitrine numérique.",
    date: new Date('2026-10-18T10:00:00Z'),
    sourceType: 'projet',
    sourceNom: 'LesTourangeaux.fr',
    sourceIcon: '🏰',
    sourceUrl: 'https://lestourangeaux.fr',
    badgeType: 'COMMUNAUTÉ LOCALE',
    tags: ['Touraine', 'Web', 'Annuaire'],
    logo: '/assets/logos/lestourangeaux.svg',
    projetId: 'lestourangeaux',
    lienSite: 'https://lestourangeaux.fr',
    lienGitHub: 'https://github.com/TakDai/lestourangeaux',
  }
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
      const seenRepos = new Set<string>();
      for (const ev of events) {
        if (ev.type === 'PushEvent' && ev.repo && ev.repo.name) {
          const repoName = ev.repo.name;
          if (seenRepos.has(repoName)) continue;
          seenRepos.add(repoName);

          const shortRepo = repoName.replace(/^TakDai\//, '');
          const eventDate = new Date(ev.created_at);

          const exists = posts.some(p => p.sourceNom.includes(shortRepo) && Math.abs(p.date.getTime() - eventDate.getTime()) < 3600 * 1000 * 12);
          if (!exists) {
            let logo = '/assets/logo-tb.svg';
            if (shortRepo.toLowerCase().includes('multi-motors')) logo = '/assets/logos/multi-motors.svg';
            else if (shortRepo.toLowerCase().includes('inskin')) logo = '/assets/logos/inskin.png';
            else if (shortRepo.toLowerCase().includes('tete-de-piaf')) logo = '/assets/logos/tdp.png';
            else if (shortRepo.toLowerCase().includes('127il')) logo = '/assets/logos/127il.svg';

            const firstCommit = ev.payload?.commits?.[0]?.message?.split('\n')[0] || 'Mise à jour poussée sur le dépôt public';

            posts.unshift({
              id: `github-${ev.id}`,
              titre: `Dépôt ${repoName} : ${firstCommit}`,
              description: `Activité sur la branche ${ev.payload?.ref ? ev.payload.ref.replace('refs/heads/', '') : 'main'}. Code source consultable publiquement.`,
              date: eventDate,
              sourceType: 'reseau',
              sourceNom: `GitHub (@${repoName})`,
              sourceIcon: '🐙',
              sourceUrl: `https://github.com/${repoName}`,
              badgeType: 'COMMIT RÉCENT',
              tags: ['GitHub @TakDai', shortRepo, 'Code Source'],
              logo,
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
