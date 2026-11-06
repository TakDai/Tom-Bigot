import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { t as getCollection } from "./_astro_content_Ci8g2p8t.mjs";
import { t as $$Base } from "./Base_CTy6aqzK.mjs";
// src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const articles = (await getCollection("blog", ({ data }) => !data.brouillon)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
	function formaterDate(date) {
		return new Intl.DateTimeFormat("fr-FR", {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(date);
	}
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titre": "Blog & Articles Techniques",
		"description": "Articles, retours d'expérience, ingénierie logicielle et systèmes embarqués par Tom Bigot.",
		"data-astro-cid-x255k2k2": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="prose-screen" data-astro-cid-x255k2k2><header class="page-head" data-astro-cid-x255k2k2><span class="etiquette" data-astro-cid-x255k2k2>PUBLICATIONS &bull; ANALYSES TECHNIQUES</span><h1 class="page-title" data-astro-cid-x255k2k2>LE BLOG TECHNIQUE</h1><p class="page-subtitle" data-astro-cid-x255k2k2>Retours d'expérience approfondis, architectures logicielles, optimisation de systèmes embarqués et pratiques d'ingénierie moderne.</p></header><div class="articles-liste" data-astro-cid-x255k2k2>${articles.map((article) => {
		const { titre, description, date, tags, tempsLecture } = article.data;
		return renderTemplate`<a class="article-card"${addAttribute(`/blog/${article.id}`, "href")} data-astro-cid-x255k2k2><span class="card-ext" data-astro-cid-x255k2k2>↗</span><div class="article-meta-row" data-astro-cid-x255k2k2><span class="article-date" data-astro-cid-x255k2k2>${formaterDate(date)}</span>${tempsLecture && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="meta-sep" data-astro-cid-x255k2k2>&bull;</span><span class="article-lecture" data-astro-cid-x255k2k2>${tempsLecture} de lecture</span>` })}`}</div><h2 class="article-titre" data-astro-cid-x255k2k2>${titre}</h2><p class="article-desc" data-astro-cid-x255k2k2>${description}</p>${tags && tags.length > 0 && renderTemplate`<div class="article-tags" data-astro-cid-x255k2k2>${tags.map((tag) => renderTemplate`<span class="domaine-pill" data-astro-cid-x255k2k2>${tag}</span>`)}</div>`}</a>`;
	})}</div><div class="actions-row" data-astro-cid-x255k2k2><a href="/#projets-chronologie" class="btn-noir" data-astro-cid-x255k2k2>Voir les projets</a><a href="/" class="nav-pill" data-astro-cid-x255k2k2>&larr; Retour à l'accueil</a></div></main>` })}`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/blog/index.astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/blog/index.astro";
var $$url = "/blog";
// \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
export { page };
