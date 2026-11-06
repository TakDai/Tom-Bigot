---
titre: "Inskin"
resume: "Application mobile et multi-support dédiée à la lecture, l'écriture, l'émulation et le suivi avancé des produits NFC/RFID, conçue spécifiquement pour les implants sous-cutanés Dangerous Things."
nature: "création"
statut: "en cours"
annee: 2026
domaines: ["Android Kotlin", "NFC / RFID", "Biohacking & Implants", "Jetpack Compose", "Proxmark3", "Hardware"]
github: "https://github.com/TakDai/Inskin"
ordre: 80
---

**Inskin** est une **application mobile et multi-support** conçue pour la lecture, l'écriture, l'émulation et la gestion approfondie des puces et badges **NFC/RFID**, avec une spécialisation poussée pour les **implants sous-cutanés de biohacking** (Dangerous Things). Développée en **Kotlin natif** avec une interface fluide et contrastée sous **Jetpack Compose**, Inskin dépasse les simples utilitaires NFC pour offrir une véritable suite d'outils de diagnostic, de maintenance et d'automatisation pour le corps augmenté.

---

### Conçu spécifiquement pour les implants Dangerous Things

Les implants sous-cutanés présentent des contraintes physiques et électromagnétiques très différentes des cartes à puce traditionnelles (micro-antennes cylindriques en verre biocompatible, couplage inductif délicat, positionnement sous la peau). Inskin a été spécialement calibré pour reconnaître, configurer et fiabiliser la communication avec ces implants :

* **Identification automatique des profils d'implants** :
  * **NExT v2** : implant hybride double fréquence combinant une puce HF 13.56 MHz (NTAG216) et une puce LF 125 kHz (EM4100 / T5577).
  * **xNT & FlexNT** : puces NFC Type 2 (NTAG216, 888 octets de mémoire utilisateur).
  * **xM1 & FlexM1** : puces HF Mifare Classic 1K "Magic" à UID réinscriptible (génération 1a et génération 2).
  * **xEM & xAC** : puces basse fréquence (125 kHz) pour le contrôle d'accès industriel et badges de porte.
* **Auto-sélection et adaptation du protocole** : détection immédiate de la technologie sous-jacente au contact pour ajuster les délais de garde et éviter les ruptures de session NFC pendant l'écriture.

---

### Suivi avancé et santé de l'implant

Parce qu'un implant sous la peau ne peut pas être remplacé en un claquement de doigts, Inskin intègre des outils d'audit et de préservation matérielle :

* **Compteur de cycles d'écriture EEPROM** : suivi rigoureux du nombre d'écritures effectuées sur chaque bloc pour prévenir l'usure de la mémoire non-volatile et anticiper la fin de vie de la cellule.
* **Diagnostic d'intégrité et scan de santé** : vérification de la cohérence de la table des blocs, détection de blocs défectueux ou corrompus et analyse des bits de verrouillage (*lock bits*).
* **Coffre-fort et gestion des mots de passe** : protection des puces par mot de passe PWD/PACK (NTAG) ou clés de secteur (Mifare), stockées de manière chiffrée sur l'appareil via `EncryptedSharedPreferences` et l'Android Keystore.
* **Dictionnaire Mifare intégré** : embarque plus de 40 clés de transport et clés par défaut pour auditer, cloner ou récupérer l'accès aux implants de type xM1.

---

### Automatisation nodale (*Flows*)

Inskin intègre un moteur de scénarios nodaux visuels permettant de transformer n'importe quel scan d'implant en déclencheur d'actions contextuelles :
* **Déclencheurs conditionnels** : reconnaissance de l'UID ou du contenu NDEF scanné.
* **Actions multiples** : bascule de profils système, ouverture d'applications, transmission de requêtes Webhook domotiques (Home Assistant), ou émission de notifications sécurisées.
* **Exécution instantanée en tâche de fond** : réactivité immédiate dès que la main s'approche du capteur NFC du smartphone.

---

### Écosystème multi-support & Pont matériel

Inskin ne se limite pas à la puce NFC interne des smartphones :

| Volet | Rôle et Capacités |
|---|---|
| **Android Natif (Kotlin + Compose)** | Interface principale de scan, d'écriture NDEF avancée (vCard, MIME, URLs sécurisées), de dump binaire brut et de gestion de collection. |
| **Intégration Proxmark3 (USB OTG)** | Pilotage direct d'un lecteur **Proxmark3** connecté en USB ou BLE, ouvrant l'accès aux opérations basse fréquence 125 kHz (clonage de badges T5577), à l'émulation matérielle autonome et aux attaques cryptographiques avancées. |
| **PC Unlock (Déverrouillage distant)** | Serveur léger (`pc_unlock_server.py`) tournant sur station de travail (Windows / Linux) permettant de déverrouiller son ordinateur automatiquement lors du scan de l'implant par le téléphone sur le réseau local. |
| **Émulation HCE (Host Card Emulation)** | Capacité d'émuler des identifiants virtuels directement depuis le smartphone pour interagir avec des lecteurs de contrôle d'accès compatibles. |
