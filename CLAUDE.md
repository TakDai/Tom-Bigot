# tom-bigot.fr — Contexte & Mémoire Projet

Ce fichier est la **source unique de contexte et de mémoire partagée** entre Claude et Antigravity.

Site vitrine personnel de Tom Bigot (groupe **seeworld**) : portfolio, créations et participations.
Générateur de site statique : **Astro** (v7). Déploiement automatique :
- GitHub Pages lors d'un push sur `main`.
- Hébergement OVH via la branche orpheline `ovh` (qui contient la build statique générée depuis `dist/`) et le webhook VCS OVH.

---

## 📁 Architecture

| Chemin | Rôle |
|---|---|
| `src/content/projets/` | Fiches projets en Markdown (`.md`) avec frontmatter standardisé |
| `src/components/` | Composants UI Astro (`CarteProjet.astro`, etc.) |
| `src/layouts/` | Layout de base (`Base.astro` : header, footer, meta SEO) |
| `src/pages/` | Routes du site (`index.astro`, `projets/[id].astro`, `a-propos.astro`, etc.) |
| `src/styles/global.css` | Jetons CSS et charte graphique seeworld (thèmes clair / sombre) |
| `public/` | Assets statiques, favicon, images projets (`public/projets/<slug>/`), `CNAME` |
| `.github/workflows/` | Workflow GitHub Actions de déploiement GitHub Pages |

---

## 🛠️ Commandes

```bash
# Développement local (http://localhost:4321)
npm run dev

# Construction de la version statique (dossier dist/)
npm run build

# Prévisualisation de la build locale
npm run preview
```

---

## 📝 Conventions d'ajout de projet

Les projets sont déclarés dans `src/content/projets/<slug>.md` avec le frontmatter :
* `titre`: nom du projet
* `resume`: description courte
* `nature`: `création` ou `participation`
* `statut`: `en cours` ou `réalisé`
* `annee`: année (ex: 2026)
* `domaines`: tableau de tags (ex: `["web", "robotique"]`)
* `lien`: URL externe
* `ordre`: entier pour le tri sur la page d'accueil (plus petit = plus haut)
* `brouillon`: booléen (`false` pour publication)
