---
titre: "Fix-My-Drone"
resume: "Base de connaissances technique du matériel FPV : fiches composants, datasheets, résolution de pannes et tutoriels de modifications."
nature: "création"
statut: "en cours"
annee: 2026
domaines: ["Drones FPV", "Électronique", "Dépannage & Diagnostic", "Datasheets", "Mods & Hardware"]
github: https://github.com/TakDai/fix-my-drone
ordre: 20
---

**Fix-My-Drone** est un outil de référence et une base de connaissances technique en ligne dédiée à l'écosystème matériel du drone FPV (First Person View). Pensé comme une ressource exhaustive pour les pilotes, techniciens et constructeurs (makers), il centralise pour chaque composant du marché sa **datasheet officielle**, ses **procédures de dépannage pas-à-pas** et les **modifications matérielles (mods)** documentées par la communauté.

---

### La problématique : la dispersion de l'information technique

Monter ou réparer un drone FPV confronte systématiquement à un écosystème fragmenté :
* Schémas de câblage (pinouts) introuvables après l'achat ou perdus sur des sites fabricants fermés.
* Codes d'erreur Betaflight sibyllins lors d'un refus d'armement post-crash.
* Pannes électroniques récurrentes (régulateurs 5V/9V grillés, gyroscopes non reconnus) dont la solution est enfouie dans d'anciens fils de discussion sur des forums ou des serveurs Discord.
* Absence de documentation claire sur les modifications fiables (pontage de BEC externe, blindage électromagnétique, ajout de condensateurs Low ESR).

Fix-My-Drone remédie à ce manque en structurant l'ensemble du savoir technique dans une interface claire, indexée et directement actionnable à l'établi.

---

### Ce que répertorie la plateforme

#### 1. Fiches composants & Datasheets normalisées
Pour chaque référence de matériel (contrôleurs de vol FC, ESC 4-en-1, émetteurs vidéo VTX DJI O3 / Walksnail / Analogique, récepteurs radio ExpressLRS et Crossfire) :
* **Schémas de brochage HD (Pinouts)** : repérage exact des pads de soudure, des UARTs matériels, des bus I2C, SPI et alimentations recommandées.
* **Limites de tension et d'intensité** : plages d'entrée LiPo acceptées, tolérances des régulateurs internes et valeurs maximales d'ampérage en continu/pointe.
* **Firmwares compatibles** : versions recommandées Betaflight, INAV, BLHeli_S, Bluejay ou AM32 avec cibles (targets) officielles.

#### 2. Guides de résolution de pannes (Troubleshooting)
Des protocoles de diagnostic méthodique pour identifier et corriger les dysfonctionnements les plus fréquents :
* **Drapeaux d'armement Betaflight (Arming Flags)** : diagnostic des blocages (accéléromètre non calibré, RX non lié, switch de sécurité actif, throttle non nul).
* **Pannes de gyroscope** : identification des composants SPI défectueux (ICM, BMI, MPU) ou dessoudés suite à un impact.
* **Sauvetage de cartes STM32 brickées** : flashage forcé en mode DFU via bouton bootloader, Zadig ou sonde SWD (ST-Link V2).
* **Filtrage du bruit électrique & parasites** : élimination des lignes blanches ou coupures vidéo via condensateurs Low ESR et selfs de choc.

#### 3. Tutoriels de modifications matérielles (Mods)
Des tutoriels illustrés d'interventions physiques de précision :
* **Bypass de régulateurs internes défaillants** : intégration et soudure propre d'un module BEC micro-abaisseur externe 5V ou 9V.
* **Mods d'antennes et dissipation thermique** : renforcement mécanique des connecteurs U.FL, isolation thermique des VTX haute puissance (1W+) et montage de radiateurs passifs en aluminium.
* **Soft-mounting & filtration mécanique** : amortissement des vibrations parasites pour libérer la bande passante du gyroscope et affiner les filtres logiciels.
