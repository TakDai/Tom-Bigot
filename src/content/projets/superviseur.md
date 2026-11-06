---
titre: "Superviseur"
resume: "Gestionnaire de serveurs bare-metal et console desktop native permettant de modéliser des schémas d'infrastructure complets, serveurs de secours et suivi mémoire/CPU sans agent."
nature: "création"
statut: "en cours"
annee: 2026
domaines: ["Gestionnaire de Serveurs", "C# .NET 8", "Avalonia UI", "Topologie & Secours", "DevOps", "Sécurité Chiffrée"]
github: "https://github.com/TakDai/Superviseur"
ordre: 40
---

**Superviseur** est un **gestionnaire de serveurs bare-metal** et une application de bureau native développée en **C#**, **.NET 8** et **Avalonia UI** (architecture MVVM). Conçu pour administrer l'ensemble du parc de machines et d'applications de production (OpenBots, Komeon, Les Tourangeaux), il permet de **modéliser facilement des schémas d'infrastructure complets** (topologie de serveurs maîtres, serveurs de secours / failover, extensions, répartition de mémoire et services système) sans installer le moindre agent résident sur les machines distantes.

---

### La problématique : la rigidité et l'insécurité des outils d'infrastructure traditionnels

Superviser et administrer un parc hétérogène de serveurs physiques et dédiés pose plusieurs contraintes critiques :
* **Agents lourds et vulnérables** : la plupart des solutions (Datadog, Zabbix, portails web) imposent d'installer des daemons sur chaque machine et d'ouvrir des ports d'écoute sur Internet, multipliant les surfaces d'attaque.
* **Difficulté à modéliser les schémas de secours** : déclarer qu'un serveur B est le secours d'un serveur A, ou qu'un service est scindé en extension, exige souvent des configurations de cluster complexes (Pacemaker, Keepalived) inadaptées aux besoins réactifs de petits parcs bare-metal.
* **Dispersion des clés et identifiants** : les clés SSH, passphrases et adresses IP sont trop souvent stockées en clair dans des fichiers `~/.ssh/config` ou des scripts non chiffrés.
* **Visibilité fragmentée sur la mémoire et les processus** : manque d'un tableau de bord unique reliant l'état du matériel (consommation RAM, swap, disques) aux unités `systemd` et aux sauvegardes.

Superviseur apporte une réponse unifiée : une console locale sécurisée qui se connecte en SSH pur et lit la topologie déclarée par chaque machine.

---

### Modélisation de Schémas Complets & Topologie Multi-Serveurs

Le cœur du Superviseur repose sur la capacité de définir et visualiser un **schéma d'infrastructure complet**, soit via le formulaire interactif de l'application, soit par un fichier manifeste déclaratif (`superviseur.yml`) présent sur chaque machine.

#### 1. Schémas de résilience & Serveurs de secours
Une même application peut être modélisée à travers plusieurs serveurs pour garantir une haute disponibilité sans complexité superflue :
* **Instance Maître** : serveur prioritaire qui héberge le service et traite le trafic nominal.
* **Serveurs de Secours (Failover)** : serveurs préconfigurés prêts à prendre le relais automatiquement ou en un clic si le maître tombe en panne ou subit une maintenance.
* **Serveurs de Réplique & Sauvegarde** : nœuds dédiés à la redondance des données et à l'archivage chiffré des snapshots.
* **Extensions de charge (Sharding)** : machines secondaires absorbant une fraction de la charge lorsque l'application principale dépasse les capacités mémoire ou CPU d'un seul serveur.

#### 2. Surveillance fine de la Mémoire, du CPU et des Ressources
* **Télémétrie en temps réel** : mesure continue de la mémoire RAM physique (libre, utilisée, cache), de l'espace swap, de la charge processeur et du taux d'occupation des disques.
* **Seuils d'alerte configurables** : basculement visuel des indicateurs en avertissement ou en alerte critique (`warn_above`, `warn_below`) dès qu'un service consomme trop de mémoire vive.
* **Indicateurs applicatifs personnalisés** : chaque projet déclare ses propres commandes de mesure légères exécutées à distance (nombre d'utilisateurs en base, longueur des files d'attente, nombre de workers actifs).

---

### Architecture & Sécurité Zero-Agent

#### 1. Aucun port ouvert & Tunnels SSH stricts
L'application s'exécute localement sur le poste de travail de l'administrateur. Toutes les communications vers les serveurs distants s'effectuent via des sessions **SSH chiffrées** (via `SSH.NET`) :
* Aucun port ouvert sur l'infrastructure en dehors du port SSH standard.
* Aucun agent ou daemon résident requis côté serveur : les serveurs restent 100% standards.
* Réveil de machines éteintes à distance via le protocole **Wake-on-LAN** (WoL).

#### 2. Coffre-fort d'identifiants chiffré (AES-256-GCM / Argon2id)
* Les métadonnées sensibles (adresses IP, ports, utilisateurs, chemins de clés privées SSH et phrases de passe) sont stockées dans `config/coffre.dat`.
* Le fichier est chiffré en **AES-256-GCM** avec un sel et un nonce régénérés à chaque écriture.
* La clé maîtresse est dérivée à la volée avec l'algorithme de hachage durci **Argon2id**. Le mot de passe n'est **jamais stocké sur disque**.
* **Verrouillage automatique** de la console après un temps d'inactivité paramétrable.

#### 3. Découverte dynamique des applications
* Le Superviseur scanne le répertoire `/opt` de chaque serveur connecté.
* Toute application qui dépose un manifeste `superviseur.yml` est automatiquement découverte et intégrée à l'arbre des services : gestion des unités `systemd` (critiques, partagées, oneshot), consultation des logs en direct, déclenchement de sauvegardes et activation du mode maintenance.

---

### Outils Complémentaires

| Composant | Rôle technique |
|---|---|
| **Superviseur Desktop** | Interface graphique Avalonia UI multiplateforme (Windows / Linux / macOS) avec vue schématique en arbre, jauges de ressources et terminal SSH intégré. |
| **Amorce** | Binaire autonome et ultra-léger conçu pour être exécuté sur un serveur fraîchement installé : configuration initiale SSH, durcissement du pare-feu et enrôlement direct dans le coffre. |
| **Superviseur.Shared** | Bibliothèque partagée C# contenant le parseur de manifestes (YAML/JSON), les modèles de topologie et les briques cryptographiques. |
