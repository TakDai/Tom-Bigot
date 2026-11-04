---
titre: "Superviseur"
resume: "Console desktop native en C# / .NET 8 / Avalonia pour supervision de serveurs bare-metal."
nature: création
statut: en cours
annee: 2026
domaines: ["C# .NET 8", "Avalonia", "DevOps", "Sécurité"]
github: https://github.com/TakDai/Superviseur
ordre: 40
---

Application de bureau multiplateforme développée en **C#**, **.NET 8** et **Avalonia UI** pour superviser en temps réel l'ensemble du parc de serveurs (OpenBots, Komeon, Les Tourangeaux).

**Sécurité zero-agent :**
- Aucun port ouvert en production : communication directe via des tunnels SSH chiffrés.
- Coffre-fort d'identifiants chiffré en **AES-256-GCM** avec dérivation de clé **Argon2id**.
- Verrouillage automatique de la console après inactivité.
