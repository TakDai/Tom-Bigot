---
titre: "Déploiement continu moderne : orchestrer Astro, GitHub Actions et OVH"
description: "Comment mettre en place un pipeline CI/CD automatisé, rapide et sans frais d'infrastructure pour compiler et déployer un site statique Astro sur un hébergement OVH via webhooks."
date: 2026-10-15
tags: ["DevOps", "CI/CD", "Astro", "GitHub Actions", "Web"]
tempsLecture: "5 min"
brouillon: false
---

Le déploiement de sites statiques modernes (SSG) offre des performances incomparables et une sécurité maximale : aucun moteur d'exécution serveur (PHP ou Node.js) n'est exposé publiquement aux requêtes web des visiteurs.

Cependant, les hébergeurs mutualisés classiques ne disposent pas toujours d'un environnement Node.js récent pour exécuter les commandes de compilation (`npm run build`).

Voici l'architecture que j'ai conçue pour automatiser entièrement la chaîne de livraison continue :

## 1. Découplage de la compilation et de la distribution

Le principe clé repose sur la séparation stricte de deux rôles :
- **L'environnement d'intégration continue (GitHub Actions)** : il dispose de conteneurs Linux éphémères puissants, capables d'exécuter Node.js 22+, d'installer les dépendances et de compiler l'ensemble des pages statiques en quelques secondes.
- **Le serveur de distribution (Hébergement OVH)** : il n'a qu'un seul rôle, servir les fichiers compilés (`HTML`, `CSS`, `JS`, images et polices WOFF2) avec un serveur HTTP optimisé (Nginx / Apache).

## 2. Le pipeline GitHub Actions

À chaque `git push` sur la branche `main`, le workflow exécute les étapes suivantes :
1. Récupération du code source et cache des dépendances `npm`.
2. Compilation statique via `astro build` dans le répertoire temporaire `dist/`.
3. Injection des règles de routage et de cache dans le fichier `.htaccess`.
4. Poussée des fichiers statiques compilés vers une branche dédiée (`ovh`) avec un historique linéaire.
5. Notification immédiate de l'hébergeur via un appel HTTP sécurisé (**Webhook OVH VCS**).

```yaml
- name: Push to ovh branch
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
    publish_branch: ovh
    force_orphan: false

- name: Ping OVH Webhook
  run: curl -s -X POST "${{ secrets.OVH_WEBHOOK_URL }}"
```

## 3. Résultats & Avantages

- **Temps de déploiement moyen :** moins de 25 secondes entre le commit et la mise en ligne effective.
- **Robustesse :** en cas d'erreur de build, la version précédente reste en ligne sans interruption de service.
- **Zéro maintenance serveur :** pas de démon à superviser, pas de dépendances obsolètes sur l'hôte.
