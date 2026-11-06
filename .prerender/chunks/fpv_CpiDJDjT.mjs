import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { g as renderTemplate, l as renderComponent, u as Fragment, v as renderHead, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { t as renderScript } from "./script_DwJ79mXe.mjs";
import { n as planningFpvMois } from "./planning_BCWkavTU.mjs";
// src/pages/agenda/fpv.astro
var fpv_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Fpv,
	file: () => $$file,
	url: () => $$url
});
var $$Fpv = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="fr" data-astro-cid-nzmdfmjn><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>Drone FPV — Planning Tournages & Prises de Vue</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead($$result)}</head><body data-astro-cid-nzmdfmjn><div class="page-wrapper" data-astro-cid-nzmdfmjn><!-- EN-TÊTE : UNIQUEMENT LE LOGO DE L'ORGANISATION --><header class="org-pure-header" data-astro-cid-nzmdfmjn><img src="/assets/logos/drone-fpv.svg" alt="Drone FPV — Tournages &amp; Prises de Vue" class="org-logo-img" data-astro-cid-nzmdfmjn><div class="header-hairline" aria-hidden="true" data-astro-cid-nzmdfmjn></div></header><!-- NAVIGATION DU MOIS --><div class="month-nav-bar" data-astro-cid-nzmdfmjn><button type="button" id="btnPrev" class="month-nav-btn" data-astro-cid-nzmdfmjn>&larr; Mois précédent</button><div id="monthDisplay" class="current-month-label" data-astro-cid-nzmdfmjn>NOVEMBRE 2026</div><button type="button" id="btnNext" class="month-nav-btn" data-astro-cid-nzmdfmjn>Mois suivant &rarr;</button></div><!-- LÉGENDE RAPIDE --><div class="pure-legend-wrap" data-astro-cid-nzmdfmjn><div class="pure-legend" data-astro-cid-nzmdfmjn><div class="legend-item" data-astro-cid-nzmdfmjn><span class="legend-bullet bullet-dispo" data-astro-cid-nzmdfmjn></span><span data-astro-cid-nzmdfmjn>Vol disponible</span></div><div class="legend-item" data-astro-cid-nzmdfmjn><span class="legend-bullet bullet-tournage" data-astro-cid-nzmdfmjn></span><span data-astro-cid-nzmdfmjn>Tournage confirmé</span></div><div class="legend-item" data-astro-cid-nzmdfmjn><span class="legend-bullet bullet-option" data-astro-cid-nzmdfmjn></span><span data-astro-cid-nzmdfmjn>Option météo / prod</span></div><div class="legend-item" data-astro-cid-nzmdfmjn><span class="legend-bullet bullet-masked" data-astro-cid-nzmdfmjn></span><span data-astro-cid-nzmdfmjn>Indisponible</span></div></div></div><!-- CALENDRIERS (AGENDA PUR) -->${planningFpvMois.map((mois, indexMois) => renderTemplate`<div${addAttribute(`cal-${indexMois}`, "id")}${addAttribute(`calendar-container ${indexMois === 0 ? "" : "is-hidden"}`, "class")}${addAttribute(indexMois, "data-month-index")}${addAttribute(`${mois.nom.toUpperCase()} ${mois.annee}`, "data-month-name")} data-astro-cid-nzmdfmjn><div class="calendar-grid" data-astro-cid-nzmdfmjn><div class="weekday-header" data-astro-cid-nzmdfmjn>LUN</div><div class="weekday-header" data-astro-cid-nzmdfmjn>MAR</div><div class="weekday-header" data-astro-cid-nzmdfmjn>MER</div><div class="weekday-header" data-astro-cid-nzmdfmjn>JEU</div><div class="weekday-header" data-astro-cid-nzmdfmjn>VEN</div><div class="weekday-header" data-astro-cid-nzmdfmjn>SAM</div><div class="weekday-header" data-astro-cid-nzmdfmjn>DIM</div>${Array.from({ length: mois.decalageLundi }).map(() => renderTemplate`<div class="calendar-cell cell-empty" aria-hidden="true" data-astro-cid-nzmdfmjn></div>`)}${mois.jours.map((item) => {
		const isLibre = item.statut === "libre";
		const isTournage = item.statut === "reserve_tournage";
		const isReperage = item.statut === "reserve_reperage";
		const isOption = item.statut === "option_meteo";
		const isIndispo = item.statut === "indisponible";
		let cellClass = "cell-is-masked";
		let tagText = "Indispo";
		let tagClass = "tag-masked";
		if (isLibre) {
			cellClass = "cell-selectable";
			tagText = "+ Choisir";
			tagClass = "tag-open";
		} else if (isTournage) {
			cellClass = "cell-is-tournage";
			tagText = "Tournage";
			tagClass = "tag-booked";
		} else if (isReperage) {
			cellClass = "cell-is-tournage";
			tagText = "Repérage";
			tagClass = "tag-booked";
		} else if (isOption) {
			cellClass = "cell-is-option";
			tagText = "Option";
			tagClass = "tag-option";
		}
		return renderTemplate`<div${addAttribute(`calendar-cell ${cellClass}`, "class")}${addAttribute(item.dateStr, "data-date")}${addAttribute(isLibre ? "button" : "region", "role")}${addAttribute(isLibre ? "0" : "-1", "tabindex")} data-astro-cid-nzmdfmjn><div class="cell-top" data-astro-cid-nzmdfmjn><span class="cell-number" data-astro-cid-nzmdfmjn>${item.jour}</span><span${addAttribute(`tag-state ${tagClass}`, "class")} data-astro-cid-nzmdfmjn>${tagText}</span></div><div class="cell-body" data-astro-cid-nzmdfmjn>${isLibre && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cell-title" data-astro-cid-nzmdfmjn>Vol disponible</div><div class="cell-detail" data-astro-cid-nzmdfmjn>Créneau ouvert</div>` })}`}${isTournage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cell-title" data-astro-cid-nzmdfmjn>Tournage validé</div><div class="cell-detail" data-astro-cid-nzmdfmjn>${item.detail}</div>` })}`}${isReperage && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cell-title" data-astro-cid-nzmdfmjn>Repérage site</div><div class="cell-detail" data-astro-cid-nzmdfmjn>${item.detail}</div>` })}`}${isOption && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cell-title" data-astro-cid-nzmdfmjn>Option posée</div><div class="cell-detail" data-astro-cid-nzmdfmjn>${item.detail}</div>` })}`}${isIndispo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cell-title" style="color: #888;" data-astro-cid-nzmdfmjn>Bloqué</div><div class="cell-detail" style="color: #999;" data-astro-cid-nzmdfmjn>Non disponible</div>` })}`}</div><div class="cell-footer-hint" data-astro-cid-nzmdfmjn>${isLibre && renderTemplate`<span data-astro-cid-nzmdfmjn>Cliquer pour choisir</span>`}${isTournage && renderTemplate`<span data-astro-cid-nzmdfmjn>Tournage calé</span>`}${isReperage && renderTemplate`<span data-astro-cid-nzmdfmjn>Visite DGAC</span>`}${isOption && renderTemplate`<span data-astro-cid-nzmdfmjn>Sous réserve</span>`}${isIndispo && renderTemplate`<span data-astro-cid-nzmdfmjn>Non disponible</span>`}</div></div>`;
	})}</div></div>`)}</div> <!-- /.page-wrapper --><!-- BARRE FLOTTANTE EN CAS DE SÉLECTION --><div id="selectionBar" class="floating-action-bar" style="display: none;" data-astro-cid-nzmdfmjn><div class="action-bar-info" data-astro-cid-nzmdfmjn><span class="action-bar-label" data-astro-cid-nzmdfmjn>Dates de tournage :</span><div id="selectedBadges" class="selected-tags-wrap" data-astro-cid-nzmdfmjn></div><button type="button" id="btnReset" class="btn-reset-dates" data-astro-cid-nzmdfmjn>Effacer</button></div><div class="action-bar-btns" data-astro-cid-nzmdfmjn><a id="btnSms" href="#" class="btn-action-sms" data-astro-cid-nzmdfmjn>📱 Envoyer par SMS à Tom &rarr;</a><a id="btnMail" href="#" class="btn-action-mail" data-astro-cid-nzmdfmjn>✉️ Envoyer par Email &rarr;</a></div></div>${renderScript($$result, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda/fpv.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda/fpv.astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda/fpv.astro";
var $$url = "/agenda/fpv";
// \0virtual:astro:page:src/pages/agenda/fpv@_@astro
var page = () => fpv_exports;
export { page };
