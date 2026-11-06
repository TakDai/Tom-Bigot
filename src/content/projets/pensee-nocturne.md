---
titre: "Pensée Nocturne"
resume: "Journal en ligne et carnet de bord intime entièrement sécurisé : sanctuaire numérique confidentiel pour consigner réflexions et pensées sous une interface nocturne immersive."
nature: "création"
statut: "en cours"
annee: 2026
domaines: ["Journal Intime", "Sécurité & Chiffrement", "Carnet de Bord", "Web Crypto API", "React", "TypeScript"]
lien: "https://pensées-nocturnes.fr"
github: "https://github.com/TakDai/Pens-e-Nocturne"
ordre: 60
---

**Pensée Nocturne** ([pensées-nocturnes.fr](https://pensées-nocturnes.fr)) est un **journal en ligne et carnet de bord intime entièrement sécurisé**, pensé comme un sanctuaire numérique confidentiel pour coucher par écrit ses réflexions, songes et murmures à l'abri du tumulte et des regards extérieurs.

---

### La vision : l'intimité d'un journal de bord moderne

À l'heure des réseaux sociaux publics et des plateformes connectées qui monétisent les données personnelles, tenir un journal intime sur un outil grand public expose à des risques d'indiscrétion ou de fuites :
* **Un refuge d'écriture sans jugement** : un espace conçu pour consigner ses pensées brutes, ses états d'âme, ses bilans d'étapes de projets et ses observations nocturnes.
* **La sérénité d'un carnet fermé à clé** : garantir que ce qui est écrit reste strictement personnel, chiffré et protégé contre tout accès non autorisé.
* **Une esthétique nocturne apaisante** : rompre avec les interfaces blanches agressives au profit d'un environnement sombre immersif propice à l'introspection de fin de journée.

---

### Sécurité & Confidentialité Intégrale

La sécurité n'est pas une option sur un journal intime : elle constitue la fondation architecturale de Pensée Nocturne.

#### 1. Chiffrement & Authentification renforcée
* **Hachage avec sel cryptographique unique** : chaque compte bénéficie d'un salage aléatoire généré via la **Web Crypto API** native, couplé à un hachage SHA-256 pour neutraliser les attaques par tables arc-en-ciel et attaques par dictionnaire.
* **Zéro mot de passe en clair** : les secrets maîtres ne transitent ni ne sont jamais stockés en clair.
* **Sanitisation anti-XSS stricte** : assainissement rigoureux de chaque pensée saisie via **DOMPurify** pour interdire toute injection de code malveillant dans les sessions d'écriture.
* **Zéro traqueur ni publicité** : absence totale de scripts d'analyse invasifs, d'outils de tracking publicitaire ou de services tiers indiscrets.

---

### L'expérience d'écriture & Ambiance sensorielle

Pensée Nocturne allie sécurité technique et poésie visuelle pour sublimer l'acte d'écrire :

#### 1. Ligne temporelle vivante (Timeline Gaussienne)
Les entrées ne sont pas empilées comme de simples listes de données : elles s'organisent sur une **courbe temporelle interactive SVG** régie par une fonction gaussienne qui réagit dynamiquement au défilement et à la position du regard, invitant à un voyage fluide dans ses souvenirs et ses réflexions passées.

#### 2. Typographies expressives
L'éditeur permet d'adapter le rendu du texte à la tonalité intime de chaque pensée :
* **Kalam** : écriture manuscrite sensible, proche de la plume d'un carnet papier.
* **Lora** : empattements nobles et élégance littéraire.
* **Inter** : clarté moderne et minimaliste.
* **JetBrains Mono** : rigueur sobre pour les notes techniques, dates et repères d'atelier.
* **Monoton** : titrage poétique et géométrie rétro-nocturne.

#### 3. Palettes stellaires & Calendrier
* **7 teintes chromatiques d'humeur** : qualification visuelle de chaque entrée (Blanc lunaire, Azur nocturne, Nébuleuse violette, Aurore rose, Or stellaire, Émeraude, Gris comète).
* **Vue Agenda chronologique** : calendrier intégré permettant de revisiter ses entrées au fil des jours, des mois et des cycles lunaires.

---

### Stack Technique

* **Framework & Build** : React 18, TypeScript, Vite, React Router 6.
* **Styles & Motion** : TailwindCSS, Tailwind Typography, design sombre sur mesure (`#050505`) avec filtres de verre dépoli (*backdrop-blur*).
* **Cryptographie & Sécurité** : Web Crypto API native du navigateur, hachage salé SHA-256, assainissement HTML DOMPurify.
* **Composants & Icônes** : Lucide React, modales de réglages de compte et vérification par code de sécurité.
