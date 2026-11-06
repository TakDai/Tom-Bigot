---
titre: "Komeon"
resume: "Application de discussion instantanée et messagerie vocale pensée par un régisseur : pistes audio individuelles égalisables, communication d'équipe temps réel et plateforme auto-hébergeable."
nature: "création"
statut: "en cours"
annee: 2026
domaines: ["Discussion Instantanée", "Messagerie Vocale & SFU", "Intercom Régie", "FastAPI / WebSockets", "LiveKit / WebRTC", "C# Avalonia"]
lien: "https://komeon.fr"
github: "https://github.com/TakDai/Komeon"
ordre: 70
---

**Komeon** ([komeon.fr](https://komeon.fr)) est une **application de discussion instantanée et de messagerie vocale** pensée et conçue selon la **vision d'un régisseur**. Développée pour répondre aux impératifs opérationnels des équipes techniques, collectifs et environnements de production (spectacle vivant, audiovisuel, régie événementielle et ateliers), elle allie la réactivité d'un chat temps réel moderne à un moteur vocal professionnel traitant chaque membre comme une piste audio dédiée.

---

### La vision : une application de communication vue par un régisseur

Sur un plateau, en régie technique ou lors de l'exploitation d'événements complexes, les outils de communication grand public (Discord, Slack, WhatsApp) montrent rapidement leurs limites :
* **Le problème du mixage écrasé** : les salons vocaux habituels (architecture MCU) fusionnent toutes les voix en un flux unique, rendant inaudibles les personnes qui parlent doucement dès qu'un bruit de scène ou une voix forte s'exprime.
* **Le manque de priorités de parole** : impossible pour un régisseur d'interrompre proprement le canal pour donner un top ("cue") sans couper manuellement tout le monde.
* **La dépendance aux clouds fermés** : aucune garantie de confidentialité ni d'autonomie en cas de coupure de connexion Internet globale dans un lieu mal couvert.
* **La séparation artificielle entre chat et intercom** : obligation de jongler entre une application de chat textuel et un système de talkie-walkie physique.

Komeon réunit ces deux mondes dans une interface unique, modulaire et auto-hébergeable.

---

### Le moteur vocal : l'exigence d'une piste par membre (Architecture SFU)

Au lieu de faire mixer toutes les voix par le serveur, Komeon s'appuie sur une **architecture SFU (Selective Forwarding Unit)** propulsée par **LiveKit** et le codec audio **Opus** :

#### 1. Une tranche de mixage pour chaque interlocuteur
* **N pistes audio séparées** : chaque utilisateur reçoit les flux de ses coéquipiers sous forme de pistes isolées.
* **Réglages individuels en direct** : ajustement indépendant du volume, égalisation paramétrique par membre et balance stéréo (panoramique) pour situer spatialement chaque intervenant.
* **Priorité régisseur & Annonces ("Tops Régie")** : niveau de priorité attribué aux rôles de régie permettant d'atténuer automatiquement les voix secondaires (*ducking*) lors d'une annonce critique.

#### 2. Messagerie vocale & Talkie-Walkie instantané
* **Push-to-Talk (PTT) basse latence** : activation instantanée de la parole via raccourci clavier ou bouton physique d'interface.
* **Notes vocales rapides** : enregistrement et transmission asynchrone de consignes vocales dans les salons textuels pour les techniciens en mouvement qui ne peuvent pas taper au clavier.

---

### Discussion instantanée & Collaboration d'équipe

* **Salons textuels WebSockets temps réel** : communication bidirectionnelle instantanée (< 12 ms de latence), structurée par canaux thématiques (Régie Générale, Plateau, Son, Lumière, Logistique).
* **Messages directs & Partage de documents techniques** : transmission rapide de plans de feu, fiches techniques, synoptiques de câblage et images de repérage.
* **Administration & Rôles granulaires** : intégration native avec le moteur d'automatisation **OpenBots** pour gérer l'accueil des membres, la hiérarchie des permissions et les journaux d'audit.

---

### Écosystème Client & Déploiement

| Composant | Technologie & Rôle |
|---|---|
| **Client Web (SPA)** | Interface moderne réactive en JavaScript / CSS sur mesure, accessible instantanément depuis n'importe quel navigateur sans installation. |
| **Client Bureau Natif** | Application C# / .NET 8 / Avalonia UI (`clients/native/`) pour une réactivité maximale à la souris et au clavier en régie. |
| **Client Desktop Léger** | Client multiplateforme basé sur Tauri pour les machines de contrôle légères. |
| **Serveur Backend** | API Python (FastAPI / Starlette), WebSockets asynchrones, PostgreSQL et passerelle WebRTC LiveKit. |
| **Auto-hébergement & Docker** | Conteneurisation complète via `docker-compose.prod.yml`, supervisée en production par le **Superviseur**. |
