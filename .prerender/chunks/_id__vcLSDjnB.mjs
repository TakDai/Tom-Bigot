import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { n as render, t as getCollection } from "./_astro_content_Ci8g2p8t.mjs";
import { n as createAstro, t as $$Base } from "./Base_CTy6aqzK.mjs";
// src/pages/projets/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://tom-bigot.fr");
async function getStaticPaths() {
	return (await getCollection("projets", ({ data }) => !data.brouillon)).map((projet) => ({
		params: { id: projet.id },
		props: { projet }
	}));
}
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { projet } = Astro.props;
	const { Content } = await render(projet);
	const { titre, resume, nature, statut, domaines, lien, github, annee } = projet.data;
	const meta = [
		nature,
		statut,
		annee
	].filter(Boolean).join(" · ");
	const logoUrl = {
		"127il": "/assets/logos/127il.svg",
		"fix-my-drone": "/assets/logos/fix-my-drone.svg",
		"inskin": "/assets/logos/inskin.png",
		"komeon": "/assets/logos/komeon.png",
		"lestourangeaux": "/assets/logos/lestourangeaux.svg",
		"multi-motors": "/assets/logos/multi-motors.svg",
		"openbots": "/assets/logos/openbots.png",
		"pensee-nocturne": "/assets/logos/pensee-nocturne.svg",
		"superviseur": "/assets/logos/superviseur.svg",
		"tete-de-piaf": "/assets/logos/tdp.png",
		"tours2tours": "/assets/logos/tours2tours.png"
	}[projet.id];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titre": titre,
		"description": resume,
		"data-astro-cid-f5yi4iwf": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="prose-screen" data-astro-cid-f5yi4iwf><div class="retour-bar" data-astro-cid-f5yi4iwf><a href="/#projets" class="nav-pill" data-astro-cid-f5yi4iwf>&larr; Retour aux projets</a></div><header class="page-head fiche-head" data-astro-cid-f5yi4iwf>${logoUrl && renderTemplate`<div class="fiche-logo" data-astro-cid-f5yi4iwf><img${addAttribute(logoUrl, "src")}${addAttribute(titre, "alt")} data-astro-cid-f5yi4iwf></div>`}<div data-astro-cid-f5yi4iwf>${meta && renderTemplate`<span class="etiquette" data-astro-cid-f5yi4iwf>${meta}</span>`}<h1 class="page-title" data-astro-cid-f5yi4iwf>${titre}</h1><p class="page-subtitle" data-astro-cid-f5yi4iwf>${resume}</p></div></header>${(domaines.length > 0 || lien || github) && renderTemplate`<article class="prose-card meta-box" data-astro-cid-f5yi4iwf><h2 data-astro-cid-f5yi4iwf>INFORMATIONS CLÉS</h2><div class="meta-grille" data-astro-cid-f5yi4iwf>${domaines.length > 0 && renderTemplate`<div data-astro-cid-f5yi4iwf><span class="etiquette" data-astro-cid-f5yi4iwf>Domaines</span><div class="domaines-pills" data-astro-cid-f5yi4iwf>${domaines.map((d) => renderTemplate`<span class="nav-pill pill-sm" data-astro-cid-f5yi4iwf>${d}</span>`)}</div></div>`}${lien && renderTemplate`<div data-astro-cid-f5yi4iwf><span class="etiquette" data-astro-cid-f5yi4iwf>Accès au projet</span><div style="margin-top: 6px;" data-astro-cid-f5yi4iwf><a${addAttribute(lien, "href")} target="_blank" rel="noopener noreferrer" class="btn-noir btn-sm" data-astro-cid-f5yi4iwf>Ouvrir le site ↗</a></div></div>`}${github && renderTemplate`<div data-astro-cid-f5yi4iwf><span class="etiquette" data-astro-cid-f5yi4iwf>Code source &amp; Dépôt</span><div style="margin-top: 6px;" data-astro-cid-f5yi4iwf><a${addAttribute(github, "href")} target="_blank" rel="noopener noreferrer" class="btn-outline btn-sm" data-astro-cid-f5yi4iwf>Voir sur GitHub ↗</a></div></div>`}</div></article>`}<article class="prose-card contenu-markdown" data-astro-cid-f5yi4iwf>${renderComponent($$result, "Content", Content, { "data-astro-cid-f5yi4iwf": true })}</article><div class="retour-bar" data-astro-cid-f5yi4iwf><a href="/#projets" class="nav-pill" data-astro-cid-f5yi4iwf>&larr; Retour à la liste des projets</a></div></main>` })}`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/projets/[id].astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/projets/[id].astro";
var $$url = "/projets/[id]";
// \0virtual:astro:page:src/pages/projets/[id]@_@astro
var page = () => _id__exports;
export { page };
