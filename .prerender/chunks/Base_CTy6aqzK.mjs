import { A as ASTRO_GENERATOR, D as unescapeHTML, g as renderTemplate, p as renderSlot, v as renderHead, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { G as UnavailableAstroGlobal, X as AstroError } from "./errors-data_B2cxFk9a.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
// node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { titre, description = "Tom Bigot — Développeur, créateur technique & ingénieur systèmes. Portfolio et blog technique.", sansNav = false } = Astro.props;
	const titreComplet = titre ? `${titre} — Tom Bigot` : "TOM BIGOT — Portfolio & Blog";
	const chemin = Astro.url.pathname;
	return renderTemplate`<html lang="fr" data-astro-cid-hkbrpulz><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>${titreComplet}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(new URL(chemin, Astro.site), "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta property="og:title"${addAttribute(titreComplet, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(new URL(chemin, Astro.site), "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(titreComplet, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="theme-color" content="#ffffff"><script type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Tom Bigot",
		"url": "https://tom-bigot.fr",
		"jobTitle": "Développeur, Opérateur Projectionniste & Pilote Drone FPV",
		"sameAs": ["https://github.com/TakDai"],
		"knowsAbout": [
			"Software Engineering",
			"Cinéma Numérique DCI",
			"Argentique 35mm",
			"Drone FPV",
			"Systèmes Embarqués",
			"Sécurité & Web"
		]
	}))}<\/script>${renderHead($$result)}</head><body data-astro-cid-hkbrpulz><!-- Lien d'évitement accessibilité WCAG --><a href="#main-content" class="skip-link" data-astro-cid-hkbrpulz>Aller au contenu principal</a><!-- ================= EN-TÊTE ================= -->${!sansNav && renderTemplate`<nav class="topnav" aria-label="Navigation principale" data-astro-cid-hkbrpulz><a class="site-logo" href="/" aria-label="Tom Bigot — Accueil" data-astro-cid-hkbrpulz><span class="site-logo-icon" data-astro-cid-hkbrpulz></span><span class="site-name" data-astro-cid-hkbrpulz>TOM BIGOT</span></a><div class="nav-group" data-astro-cid-hkbrpulz><a${addAttribute(`nav-pill ${chemin === "/" ? "active" : ""}`, "class")} href="/#projets-chronologie"${addAttribute(chemin === "/" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Projets</a><a${addAttribute(`nav-pill ${chemin === "/projectionniste" ? "active" : ""}`, "class")} href="/projectionniste"${addAttribute(chemin === "/projectionniste" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Projectionniste</a><a${addAttribute(`nav-pill ${chemin === "/pilote-fpv" ? "active" : ""}`, "class")} href="/pilote-fpv"${addAttribute(chemin === "/pilote-fpv" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Pilote FPV</a><a${addAttribute(`nav-pill ${chemin === "/developpement" ? "active" : ""}`, "class")} href="/developpement"${addAttribute(chemin === "/developpement" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Développement</a><a${addAttribute(`nav-pill ${chemin === "/agenda" ? "active" : ""}`, "class")} href="/agenda"${addAttribute(chemin === "/agenda" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Agenda</a><a${addAttribute(`nav-pill ${chemin.startsWith("/blog") ? "active" : ""}`, "class")} href="/blog"${addAttribute(chemin.startsWith("/blog") ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Blog</a><a${addAttribute(`nav-pill ${chemin === "/contact" ? "active" : ""}`, "class")} href="/contact"${addAttribute(chemin === "/contact" ? "page" : void 0, "aria-current")} data-astro-cid-hkbrpulz>Contact</a></div></nav>`}<!-- ================= CONTENU ================= --><main class="page-main" id="main-content" data-astro-cid-hkbrpulz>${renderSlot($$result, $$slots["default"])}</main><!-- ================= PIED DE PAGE ================= --><footer class="foot" data-astro-cid-hkbrpulz><div class="foot-brand" data-astro-cid-hkbrpulz><span class="brand-nom" data-astro-cid-hkbrpulz>TOM BIGOT</span><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><span data-astro-cid-hkbrpulz>Portfolio</span><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><span data-astro-cid-hkbrpulz>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}</span></div>${!sansNav ? renderTemplate`<div class="foot-links" data-astro-cid-hkbrpulz><a href="/projectionniste" data-astro-cid-hkbrpulz>Projectionniste</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/pilote-fpv" data-astro-cid-hkbrpulz>Pilote FPV</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/developpement" data-astro-cid-hkbrpulz>Développement</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/agenda" data-astro-cid-hkbrpulz>Agenda</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="https://github.com/TakDai" target="_blank" rel="noopener noreferrer" data-astro-cid-hkbrpulz>GitHub</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/blog" data-astro-cid-hkbrpulz>Blog</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/contact" data-astro-cid-hkbrpulz>Contact</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/mentions-legales" data-astro-cid-hkbrpulz>Mentions</a></div>` : renderTemplate`<div class="foot-links" data-astro-cid-hkbrpulz><a href="https://github.com/TakDai" target="_blank" rel="noopener noreferrer" data-astro-cid-hkbrpulz>GitHub</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="mailto:contact@tom-bigot.fr" data-astro-cid-hkbrpulz>contact@tom-bigot.fr</a><span class="foot-sep" data-astro-cid-hkbrpulz>&bull;</span><a href="/mentions-legales" data-astro-cid-hkbrpulz>Mentions</a></div>`}</footer></body></html>`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/layouts/Base.astro", void 0);
export { createAstro as n, $$Base as t };
