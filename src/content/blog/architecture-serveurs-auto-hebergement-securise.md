---
titre: "Architecture serveur et auto-hébergement : isoler ses services avec Docker"
description: "Principes d'isolation réseau, reverse proxy Nginx, gestion automatisée des certificats SSL Let's Encrypt et politiques de sauvegardes chiffrées pour un homelab robuste."
date: 2026-08-10
tags: ["Linux", "Docker", "DevOps", "Sécurité", "Réseau"]
tempsLecture: "6 min"
brouillon: false
---

L'auto-hébergement de services (cloud privé, gestionnaire de mots de passe, messageries, supervision) nécessite une rigueur d'architecture similaire à celle des infrastructures d'entreprise pour garantir haute disponibilité et imperméabilité aux attaques.

## 1. La segmentation réseau via Docker Networks

Exposer directement des conteneurs sur le réseau hôte (`host mode`) est une mauvaise pratique. L'approche recommandée repose sur la création de sous-réseaux virtuels étanches :

- **Réseau Frontend (`proxy-tier`) :** seul le conteneur Reverse Proxy (Nginx) y est connecté avec les ports 80 et 443 ouverts vers l'extérieur.
- **Réseaux Backend dédiés :** chaque application (ex. base de données PostgreSQL, serveur applicatif) réside dans son propre réseau privé inaccessible depuis l'extérieur ni depuis les autres applications.

## 2. Rôle du Reverse Proxy et terminaison TLS

Le reverse proxy centralise toutes les exigences de sécurité périmétrique :

- **Terminaison SSL/TLS :** négociation stricte en TLS 1.3 avec suites de chiffrement modernes (ChaCha20, AES-GCM).
- **En-têtes HTTP de sécurité stricts :**
  - `Strict-Transport-Security` (HSTS) avec préchargement.
  - `X-Content-Type-Options: nosniff`.
  - `X-Frame-Options: SAMEORIGIN`.
  - Politiques `Content-Security-Policy` (CSP) adaptées.

## 3. Stratégie de résilience et sauvegardes 3-2-1

Un serveur sans plan de reprise d'activité (PRA) n'est pas fiable. La règle appliquée :
- **3 copies des données** (production, sauvegarde locale, sauvegarde distante chiffrée).
- **2 supports différents** (NVMe local + stockage cloud objet S3 compatible).
- **1 copie hors site** avec chiffrement asymétrique géré par clé GPG.
