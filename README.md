# tom-bigot.fr

Site vitrine de Tom Bigot : ce que je sais produire, mes créations et mes participations.
Tous les projets du groupe **seeworld** — *regarder le monde* — y sont réunis.

Construit avec [Astro](https://astro.build), statique, déployé automatiquement sur **OVHcloud** à chaque mise à jour sur la branche `ovh`.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Ajouter ou modifier un projet

Chaque projet est un fichier Markdown dans `src/content/projets/`. Le nom du fichier donne l'adresse de la page (`openbots.md` → `/projets/openbots`).

```md
---
titre: "openbots"
resume: "Une phrase qui dit ce que c'est."
nature: création        # ou : participation
statut: en cours        # ou : réalisé
annee: 2026
domaines: ["robotique", "web"]
lien: "https://openbots.fr"
ordre: 30               # position sur l'accueil (plus petit = plus haut)
brouillon: false        # true = masqué du site
---

Le texte de la page : l'idée, ce que tu as fait, les outils, des images…
```

Les images d'un projet peuvent aller dans `public/projets/<slug>/` et s'insérer avec `![légende](/projets/<slug>/image.jpg)`.

## Charte seeworld

Les couleurs, polices et espacements sont des jetons CSS dans `src/styles/global.css` (thème clair et sombre). Les sous-projets peuvent reprendre ces mêmes jetons pour rester cohérents.

## Arborescence

```
src/
  content/projets/   une fiche .md par projet
  components/        CarteProjet
  layouts/           Base (en-tête, pied de page, méta)
  pages/             accueil, projets/[id], à propos, contact, 404
  styles/global.css  charte
public/              favicon, CNAME, images
.github/workflows/   déploiement Pages
```

## Mise en ligne

1. Dans le dépôt GitHub : **Settings → Pages → Source : GitHub Actions**.
2. Chez le registrar de `tom-bigot.fr`, ajouter les enregistrements DNS GitHub Pages :
   - `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `<ton-utilisateur>.github.io`
3. Dans **Settings → Pages**, vérifier le domaine personnalisé `tom-bigot.fr` et cocher **Enforce HTTPS**.
