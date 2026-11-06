import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { n as render, t as getCollection } from "./_astro_content_Ci8g2p8t.mjs";
import { n as createAstro, t as $$Base } from "./Base_CTy6aqzK.mjs";
// src/pages/blog/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://tom-bigot.fr");
async function getStaticPaths() {
	return (await getCollection("blog", ({ data }) => !data.brouillon)).map((article) => ({
		params: { id: article.id },
		props: { article }
	}));
}
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { article } = Astro.props;
	const { Content } = await render(article);
	const { titre, description, date, tags, tempsLecture } = article.data;
	function formaterDate(d) {
		return new Intl.DateTimeFormat("fr-FR", {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(d);
	}
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titre": titre,
		"description": description,
		"data-astro-cid-ymihodss": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="prose-screen" data-astro-cid-ymihodss><div class="retour-bar" data-astro-cid-ymihodss><a href="/blog" class="nav-pill" data-astro-cid-ymihodss>&larr; Tous les articles</a></div><header class="page-head article-head" data-astro-cid-ymihodss><div class="article-meta-row" data-astro-cid-ymihodss><span class="article-date" data-astro-cid-ymihodss>${formaterDate(date)}</span>${tempsLecture && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="meta-sep" data-astro-cid-ymihodss>&bull;</span><span class="article-lecture" data-astro-cid-ymihodss>${tempsLecture} de lecture</span>` })}`}</div><h1 class="page-title" data-astro-cid-ymihodss>${titre}</h1><p class="page-subtitle" data-astro-cid-ymihodss>${description}</p>${tags && tags.length > 0 && renderTemplate`<div class="tags-row" data-astro-cid-ymihodss>${tags.map((t) => renderTemplate`<span class="domaine-pill" data-astro-cid-ymihodss>${t}</span>`)}</div>`}</header><article class="prose-card article-contenu" data-astro-cid-ymihodss>${renderComponent($$result, "Content", Content, { "data-astro-cid-ymihodss": true })}</article><div class="actions-fin" data-astro-cid-ymihodss><a href="/blog" class="nav-pill" data-astro-cid-ymihodss>&larr; Retour aux articles du blog</a><a href="/contact" class="btn-noir" data-astro-cid-ymihodss>Échanger à propos de cet article &rarr;</a></div></main>` })}`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/blog/[id].astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/blog/[id].astro";
var $$url = "/blog/[id]";
// \0virtual:astro:page:src/pages/blog/[id]@_@astro
var page = () => _id__exports;
export { page };
