import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { t as $$Base } from "./Base_CTy6aqzK.mjs";
import { t as renderScript } from "./script_DwJ79mXe.mjs";
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const projects = [
		{
			num: "01",
			id: "multi-motors",
			titre: "MULTI-MOTORS",
			domaine: "Catalogue & Comparateur Moteurs FPV",
			date: "Aujourd'hui · En ligne",
			desc: "Catalogue mondial et comparateur de référence des moteurs brushless pour drones FPV (+13 700 références). Permet d'analyser l'intégralité du marché avec filtres multi-critères (stator, KV, LiPo, poids), courbes de poussée dynamométrique et relevé quotidien des prix dans 20+ boutiques spécialisées.",
			logo: "/assets/logos/multi-motors.svg",
			video: "/assets/videos/multi-motors.webm",
			lien: "/projets/multi-motors",
			site: "https://multi-motors.fr",
			github: "https://github.com/TakDai/Multi-Motors",
			color: "#DCE7E1",
			accent: "#1D3B32",
			tech: [
				"Python / Scraping",
				"GitHub Actions CI/CD",
				"+13 700 Moteurs",
				"Bancs Dynamométriques"
			]
		},
		{
			num: "02",
			id: "fix-my-drone",
			titre: "FIX-MY-DRONE",
			domaine: "Base de Connaissances & Réparation FPV",
			date: "Aujourd'hui · En cours",
			desc: "Plateforme technique et base de connaissances du matériel FPV. Répertoire complet des composants (FC, ESC, VTX, RX), fiches techniques/datasheets, schémas de câblage, guides de résolution de pannes et tutoriels de modifications (mods).",
			logo: "/assets/logos/fix-my-drone.svg",
			video: "/assets/videos/fix-my-drone.webm",
			lien: "/projets/fix-my-drone",
			github: "https://github.com/TakDai/fix-my-drone",
			color: "#EAE4F2",
			accent: "#33294E",
			tech: [
				"Datasheets & Pinouts",
				"Résolution de Pannes",
				"Mods & Hacks",
				"Électronique FPV"
			]
		},
		{
			num: "03",
			id: "openbots",
			titre: "OPENBOTS",
			domaine: "Hébergement Discord & Cloud PaaS",
			date: "Aujourd'hui · En production",
			desc: "Plateforme cloud d'hébergement multi-tenant de bots Discord : interface web de gestion centralisée couplée à des processus bots isolés (discord.py) conteneurisés et monitorés en continu.",
			logo: "/assets/logos/openbots.png",
			video: "/assets/videos/openbots.webm",
			lien: "/projets/openbots",
			site: "https://openbots.fr",
			github: "https://github.com/TakDai/openbots",
			color: "#DEE8F4",
			accent: "#1E3553",
			tech: [
				"Docker Engine",
				"Python / discord.py",
				"FastAPI",
				"Redis / Webhooks"
			]
		},
		{
			num: "04",
			id: "superviseur",
			titre: "SUPERVISEUR",
			domaine: "Desktop C# .NET 8 · Infra Bare-metal",
			date: "Aujourd'hui · Exploitation",
			desc: "Application de bureau native en C# / Avalonia UI pour la supervision temps réel du parc de serveurs bare-metal via des tunnels SSH chiffrés. Coffre-fort d'identifiants chiffré en AES-256-GCM / Argon2id sans agent exposé.",
			logo: "/assets/logos/superviseur.svg",
			video: "/assets/videos/superviseur.webm",
			lien: "/projets/superviseur",
			github: "https://github.com/TakDai/Superviseur",
			color: "#D7EDE7",
			accent: "#1B3D34",
			tech: [
				"C# .NET 8",
				"Avalonia UI",
				"SSH.NET",
				"AES-256-GCM / Argon2id"
			]
		},
		{
			num: "05",
			id: "127il",
			titre: "127IL",
			domaine: "Live Streaming & Atelier Technique",
			date: "Aujourd'hui · Actif",
			desc: "Diffusions techniques en direct sur Twitch consacrées à la programmation système, à la fabrication mécanique, à la soudure électronique de précision sous microscope zénithal et aux retours d'expérience d'ingénierie.",
			logo: "/assets/logos/127il.svg",
			video: "/assets/videos/127il.webm",
			lien: "/projets/127il",
			github: "https://github.com/TakDai/127il",
			color: "#FBE9DE",
			accent: "#4E2C1B",
			tech: [
				"OBS WebSocket",
				"Microscopie 4K",
				"Soudure CMS / 0402",
				"Directs Twitch"
			]
		},
		{
			num: "06",
			id: "pensee-nocturne",
			titre: "PENSÉE NOCTURNE",
			domaine: "Éditorial & Philosophie Numérique",
			date: "Aujourd'hui · En ligne",
			desc: "Recueil d'essais critiques et de réflexions personnelles rédigés à tête reposée : autonomie technologique face aux monopoles, droit à la réparation, souveraineté numérique et liberté de concevoir.",
			logo: "/assets/logos/pensee-nocturne.svg",
			video: "/assets/videos/pensee-nocturne.webm",
			lien: "/projets/pensee-nocturne",
			site: "https://pensées-nocturnes.fr",
			github: "https://github.com/TakDai/pensee-nocturne",
			color: "#EDE2EE",
			accent: "#3E2542",
			tech: [
				"Astro Statique",
				"Typography SSG",
				"Essais Libres",
				"Open Web"
			]
		},
		{
			num: "07",
			id: "komeon",
			titre: "KOMEON",
			domaine: "Messagerie Temps Réel & WebSockets",
			date: "Aujourd'hui · En développement",
			desc: "Plateforme collaborative de messagerie instantanée conçue pour les collectifs et ateliers : communication bidirectionnelle en flux WebSockets binaires, basse consommation de bande passante et latence minimale.",
			logo: "/assets/logos/komeon.png",
			video: "/assets/videos/komeon.webm",
			lien: "/projets/komeon",
			github: "https://github.com/TakDai/komeon",
			color: "#FDF2DB",
			accent: "#473914",
			tech: [
				"WebSockets",
				"Go / Node runtime",
				"Flux binaire",
				"Protobuf"
			]
		},
		{
			num: "08",
			id: "inskin",
			titre: "INSKIN",
			domaine: "Android Kotlin · NFC/RFID & Implants",
			date: "Aujourd'hui · En cours",
			desc: "Application Android native en Kotlin et Jetpack Compose dédiée à la lecture, l'écriture, l'émulation et l'organisation de tags NFC/RFID et d'implants sous-cutanés. Moteur d'automatisation nodale et compatibilité Proxmark3.",
			logo: "/assets/logos/inskin.png",
			video: "/assets/videos/inskin.webm",
			lien: "/projets/inskin",
			github: "https://github.com/TakDai/Inskin",
			color: "#F6DFDC",
			accent: "#4B221E",
			tech: [
				"Android Kotlin",
				"Jetpack Compose",
				"NFC ISO 14443-A",
				"Proxmark3"
			]
		},
		{
			num: "09",
			id: "tete-de-piaf",
			titre: "TÊTE DE PIAF",
			domaine: "Design Graphique & Identité Visuelle",
			date: "Aujourd'hui · Actif",
			desc: "Laboratoire de direction artistique et de création graphique : conception vectorielle monochrome, identité du groupe SEEWORLD, expérimentations visuelles à l'encre et chartes typographiques épurées.",
			logo: "/assets/logos/tdp.png",
			video: "/assets/videos/tete-de-piaf.webm",
			lien: "/projets/tete-de-piaf",
			github: "https://github.com/TakDai/tete-de-piaf",
			color: "#E4E7EA",
			accent: "#232930",
			tech: [
				"Direction Artistique",
				"Vecteurs SVG",
				"Identité Visuelle",
				"Print & Web"
			]
		},
		{
			num: "10",
			id: "lestourangeaux",
			titre: "LES TOURANGEAUX",
			domaine: "Portail Régional & Communauté de Tours",
			date: "Genèse 2025 · Réalisé",
			desc: "Portail indépendant et vitrine interactive valorisant les créateurs, commerces et initiatives d'Indre-et-Loire. Hub communautaire avec thèmes visuels saisonniers, annuaire local et serveur d'échange.",
			logo: "/assets/logos/lestourangeaux.svg",
			video: "/assets/videos/lestourangeaux.webm",
			lien: "/projets/lestourangeaux",
			site: "https://lestourangeaux.fr",
			github: "https://github.com/TakDai/LesTourangeaux",
			color: "#EFE9DC",
			accent: "#3B3220",
			tech: [
				"Hub Régional",
				"Tours 37",
				"Annuaire Local",
				"Indépendant"
			]
		}
	];
	const transitionVariants = [{
		shapeD: "M 0,90 C 380,160 720,20 1080,110 C 1240,140 1360,70 1440,90 L 1440,180 L 0,180 Z",
		lineD: "M 0,90 C 380,160 720,20 1080,110 C 1240,140 1360,70 1440,90"
	}, {
		shapeD: "M 0,90 C 360,20 720,160 1060,70 C 1200,40 1360,110 1440,90 L 1440,180 L 0,180 Z",
		lineD: "M 0,90 C 360,20 720,160 1060,70 C 1200,40 1360,110 1440,90"
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"sansNav": true,
		"titre": "Portfolio",
		"description": "Tom Bigot — Portfolio d'ingénierie, systèmes embarqués, drones FPV & développement logiciel.",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero-video-screen" id="top" data-astro-cid-lcdefpme><div class="video-container" data-astro-cid-lcdefpme><video id="heroVideo" class="video-element" autoplay loop muted playsinline preload="auto" poster="/favicon.svg" data-astro-cid-lcdefpme><source src="/assets/videos/hero_event.webm" type="video/webm" data-astro-cid-lcdefpme><source src="/assets/videos/hero_tours.webm" type="video/webm" data-astro-cid-lcdefpme><source src="/assets/hero.mp4" type="video/mp4" data-astro-cid-lcdefpme></video><div class="video-overlay" data-astro-cid-lcdefpme></div></div><div class="hero-content" data-astro-cid-lcdefpme><!-- Portrait en incrustation naturelle (fondu vaporeux sans contour artificiel) --><div class="hero-portrait-blend" data-astro-cid-lcdefpme><img src="/assets/profile_feathered.webp" alt="Tom Bigot — Télépilote de drone &amp; Production audiovisuelle" class="hero-portrait-img" width="180" height="202" loading="eager" decoding="async" data-astro-cid-lcdefpme></div><h1 class="hero-name" data-astro-cid-lcdefpme>TOM BIGOT</h1><p class="hero-title-main" data-astro-cid-lcdefpme>TÉLÉPILOTAGE &amp; PRODUCTION AUDIOVISUELLE</p><p class="hero-subtitle" data-astro-cid-lcdefpme>Développement logiciel &amp; Systèmes embarqués</p><div class="hero-tags" data-astro-cid-lcdefpme><span class="hero-tag" data-astro-cid-lcdefpme>Télépilotage FPV</span><span class="hero-tag" data-astro-cid-lcdefpme>Événementiel</span><span class="hero-tag" data-astro-cid-lcdefpme>Code &amp; Systèmes</span></div><div class="hero-actions" data-astro-cid-lcdefpme><a href="#multi-motors" class="btn-hero-primary" aria-label="Explorer les 10 projets" data-astro-cid-lcdefpme>Voir les projets &darr;</a><a href="mailto:contact@tom-bigot.fr" class="btn-hero-secondary" data-astro-cid-lcdefpme>Contact</a></div></div><!-- Indicateur de défilement vers le bas --><a href="#multi-motors" class="scroll-cue" aria-label="Découvrir les projets plein écran" data-astro-cid-lcdefpme><span class="scroll-arrow" data-astro-cid-lcdefpme>&darr;</span></a></section><aside class="scroll-timeline-nav" id="scrollTimeline" aria-label="Timeline de navigation du scroll" data-astro-cid-lcdefpme><div class="timeline-rail-wrap" data-astro-cid-lcdefpme><!-- Ligne de rail continue avec progression en temps réel --><div class="timeline-track-line" data-astro-cid-lcdefpme><div class="timeline-track-progress" id="timelineProgressBar" data-astro-cid-lcdefpme></div></div><!-- Les 10 nœuds de projets cliquables avec logos authentiques --><nav class="timeline-nodes-list" data-astro-cid-lcdefpme>${projects.map((p, idx) => renderTemplate`<a${addAttribute(`#${p.id}`, "href")}${addAttribute(`timeline-node-item node-${p.id}`, "class")}${addAttribute(p.id, "data-target-id")}${addAttribute(idx, "data-index")}${addAttribute(`Aller au projet ${p.num} : ${p.titre}`, "aria-label")} data-astro-cid-lcdefpme><span class="node-bullet" data-astro-cid-lcdefpme><span class="node-logo-circle" data-astro-cid-lcdefpme><img${addAttribute(p.logo, "src")} alt="" class="node-bullet-logo" loading="lazy" data-astro-cid-lcdefpme></span><span class="node-num-tag" data-astro-cid-lcdefpme>${p.num}</span></span><span class="node-flyout" data-astro-cid-lcdefpme><span class="node-flyout-logo-frame" data-astro-cid-lcdefpme><img${addAttribute(p.logo, "src")} alt="" class="node-flyout-logo" loading="lazy" data-astro-cid-lcdefpme></span><span class="node-flyout-num" data-astro-cid-lcdefpme>${p.num}</span><span class="node-flyout-title" data-astro-cid-lcdefpme>${p.titre}</span></span></a>`)}</nav></div></aside><nav class="mobile-timeline-bar" id="mobileTimeline" aria-label="Navigation rapide mobile" data-astro-cid-lcdefpme><div class="mobile-timeline-track" data-astro-cid-lcdefpme><div class="mobile-timeline-fill" id="mobileTimelineFill" data-astro-cid-lcdefpme></div></div><div class="mobile-timeline-items" data-astro-cid-lcdefpme>${projects.map((p, idx) => renderTemplate`<a${addAttribute(`#${p.id}`, "href")} class="mobile-timeline-btn"${addAttribute(p.id, "data-target-id")}${addAttribute(idx, "data-index")}${addAttribute(`${p.num} ${p.titre}`, "title")} data-astro-cid-lcdefpme><img${addAttribute(p.logo, "src")} alt="" class="mob-logo" loading="lazy" data-astro-cid-lcdefpme><span class="mob-num" data-astro-cid-lcdefpme>${p.num}</span></a>`)}</div></nav><div class="projets-fullscreen-wrapper" id="projets" data-astro-cid-lcdefpme>${projects.map((p, idx) => {
		const nextProject = projects[idx + 1] || null;
		nextProject && `${nextProject.id}`;
		nextProject && `${nextProject.num}${nextProject.titre}`;
		nextProject && `${idx + 2}`;
		return renderTemplate`<article class="project-block-container" data-astro-cid-lcdefpme><section${addAttribute(`project-fullscreen-section project-${p.id}`, "class")}${addAttribute(p.id, "id")}${addAttribute(`--project-pastel: ${p.color}; --project-accent: ${p.accent};`, "style")}${addAttribute(idx, "data-index")} data-astro-cid-lcdefpme><!-- Couche Vidéo de Fond Subtile intégrée à la couleur unie pastel --><div class="project-video-layer" aria-hidden="true" data-astro-cid-lcdefpme><video class="project-bg-video" loop muted playsinline preload="none" data-astro-cid-lcdefpme><source${addAttribute(p.video, "src")} type="video/webm" data-astro-cid-lcdefpme></video><div class="project-video-tint" data-astro-cid-lcdefpme></div></div><!-- Filigrane Parallaxe Géant en arrière-plan --><div class="parallax-watermark" aria-hidden="true" data-parallax-speed="0.28" data-astro-cid-lcdefpme><span class="watermark-number" data-astro-cid-lcdefpme>${p.num}</span></div><!-- Bandeau supérieur plein écran / Séparation d'en-tête --><header class="section-top-bar" data-astro-cid-lcdefpme><div class="top-bar-left" data-astro-cid-lcdefpme><span class="bar-step-tag" data-astro-cid-lcdefpme>PROJET ${p.num} / 10</span><span class="bar-separator" data-astro-cid-lcdefpme>&bull;</span><span class="bar-domain" data-astro-cid-lcdefpme>${p.domaine}</span></div><div class="top-bar-right" data-astro-cid-lcdefpme><span class="bar-date-pill" data-astro-cid-lcdefpme>${p.date}</span></div></header><!-- Zone centrale : grille deux colonnes avec effet parallaxe décalé --><div class="project-main-content" data-astro-cid-lcdefpme><div class="project-left-col" data-astro-cid-lcdefpme><div class="project-title-lockup" data-astro-cid-lcdefpme><div class="mobile-logo-badge" data-astro-cid-lcdefpme><img${addAttribute(p.logo, "src")}${addAttribute(p.titre, "alt")} data-astro-cid-lcdefpme></div><div class="title-text-group" data-astro-cid-lcdefpme><span class="title-subhead" data-astro-cid-lcdefpme>${p.domaine}</span><h2 class="project-title" data-astro-cid-lcdefpme>${p.titre}</h2></div></div><p class="project-description" data-astro-cid-lcdefpme>${p.desc}</p><!-- Badges techniques du projet --><div class="tech-pills-row" data-astro-cid-lcdefpme>${p.tech.map((t) => renderTemplate`<span class="tech-pill" data-astro-cid-lcdefpme>${t}</span>`)}</div><!-- Boutons d'action --><div class="project-actions" data-astro-cid-lcdefpme><a${addAttribute(p.lien, "href")} class="btn-action btn-primary" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>Fiche détaillée</span><span class="btn-action-arrow" data-astro-cid-lcdefpme>&rarr;</span></a>${p.site && renderTemplate`<a${addAttribute(p.site, "href")} target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>Site officiel</span><span class="btn-action-arrow" data-astro-cid-lcdefpme>&#8599;</span></a>`}${p.github && renderTemplate`<a${addAttribute(p.github, "href")} target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>Code source</span><span class="btn-action-arrow" data-astro-cid-lcdefpme>&#8599;</span></a>`}</div></div><!-- Colonne droite : Carte Emblème avec Parallaxe Inversé (Desktop) --><div class="project-right-col" data-parallax-speed="-0.15" data-astro-cid-lcdefpme><div class="emblem-card-frame" data-astro-cid-lcdefpme><div class="emblem-card-inner" data-astro-cid-lcdefpme><div class="emblem-logo-circle" data-astro-cid-lcdefpme><img${addAttribute(p.logo, "src")}${addAttribute(p.titre, "alt")} data-astro-cid-lcdefpme></div><div class="emblem-card-info" data-astro-cid-lcdefpme><span class="emblem-num" data-astro-cid-lcdefpme>PROJET #${p.num}</span><span class="emblem-title" data-astro-cid-lcdefpme>${p.titre}</span></div></div></div></div></div><!-- Bandeau inférieur plein écran / Séparation de transition --><!-- Bandeau de pied uniquement pour le dernier projet -->${!nextProject && renderTemplate`<footer class="section-bottom-seam" data-astro-cid-lcdefpme><div class="seam-progress-track" data-astro-cid-lcdefpme><div class="seam-progress-fill" style="width: 100%;" data-astro-cid-lcdefpme></div></div><div class="seam-info-row" data-astro-cid-lcdefpme><span class="seam-counter" data-astro-cid-lcdefpme>${p.num} sur 10</span><a href="#top" class="seam-next-link" aria-label="Retour au sommet" data-astro-cid-lcdefpme><span class="seam-label-full" data-astro-cid-lcdefpme>RETOUR AU SOMMET</span><span class="seam-label-mobile" data-astro-cid-lcdefpme>SOMMET</span><span class="seam-arrow" data-astro-cid-lcdefpme>↑</span></a></div></footer>`}</section><!-- ================= TRANSITION À LIGNE UNIQUE NON-LINÉAIRE ENTRE PROJETS ================= -->${nextProject && (() => {
			const v = transitionVariants[idx % transitionVariants.length];
			return renderTemplate`<div class="project-nonlinear-transition"${addAttribute(`--curr-pastel: ${p.color}; --next-pastel: ${nextProject.color};`, "style")} aria-hidden="true" data-astro-cid-lcdefpme><svg viewBox="0 0 1440 180" preserveAspectRatio="none" class="single-line-svg" data-astro-cid-lcdefpme><!-- Fond haut : pastel du projet actuel --><rect width="1440" height="180" fill="var(--curr-pastel)" data-astro-cid-lcdefpme></rect><!-- Forme basse : pastel du projet suivant délimité par la courbe non-linéaire --><path${addAttribute(v.shapeD, "d")} fill="var(--next-pastel)" data-astro-cid-lcdefpme></path><!-- La ligne unique : trait net continu séparant les deux projets --><path${addAttribute(v.lineD, "d")} class="single-transition-line" data-astro-cid-lcdefpme></path></svg></div>`;
		})()}</article>`;
	})}</div>${renderScript($$result, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/index.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/index.astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
