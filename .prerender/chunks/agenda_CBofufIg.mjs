import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_hmLpcD5X.mjs";
import { t as createComponent } from "./compiler_CGQe6UU-.mjs";
import { t as $$Base } from "./Base_CTy6aqzK.mjs";
import { t as renderScript } from "./script_DwJ79mXe.mjs";
// src/pages/agenda.astro
var agenda_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Agenda,
	file: () => $$file,
	url: () => $$url
});
var $$Agenda = createComponent(($$result, $$props, $$slots) => {
	const planningCinemaMois = [{
		nom: "Novembre",
		annee: 2026,
		decalageLundi: 6,
		jours: [
			{
				jour: 1,
				dateStr: "2026-11-01",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Cabine DCI & 35mm (Soir)",
				ownerId: "studios"
			},
			{
				jour: 2,
				dateStr: "2026-11-02",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Théorie DCI & Acoustique",
				ownerId: "cfa"
			},
			{
				jour: 3,
				dateStr: "2026-11-03",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Atelier Optique & Électronique",
				ownerId: "cfa"
			},
			{
				jour: 4,
				dateStr: "2026-11-04",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Cryptographie & KDM",
				ownerId: "cfa"
			},
			{
				jour: 5,
				dateStr: "2026-11-05",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Pratique 35mm Argentique",
				ownerId: "cfa"
			},
			{
				jour: 6,
				dateStr: "2026-11-06",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Normes de sécurité ERP",
				ownerId: "cfa"
			},
			{
				jour: 7,
				dateStr: "2026-11-07",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Projection itinérante (Soirée)",
				ownerId: "cineoff"
			},
			{
				jour: 8,
				dateStr: "2026-11-08",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 9,
				dateStr: "2026-11-09",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 10,
				dateStr: "2026-11-10",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 11,
				dateStr: "2026-11-11",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Férié — Séances continues DCI",
				ownerId: "studios"
			},
			{
				jour: 12,
				dateStr: "2026-11-12",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 13,
				dateStr: "2026-11-13",
				statut: "option",
				label: "Option en cours",
				detail: "Confirmation exploitant en attente",
				ownerId: "none"
			},
			{
				jour: 14,
				dateStr: "2026-11-14",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Séance 35mm Spéciale Patrimoine",
				ownerId: "studios"
			},
			{
				jour: 15,
				dateStr: "2026-11-15",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 16,
				dateStr: "2026-11-16",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Sonorisation Dolby CP",
				ownerId: "cfa"
			},
			{
				jour: 17,
				dateStr: "2026-11-17",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Réseaux TMS & Ingest",
				ownerId: "cfa"
			},
			{
				jour: 18,
				dateStr: "2026-11-18",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Calibration laser & xénon",
				ownerId: "cfa"
			},
			{
				jour: 19,
				dateStr: "2026-11-19",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Maintenance préventive cabine",
				ownerId: "cfa"
			},
			{
				jour: 20,
				dateStr: "2026-11-20",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Contrôles réglementaires",
				ownerId: "cfa"
			},
			{
				jour: 21,
				dateStr: "2026-11-21",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Tournée week-end circuit rural",
				ownerId: "cineoff"
			},
			{
				jour: 22,
				dateStr: "2026-11-22",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Tournée week-end circuit rural",
				ownerId: "cineoff"
			},
			{
				jour: 23,
				dateStr: "2026-11-23",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 24,
				dateStr: "2026-11-24",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 25,
				dateStr: "2026-11-25",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 26,
				dateStr: "2026-11-26",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 27,
				dateStr: "2026-11-27",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 28,
				dateStr: "2026-11-28",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Soirée ciné-débat & régie micro",
				ownerId: "studios"
			},
			{
				jour: 29,
				dateStr: "2026-11-29",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 30,
				dateStr: "2026-11-30",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			}
		]
	}, {
		nom: "Décembre",
		annee: 2026,
		decalageLundi: 1,
		jours: [
			{
				jour: 1,
				dateStr: "2026-12-01",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 2,
				dateStr: "2026-12-02",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 3,
				dateStr: "2026-12-03",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 4,
				dateStr: "2026-12-04",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 5,
				dateStr: "2026-12-05",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Cabine Week-end 7 écrans",
				ownerId: "studios"
			},
			{
				jour: 6,
				dateStr: "2026-12-06",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Cabine Week-end 7 écrans",
				ownerId: "studios"
			},
			{
				jour: 7,
				dateStr: "2026-12-07",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Exploitation multi-écrans",
				ownerId: "cfa"
			},
			{
				jour: 8,
				dateStr: "2026-12-08",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Processeurs IMS automatisés",
				ownerId: "cfa"
			},
			{
				jour: 9,
				dateStr: "2026-12-09",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Dépannage optique d'urgence",
				ownerId: "cfa"
			},
			{
				jour: 10,
				dateStr: "2026-12-10",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Normes SMPTE & DCI",
				ownerId: "cfa"
			},
			{
				jour: 11,
				dateStr: "2026-12-11",
				statut: "formation",
				label: "CFA / Formation",
				detail: "Évaluation des acquis",
				ownerId: "cfa"
			},
			{
				jour: 12,
				dateStr: "2026-12-12",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 13,
				dateStr: "2026-12-13",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 14,
				dateStr: "2026-12-14",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 15,
				dateStr: "2026-12-15",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 16,
				dateStr: "2026-12-16",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Séance événementielle fête communale",
				ownerId: "cineoff"
			},
			{
				jour: 17,
				dateStr: "2026-12-17",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 18,
				dateStr: "2026-12-18",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 19,
				dateStr: "2026-12-19",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Circuit jeunesse vacances scolaires",
				ownerId: "cineoff"
			},
			{
				jour: 20,
				dateStr: "2026-12-20",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Circuit jeunesse vacances scolaires",
				ownerId: "cineoff"
			},
			{
				jour: 21,
				dateStr: "2026-12-21",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 22,
				dateStr: "2026-12-22",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 23,
				dateStr: "2026-12-23",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Séances jeunesse affluence",
				ownerId: "studios"
			},
			{
				jour: 24,
				dateStr: "2026-12-24",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 25,
				dateStr: "2026-12-25",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Séances de Noël après-midi + soir",
				ownerId: "studios"
			},
			{
				jour: 26,
				dateStr: "2026-12-26",
				statut: "reserve_studios",
				label: "Les Studios",
				detail: "Séances de Noël après-midi + soir",
				ownerId: "studios"
			},
			{
				jour: 27,
				dateStr: "2026-12-27",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 28,
				dateStr: "2026-12-28",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 29,
				dateStr: "2026-12-29",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 30,
				dateStr: "2026-12-30",
				statut: "libre",
				label: "Disponible Cabine",
				ownerId: "none"
			},
			{
				jour: 31,
				dateStr: "2026-12-31",
				statut: "reserve_cineoff",
				label: "Ciné-Off",
				detail: "Séance Réveillon itinérance festive",
				ownerId: "cineoff"
			}
		]
	}];
	const planningFpvMois = [{
		nom: "Novembre",
		annee: 2026,
		decalageLundi: 6,
		jours: [
			{
				jour: 1,
				dateStr: "2026-11-01",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Engagement en cabine"
			},
			{
				jour: 2,
				dateStr: "2026-11-02",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 3,
				dateStr: "2026-11-03",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 4,
				dateStr: "2026-11-04",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 5,
				dateStr: "2026-11-05",
				statut: "option_meteo",
				label: "Option Tournage FPV",
				detail: "Tournage extérieur sous réserve météo"
			},
			{
				jour: 6,
				dateStr: "2026-11-06",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 7,
				dateStr: "2026-11-07",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Autre engagement"
			},
			{
				jour: 8,
				dateStr: "2026-11-08",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Journée complète ouverte"
			},
			{
				jour: 9,
				dateStr: "2026-11-09",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Tournage ou repérage"
			},
			{
				jour: 10,
				dateStr: "2026-11-10",
				statut: "reserve_reperage",
				label: "Repérage Site",
				detail: "Visite technique site industriel"
			},
			{
				jour: 11,
				dateStr: "2026-11-11",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Férié cabine"
			},
			{
				jour: 12,
				dateStr: "2026-11-12",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Créneau vol extérieur ou intérieur"
			},
			{
				jour: 13,
				dateStr: "2026-11-13",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Créneau vol ouvert"
			},
			{
				jour: 14,
				dateStr: "2026-11-14",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 15,
				dateStr: "2026-11-15",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Week-end disponible tournage"
			},
			{
				jour: 16,
				dateStr: "2026-11-16",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 17,
				dateStr: "2026-11-17",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 18,
				dateStr: "2026-11-18",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 19,
				dateStr: "2026-11-19",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 20,
				dateStr: "2026-11-20",
				statut: "reserve_tournage",
				label: "Tournage Confirmé",
				detail: "Prise de vue cinématique 5\""
			},
			{
				jour: 21,
				dateStr: "2026-11-21",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 22,
				dateStr: "2026-11-22",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 23,
				dateStr: "2026-11-23",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 24,
				dateStr: "2026-11-24",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 25,
				dateStr: "2026-11-25",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 26,
				dateStr: "2026-11-26",
				statut: "option_meteo",
				label: "Option Production",
				detail: "Option posée par agence"
			},
			{
				jour: 27,
				dateStr: "2026-11-27",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 28,
				dateStr: "2026-11-28",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 29,
				dateStr: "2026-11-29",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 30,
				dateStr: "2026-11-30",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			}
		]
	}, {
		nom: "Décembre",
		annee: 2026,
		decalageLundi: 1,
		jours: [
			{
				jour: 1,
				dateStr: "2026-12-01",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Tournage ou repérage"
			},
			{
				jour: 2,
				dateStr: "2026-12-02",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Tournage ou repérage"
			},
			{
				jour: 3,
				dateStr: "2026-12-03",
				statut: "reserve_tournage",
				label: "Tournage Intérieur",
				detail: "Cinewhoop bureaux & show-room"
			},
			{
				jour: 4,
				dateStr: "2026-12-04",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 5,
				dateStr: "2026-12-05",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 6,
				dateStr: "2026-12-06",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 7,
				dateStr: "2026-12-07",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 8,
				dateStr: "2026-12-08",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 9,
				dateStr: "2026-12-09",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 10,
				dateStr: "2026-12-10",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 11,
				dateStr: "2026-12-11",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Formation"
			},
			{
				jour: 12,
				dateStr: "2026-12-12",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Week-end ouvert"
			},
			{
				jour: 13,
				dateStr: "2026-12-13",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Week-end ouvert"
			},
			{
				jour: 14,
				dateStr: "2026-12-14",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 15,
				dateStr: "2026-12-15",
				statut: "reserve_reperage",
				label: "Repérage Site",
				detail: "Validation espace aérien"
			},
			{
				jour: 16,
				dateStr: "2026-12-16",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 17,
				dateStr: "2026-12-17",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Tournage possible"
			},
			{
				jour: 18,
				dateStr: "2026-12-18",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Tournage possible"
			},
			{
				jour: 19,
				dateStr: "2026-12-19",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 20,
				dateStr: "2026-12-20",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 21,
				dateStr: "2026-12-21",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 22,
				dateStr: "2026-12-22",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 23,
				dateStr: "2026-12-23",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 24,
				dateStr: "2026-12-24",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Matinée disponible"
			},
			{
				jour: 25,
				dateStr: "2026-12-25",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Férié Noël"
			},
			{
				jour: 26,
				dateStr: "2026-12-26",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			},
			{
				jour: 27,
				dateStr: "2026-12-27",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 28,
				dateStr: "2026-12-28",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 29,
				dateStr: "2026-12-29",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 30,
				dateStr: "2026-12-30",
				statut: "libre",
				label: "Vol FPV Disponible",
				detail: "Disponibilité tournage"
			},
			{
				jour: 31,
				dateStr: "2026-12-31",
				statut: "indisponible",
				label: "Indisponible",
				detail: "Non disponible"
			}
		]
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"titre": "Agendas Indépendants : Cabine Cinéma & Drone FPV",
		"description": "Consultez les agendas dédiés et indépendants de Tom Bigot : planning cabines pour cinémas partenaires (avec suivi CFA) et calendrier tournage / devis pour clients drone FPV.",
		"data-astro-cid-w5sdfsum": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="prose-screen agenda-page" data-astro-cid-w5sdfsum><header class="page-head agenda-header" data-astro-cid-w5sdfsum><div class="head-topline" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>PLANIFICATION &bull; AGENDAS INDÉPENDANTS</span><div class="agenda-switch-pills" data-astro-cid-w5sdfsum><a href="#agenda-cinema" id="quickLinkCinema" class="nav-pill active-nav-pill" data-astro-cid-w5sdfsum>Agenda Cinéma</a><a href="#agenda-fpv" id="quickLinkFpv" class="nav-pill" data-astro-cid-w5sdfsum>Agenda Drone FPV</a></div></div><h1 class="page-title" data-astro-cid-w5sdfsum>AGENDAS INDÉPENDANTS</h1><p class="page-subtitle" data-astro-cid-w5sdfsum>Deux espaces de planification totalement distincts pour garantir la confidentialité et la précision de chaque métier : l'agenda <strong data-astro-cid-w5sdfsum>Cabines Cinéma</strong> pour mes 2 cinémas partenaires et l'agenda <strong data-astro-cid-w5sdfsum>Drone FPV</strong> pour les productions audiovisuelles.</p></header><!-- BANDEAU ACCÈS DIRECT PAR ORGANISATION --><aside class="org-subdomain-hub" aria-label="Espaces dédiés par organisation" data-astro-cid-w5sdfsum><div class="org-hub-header" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>PAGES DÉDIÉES &bull; SOUS-DOMAINES RÉSERVÉS</span><span class="hub-privacy-badge" data-astro-cid-w5sdfsum>ISOLATION STRICTE CONFIDENTIALITÉ</span></div><p class="org-hub-desc" data-astro-cid-w5sdfsum>Chaque établissement dispose désormais de sa propre page exclusive avec formulaire adapté et calendrier isolé. Cliquez sur votre espace dédié :</p><div class="org-hub-grid" data-astro-cid-w5sdfsum><a href="/agenda/cine-off" class="org-hub-card" data-astro-cid-w5sdfsum><span class="hub-icon" data-astro-cid-w5sdfsum>🎞️</span><div class="hub-info" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Ciné-Off (37)</strong><small data-astro-cid-w5sdfsum>cine-off.tom-bigot.fr</small><span data-astro-cid-w5sdfsum>Circuit itinérant &bull; Tournées &rarr;</span></div></a><a href="/agenda/les-studios" class="org-hub-card" data-astro-cid-w5sdfsum><span class="hub-icon" data-astro-cid-w5sdfsum>🏛️</span><div class="hub-info" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Les Studios (Tours)</strong><small data-astro-cid-w5sdfsum>studios.tom-bigot.fr</small><span data-astro-cid-w5sdfsum>7 Écrans &bull; Cabines &amp; 35mm &rarr;</span></div></a><a href="/agenda/fpv" class="org-hub-card" data-astro-cid-w5sdfsum><span class="hub-icon" data-astro-cid-w5sdfsum>🚁</span><div class="hub-info" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Drone FPV &amp; Devis</strong><small data-astro-cid-w5sdfsum>fpv.tom-bigot.fr</small><span data-astro-cid-w5sdfsum>Tournages &bull; Devis instantané &rarr;</span></div></a><a href="/agenda/admin" class="org-hub-card" data-astro-cid-w5sdfsum><span class="hub-icon" data-astro-cid-w5sdfsum>🛡️</span><div class="hub-info" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Superviseur</strong><small data-astro-cid-w5sdfsum>admin.tom-bigot.fr</small><span data-astro-cid-w5sdfsum>Master planning consolidé &rarr;</span></div></a></div></aside><!-- GRAND SÉLECTEUR D'AGENDA INDÉPENDANT --><nav class="agenda-master-selector" aria-label="Sélection de l'agenda" data-astro-cid-w5sdfsum><button type="button" id="btnSelectCinema" class="agenda-master-tab active" aria-controls="agenda-cinema-wrapper" aria-selected="true" data-astro-cid-w5sdfsum><span class="master-tab-icon" data-astro-cid-w5sdfsum>🏛️</span><div class="master-tab-text" data-astro-cid-w5sdfsum><div class="master-tab-title-line" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>1. AGENDA CABINES CINÉMA</strong><span class="subdomain-badge" data-astro-cid-w5sdfsum>cine.tom-bigot.fr</span></div><span data-astro-cid-w5sdfsum>Mes 2 cinémas partenaires &bull; Suivi des semaines CFA</span></div><span class="master-tab-arrow" data-astro-cid-w5sdfsum>&rarr;</span></button><button type="button" id="btnSelectFpv" class="agenda-master-tab" aria-controls="agenda-fpv-wrapper" aria-selected="false" data-astro-cid-w5sdfsum><span class="master-tab-icon" data-astro-cid-w5sdfsum>🚁</span><div class="master-tab-text" data-astro-cid-w5sdfsum><div class="master-tab-title-line" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>2. AGENDA DRONE FPV &amp; DEVIS</strong><span class="subdomain-badge" data-astro-cid-w5sdfsum>fpv.tom-bigot.fr</span></div><span data-astro-cid-w5sdfsum>Tournages cinématiques, repérages &bull; Devis sous 24h</span></div><span class="master-tab-arrow" data-astro-cid-w5sdfsum>&rarr;</span></button></nav><!-- ======================================================================
         SECTION 1 : AGENDA CABINE CINÉMA (Totalement autonome)
         ====================================================================== --><div id="agenda-cinema-wrapper" class="agenda-view-wrapper active-agenda-view" data-astro-cid-w5sdfsum><!-- Légende Cinéma --><div class="agenda-toolbar" data-astro-cid-w5sdfsum><div class="legend-grid" data-astro-cid-w5sdfsum><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-libre" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>DISPONIBLE (LIBRE)</strong><span data-astro-cid-w5sdfsum>Créneau ouvert aux propositions de séances</span></div></div><div class="legend-badge legend-badge-studios" data-astro-cid-w5sdfsum><span class="legend-box box-studios" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>LES STUDIOS</strong><span data-astro-cid-w5sdfsum>Séance réservée Cinémas Les Studios</span></div></div><div class="legend-badge legend-badge-cineoff" data-astro-cid-w5sdfsum><span class="legend-box box-cineoff" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>CINÉ-OFF</strong><span data-astro-cid-w5sdfsum>Séance réservée Circuit itinérant</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-formation" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>CFA / FORMATION</strong><span data-astro-cid-w5sdfsum>Période d'apprentissage (non mobilisable)</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-option" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>OPTION EN COURS</strong><span data-astro-cid-w5sdfsum>Date en attente de confirmation</span></div></div></div><div class="month-selector-bar" data-astro-cid-w5sdfsum><button type="button" id="btnPrevCinemaMonth" class="btn-outline btn-month" data-astro-cid-w5sdfsum>&larr; Mois précédent</button><div class="current-month-display" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>PLANNING CABINES</span><h2 id="cinemaMonthTitle" class="month-heading" data-astro-cid-w5sdfsum>NOVEMBRE 2026</h2></div><button type="button" id="btnNextCinemaMonth" class="btn-outline btn-month" data-astro-cid-w5sdfsum>Mois suivant &rarr;</button></div></div><!-- Calendriers Cinéma -->${planningCinemaMois.map((mois, indexMois) => renderTemplate`<section${addAttribute(`cine-calendar-view-${indexMois}`, "id")}${addAttribute(`calendar-card cinema-month-view ${indexMois === 0 ? "is-active-month" : "is-hidden-month"}`, "class")}${addAttribute(indexMois, "data-month-index")}${addAttribute(`${mois.nom.toUpperCase()} ${mois.annee}`, "data-month-name")} data-astro-cid-w5sdfsum><div class="calendar-grid" data-astro-cid-w5sdfsum><div class="weekday-col" data-astro-cid-w5sdfsum>LUN</div><div class="weekday-col" data-astro-cid-w5sdfsum>MAR</div><div class="weekday-col" data-astro-cid-w5sdfsum>MER</div><div class="weekday-col" data-astro-cid-w5sdfsum>JEU</div><div class="weekday-col" data-astro-cid-w5sdfsum>VEN</div><div class="weekday-col" data-astro-cid-w5sdfsum>SAM</div><div class="weekday-col" data-astro-cid-w5sdfsum>DIM</div>${Array.from({ length: mois.decalageLundi }).map((_, i) => renderTemplate`<div class="day-cell day-empty" aria-hidden="true" data-astro-cid-w5sdfsum></div>`)}${mois.jours.map((item) => {
		const isLibre = item.statut === "libre";
		const isFormation = item.statut === "formation";
		const isStudios = item.statut === "reserve_studios";
		const isCineoff = item.statut === "reserve_cineoff";
		const isOption = item.statut === "option";
		const owner = item.ownerId;
		return renderTemplate`<div${addAttribute(`day-cell day-cine-${item.statut} ${isLibre ? "day-selectable day-cine-selectable" : "day-locked day-cine-locked"}`, "class")}${addAttribute(item.dateStr, "data-date")}${addAttribute(item.statut, "data-statut")}${addAttribute(owner, "data-owner")}${addAttribute(item.label, "data-label")}${addAttribute(item.detail || "", "data-detail")}${addAttribute(isLibre ? "button" : "region", "role")}${addAttribute(isLibre ? "0" : "-1", "tabindex")} data-astro-cid-w5sdfsum><div class="day-topline" data-astro-cid-w5sdfsum><span class="day-number" data-astro-cid-w5sdfsum>${item.jour}</span>${isLibre && renderTemplate`<span class="tag-libre" data-astro-cid-w5sdfsum>+ Choisir</span>`}${!isLibre && renderTemplate`<span class="tag-cine-dynamic" data-day-tag data-astro-cid-w5sdfsum>${isFormation ? "CFA" : isStudios ? "Studios" : isCineoff ? "Ciné-Off" : isOption ? "Option" : "🔒 Occupé"}</span>`}</div><div class="day-body" data-astro-cid-w5sdfsum>${isLibre ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="day-label-main" data-astro-cid-w5sdfsum>${item.label}</div>${item.detail && renderTemplate`<div class="day-detail-txt" data-astro-cid-w5sdfsum>${item.detail}</div>`}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="cine-content-dynamic" data-astro-cid-w5sdfsum><div class="day-label-main" data-slot-title data-astro-cid-w5sdfsum>${item.label}</div><div class="day-detail-txt" data-slot-desc data-astro-cid-w5sdfsum>${item.detail || ""}</div></div>` })}`}</div>${isLibre && renderTemplate`<div class="day-action-hint" data-astro-cid-w5sdfsum><span data-astro-cid-w5sdfsum>Poser une séance</span></div>`}${!isLibre && renderTemplate`<div class="day-action-hint day-action-hint-locked" data-astro-cid-w5sdfsum><span data-action-hint-txt data-astro-cid-w5sdfsum>${isFormation ? "CFA" : "Réservé cabine"}</span></div>`}</div>`;
	})}</div></section>`)}<!-- Panier de dates Cinéma --><div id="selectionBarCinema" class="selection-summary-bar" style="display: none;" data-astro-cid-w5sdfsum><div class="selection-info" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>SÉANCES CINÉMA SÉLECTIONNÉES</span><div id="selectedCinemaDatesList" class="selected-tags-container" data-astro-cid-w5sdfsum></div></div><div class="selection-actions" data-astro-cid-w5sdfsum><button type="button" id="btnClearCinemaDates" class="btn-clear" data-astro-cid-w5sdfsum>Vider</button><a href="#formCinemaContainer" class="btn-noir btn-jump-form" data-astro-cid-w5sdfsum>Finaliser la proposition &darr;</a></div></div><!-- Formulaire Cinéma --><section id="formCinemaContainer" class="prose-card form-container" data-astro-cid-w5sdfsum><div class="form-header" data-astro-cid-w5sdfsum><div class="form-pre" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>CABINE PROJECTION &bull; FORMULAIRE EXPLOITANT</span><span class="badge-direct" id="formHeaderBadge" data-astro-cid-w5sdfsum>CABINE CINÉMA</span></div><h2 data-astro-cid-w5sdfsum>POSER DES DATES D'INTERVENTION EN CABINE</h2><p class="form-intro" data-astro-cid-w5sdfsum>Formulaire exclusivement réservé à mes cinémas partenaires et exploitants de salles de cinéma.</p></div><form id="agendaFormCinema" class="styled-agenda-form" data-astro-cid-w5sdfsum><!-- Piège anti-bot / honeypot OWASP OAT-007 (invisible aux utilisateurs) --><div class="hp-field-guard" aria-hidden="true" style="position: absolute; left: -9999px; opacity: 0; pointer-events: none; width: 0; height: 0; overflow: hidden;" data-astro-cid-w5sdfsum><label for="cine_website_url" data-astro-cid-w5sdfsum>Ne pas remplir</label><input type="text" id="cine_website_url" name="cine_website_url" tabindex="-1" autocomplete="off" data-astro-cid-w5sdfsum></div><div class="form-section-title" data-astro-cid-w5sdfsum><span class="step-num" data-astro-cid-w5sdfsum>1</span><h3 data-astro-cid-w5sdfsum>IDENTIFICATION DE L'ÉTABLISSEMENT</h3></div><div class="form-grid-fields" data-astro-cid-w5sdfsum><div class="form-field full-width" data-astro-cid-w5sdfsum><label data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>ÉTABLISSEMENT / SALLE DE CINÉMA *</strong></label><div class="cinema-radio-group" data-astro-cid-w5sdfsum><label class="cinema-option-card" data-astro-cid-w5sdfsum><input type="radio" name="cinemaChoix" value="Cinémas Les Studios" id="radioCineStudios" checked data-astro-cid-w5sdfsum><span class="option-content" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>🏛️ Cinémas Les Studios</strong><span class="sub" data-astro-cid-w5sdfsum>Tours &bull; 7 salles Art &amp; Essai</span></span></label><label class="cinema-option-card" data-astro-cid-w5sdfsum><input type="radio" name="cinemaChoix" value="Ciné-Off (Circuit itinérant)" id="radioCineOff" data-astro-cid-w5sdfsum><span class="option-content" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>🎞️ Ciné-Off</strong><span class="sub" data-astro-cid-w5sdfsum>Circuit itinérant 37</span></span></label><label class="cinema-option-card" data-astro-cid-w5sdfsum><input type="radio" name="cinemaChoix" value="Autre cinéma / Festival" id="radioCineAutre" data-astro-cid-w5sdfsum><span class="option-content" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>🏢 Autre cinéma</strong><span class="sub" data-astro-cid-w5sdfsum>Salle / Festival</span></span></label></div></div><div class="form-field" data-astro-cid-w5sdfsum><label for="structureCine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>NOM DU CINÉMA OU FESTIVAL *</strong></label><input type="text" id="structureCine" name="structureCine" value="Cinémas Les Studios" required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="contactCine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>RESPONSABLE CABINE / DIRECTION *</strong></label><input type="text" id="contactCine" name="contactCine" placeholder="Ex : Philippe D." required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="emailCine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>EMAIL PROFESSIONNEL *</strong></label><input type="email" id="emailCine" name="emailCine" placeholder="Ex : cabine@cinemas-lesstudios.fr" required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="telCine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TÉLÉPHONE DIRECT CABINE</strong></label><input type="tel" id="telCine" name="telCine" placeholder="Ex : 02 47 XX XX XX" data-astro-cid-w5sdfsum></div></div><div class="form-section-title" data-astro-cid-w5sdfsum><span class="step-num" data-astro-cid-w5sdfsum>2</span><h3 data-astro-cid-w5sdfsum>CRÉNEAUX, SÉANCES &amp; DATES DEMANDÉES</h3></div><div class="form-grid-fields" data-astro-cid-w5sdfsum><div class="form-field full-width" data-astro-cid-w5sdfsum><label for="datesCinemaInput" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>DATE(S) CABINE CHOISIE(S) *</strong><span class="label-help" data-astro-cid-w5sdfsum>(Sélectionnées automatiquement en cliquant sur le calendrier ci-dessus)</span></label><input type="text" id="datesCinemaInput" name="datesCinemaInput" placeholder="Ex : 2026-11-09, 2026-11-10..." required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="typeVacation" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TYPE DE VACATION CABINE *</strong></label><select id="typeVacation" name="typeVacation" required data-astro-cid-w5sdfsum><option value="Soirée (18h00 - 23h30)" data-astro-cid-w5sdfsum>Soirée (18h00 - 23h30)</option><option value="Après-midi + Soirée (13h45 - 23h30)" data-astro-cid-w5sdfsum>Après-midi + Soirée (13h45 - 23h30)</option><option value="Après-midi seule (13h45 - 18h00)" data-astro-cid-w5sdfsum>Après-midi seule (13h45 - 18h00)</option><option value="Matinée scolaire / Débat (08h30 - 12h30)" data-astro-cid-w5sdfsum>Matinée scolaire / Débat (08h30 - 12h30)</option><option value="Journée continue (Week-end / Sortie)" data-astro-cid-w5sdfsum>Journée continue (Week-end / Affluence)</option><option value="Remplacement d'urgence cabine" data-astro-cid-w5sdfsum>Remplacement d'urgence / Imprévu</option></select></div><div class="form-field" data-astro-cid-w5sdfsum><label for="technoCabine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>SYSTÈME &amp; FORMAT</strong></label><select id="technoCabine" name="technoCabine" data-astro-cid-w5sdfsum><option value="Numérique DCI standard (Barco/Christie)" data-astro-cid-w5sdfsum>Numérique DCI standard (Barco / Christie / Doremi)</option><option value="Numérique DCI + Débat micro HF" data-astro-cid-w5sdfsum>DCI + Régie Débat / Rencontre réalisateur</option><option value="Séance 35mm Argentique (Plateau)" data-astro-cid-w5sdfsum>Séance 35mm Argentique (Montage bobines)</option><option value="Autre configuration cabine" data-astro-cid-w5sdfsum>Autre configuration</option></select></div><div class="form-field full-width" data-astro-cid-w5sdfsum><label for="notesCabine" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TITRES DES FILMS OU PARTICULARITÉS DE SÉANCE</strong></label><textarea id="notesCabine" name="notesCabine" rows="4" placeholder="Précisez les films au programme, horaires d'allumage des projecteurs, livraisons KDM ou particularités techniques..." data-astro-cid-w5sdfsum></textarea></div></div><div class="form-footer" data-astro-cid-w5sdfsum><button type="submit" class="btn-noir btn-submit" data-astro-cid-w5sdfsum>Transmettre la proposition de dates cabine &rarr;</button><p class="form-notice" data-astro-cid-w5sdfsum>Une copie structurée est préparée pour votre messagerie et transmise immédiatement à Tom Bigot.</p></div><div id="confirmationBannerCinema" class="confirmation-box" style="display: none;" data-astro-cid-w5sdfsum><h3 data-astro-cid-w5sdfsum>DEMANDE DE CABINE TRANSMISE</h3><p id="confirmationMessageCinema" data-astro-cid-w5sdfsum></p><a href="#" id="mailtoFallbackBtnCinema" class="btn-outline btn-inline" data-astro-cid-w5sdfsum>Ouvrir dans votre messagerie &rarr;</a></div></form></section></div><!-- ======================================================================
         SECTION 2 : AGENDA DRONE FPV & DEVIS (Totalement autonome)
         ====================================================================== --><div id="agenda-fpv-wrapper" class="agenda-view-wrapper" style="display: none;" data-astro-cid-w5sdfsum><!-- Console Prestations FPV --><section class="fpv-quick-access" aria-label="Services drone FPV" data-astro-cid-w5sdfsum><div class="partner-banner-label" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>AÉRIEN &bull; TOURNAGES &bull; DEVIS</span><strong data-astro-cid-w5sdfsum>Demander une date de tournage ou un devis chiffré</strong></div><div class="fpv-preset-grid" data-astro-cid-w5sdfsum><button type="button" class="btn-fpv-preset" data-fpv-type="Tournage Cinématique FPV (Journée)" data-astro-cid-w5sdfsum><span class="fpv-tag" data-astro-cid-w5sdfsum>EXTÉRIEUR HAUTE VITESSE</span><strong data-astro-cid-w5sdfsum>Poursuite &amp; Action 5"</strong><span data-astro-cid-w5sdfsum>Pointes &gt;150 km/h &bull; Stabilisation Gyroflow</span></button><button type="button" class="btn-fpv-preset" data-fpv-type="Plan-séquence intérieur Cinewhoop" data-astro-cid-w5sdfsum><span class="fpv-tag" data-astro-cid-w5sdfsum>INTÉRIEUR SÉCURISÉ</span><strong data-astro-cid-w5sdfsum>Cinewhoop Caréné</strong><span data-astro-cid-w5sdfsum>Bureaux, usines, musées &bull; Hélices protégées</span></button><button type="button" class="btn-fpv-preset" data-fpv-type="Rendez-vous préparatoire / Repérage" data-astro-cid-w5sdfsum><span class="fpv-tag" data-astro-cid-w5sdfsum>PRÉPARATION</span><strong data-astro-cid-w5sdfsum>Repérage &amp; Briefing</strong><span data-astro-cid-w5sdfsum>Visite technique sur site &bull; Validation sécurité</span></button><button type="button" class="btn-fpv-preset" data-fpv-type="Demande de devis estimatif" data-astro-cid-w5sdfsum><span class="fpv-tag" data-astro-cid-w5sdfsum>CHIFFRAGE</span><strong data-astro-cid-w5sdfsum>Devis sous 24h</strong><span data-astro-cid-w5sdfsum>Estimation détaillée selon votre cahier des charges</span></button></div></section><!-- Légende FPV --><div class="agenda-toolbar" data-astro-cid-w5sdfsum><div class="legend-grid" data-astro-cid-w5sdfsum><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-libre" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>DISPONIBLE TOURNAGE</strong><span data-astro-cid-w5sdfsum>Créneau ouvert pour vos vols et repérages</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-fpv-tournage" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TOURNAGE CONFIRMÉ</strong><span data-astro-cid-w5sdfsum>Journée réservée pour un tournage FPV</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-fpv-reperage" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>REPÉRAGE TECHNIQUE</strong><span data-astro-cid-w5sdfsum>Visite de site et validation des trajectoires</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-fpv-option" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>OPTION / REPLI MÉTÉO</strong><span data-astro-cid-w5sdfsum>Date en option pour sécurité météo</span></div></div><div class="legend-badge" data-astro-cid-w5sdfsum><span class="legend-box box-indispo" data-astro-cid-w5sdfsum></span><div class="legend-txt" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>INDISPONIBLE</strong><span data-astro-cid-w5sdfsum>Créneau non disponible pour le vol</span></div></div></div><div class="month-selector-bar" data-astro-cid-w5sdfsum><button type="button" id="btnPrevFpvMonth" class="btn-outline btn-month" data-astro-cid-w5sdfsum>&larr; Mois précédent</button><div class="current-month-display" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>PLANNING DRONE FPV</span><h2 id="fpvMonthTitle" class="month-heading" data-astro-cid-w5sdfsum>NOVEMBRE 2026</h2></div><button type="button" id="btnNextFpvMonth" class="btn-outline btn-month" data-astro-cid-w5sdfsum>Mois suivant &rarr;</button></div></div><!-- Calendriers FPV -->${planningFpvMois.map((mois, indexMois) => renderTemplate`<section${addAttribute(`fpv-calendar-view-${indexMois}`, "id")}${addAttribute(`calendar-card fpv-month-view ${indexMois === 0 ? "is-active-month" : "is-hidden-month"}`, "class")}${addAttribute(indexMois, "data-month-index")}${addAttribute(`${mois.nom.toUpperCase()} ${mois.annee}`, "data-month-name")} data-astro-cid-w5sdfsum><div class="calendar-grid" data-astro-cid-w5sdfsum><div class="weekday-col" data-astro-cid-w5sdfsum>LUN</div><div class="weekday-col" data-astro-cid-w5sdfsum>MAR</div><div class="weekday-col" data-astro-cid-w5sdfsum>MER</div><div class="weekday-col" data-astro-cid-w5sdfsum>JEU</div><div class="weekday-col" data-astro-cid-w5sdfsum>VEN</div><div class="weekday-col" data-astro-cid-w5sdfsum>SAM</div><div class="weekday-col" data-astro-cid-w5sdfsum>DIM</div>${Array.from({ length: mois.decalageLundi }).map((_, i) => renderTemplate`<div class="day-cell day-empty" aria-hidden="true" data-astro-cid-w5sdfsum></div>`)}${mois.jours.map((item) => {
		const isLibre = item.statut === "libre";
		const isTournage = item.statut === "reserve_tournage";
		const isReperage = item.statut === "reserve_reperage";
		const isOptionMeteo = item.statut === "option_meteo";
		const isIndispo = item.statut === "indisponible";
		return renderTemplate`<div${addAttribute(`day-cell day-fpv-${item.statut} ${isLibre ? "day-selectable day-fpv-selectable" : "day-locked"}`, "class")}${addAttribute(item.dateStr, "data-date")}${addAttribute(item.statut, "data-statut")}${addAttribute(item.label, "data-label")}${addAttribute(item.detail || "", "data-detail")}${addAttribute(isLibre ? "button" : "region", "role")}${addAttribute(isLibre ? "0" : "-1", "tabindex")} data-astro-cid-w5sdfsum><div class="day-topline" data-astro-cid-w5sdfsum><span class="day-number" data-astro-cid-w5sdfsum>${item.jour}</span>${isLibre && renderTemplate`<span class="tag-libre" data-astro-cid-w5sdfsum>+ Vol</span>`}${isTournage && renderTemplate`<span class="tag-fpv-tournage" data-astro-cid-w5sdfsum>Tournage</span>`}${isReperage && renderTemplate`<span class="tag-fpv-reperage" data-astro-cid-w5sdfsum>Repérage</span>`}${isOptionMeteo && renderTemplate`<span class="tag-option" data-astro-cid-w5sdfsum>Option</span>`}${isIndispo && renderTemplate`<span class="tag-indispo" data-astro-cid-w5sdfsum>&times;</span>`}</div><div class="day-body" data-astro-cid-w5sdfsum><div class="day-label-main" data-astro-cid-w5sdfsum>${item.label}</div>${item.detail && renderTemplate`<div class="day-detail-txt" data-astro-cid-w5sdfsum>${item.detail}</div>`}</div>${isLibre && renderTemplate`<div class="day-action-hint" data-astro-cid-w5sdfsum><span data-astro-cid-w5sdfsum>Poser pour tournage</span></div>`}</div>`;
	})}</div></section>`)}<!-- Panier de dates FPV --><div id="selectionBarFpv" class="selection-summary-bar" style="display: none;" data-astro-cid-w5sdfsum><div class="selection-info" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>DATES DE TOURNAGE RETENUES</span><div id="selectedFpvDatesList" class="selected-tags-container" data-astro-cid-w5sdfsum></div></div><div class="selection-actions" data-astro-cid-w5sdfsum><button type="button" id="btnClearFpvDates" class="btn-clear" data-astro-cid-w5sdfsum>Vider</button><a href="#formFpvContainer" class="btn-noir btn-jump-form" data-astro-cid-w5sdfsum>Finaliser le devis &darr;</a></div></div><!-- Formulaire FPV Devis / Tournage --><section id="formFpvContainer" class="prose-card form-container" data-astro-cid-w5sdfsum><div class="form-header" data-astro-cid-w5sdfsum><div class="form-pre" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>DRONE FPV &bull; PRODUCTION &amp; TOURNAGE</span><span class="badge-direct" data-astro-cid-w5sdfsum>DEVIS &amp; DATES</span></div><h2 data-astro-cid-w5sdfsum>DEMANDE DE DEVIS &amp; RÉSERVATION DE TOURNAGE FPV</h2><p class="form-intro" data-astro-cid-w5sdfsum>Pour les boîtes de production, marques, organisateurs d'événements et entreprises. Choisissez une date sur le calendrier ou formulez votre demande de devis.</p></div><form id="agendaFormFpv" class="styled-agenda-form" data-astro-cid-w5sdfsum><!-- Piège anti-bot / honeypot OWASP OAT-007 (invisible aux utilisateurs) --><div class="hp-field-guard" aria-hidden="true" style="position: absolute; left: -9999px; opacity: 0; pointer-events: none; width: 0; height: 0; overflow: hidden;" data-astro-cid-w5sdfsum><label for="fpv_website_url" data-astro-cid-w5sdfsum>Ne pas remplir</label><input type="text" id="fpv_website_url" name="fpv_website_url" tabindex="-1" autocomplete="off" data-astro-cid-w5sdfsum></div><div class="form-section-title" data-astro-cid-w5sdfsum><span class="step-num" data-astro-cid-w5sdfsum>1</span><h3 data-astro-cid-w5sdfsum>COORDONNÉES DU COMMANDITAIRE</h3></div><div class="form-grid-fields" data-astro-cid-w5sdfsum><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvSociete" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>SOCIÉTÉ / AGENCE / PRODUCTION *</strong></label><input type="text" id="fpvSociete" name="fpvSociete" placeholder="Ex : Studio Prod, Agence X..." required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvContactNom" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>NOM &amp; PRÉNOM DU RESPONSABLE *</strong></label><input type="text" id="fpvContactNom" name="fpvContactNom" placeholder="Ex : Julie Laurent" required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvEmail" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>EMAIL PROFESSIONNEL *</strong></label><input type="email" id="fpvEmail" name="fpvEmail" placeholder="Ex : production@studio.fr" required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvTelephone" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TÉLÉPHONE DIRECT TOURNAGE *</strong></label><input type="tel" id="fpvTelephone" name="fpvTelephone" placeholder="Ex : 06 XX XX XX XX" required data-astro-cid-w5sdfsum></div></div><div class="form-section-title" data-astro-cid-w5sdfsum><span class="step-num" data-astro-cid-w5sdfsum>2</span><h3 data-astro-cid-w5sdfsum>CAHIER DES CHARGES &amp; DATES DU TOURNAGE</h3></div><div class="form-grid-fields" data-astro-cid-w5sdfsum><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvTypeDemande" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>TYPE D'INTERVENTION FPV *</strong></label><select id="fpvTypeDemande" name="fpvTypeDemande" required data-astro-cid-w5sdfsum><option value="Tournage Cinématique FPV (Journée complète)" data-astro-cid-w5sdfsum>Tournage Journée complète (&gt; 6h de vol)</option><option value="Tournage Cinématique FPV (Demi-journée)" data-astro-cid-w5sdfsum>Tournage Demi-journée (&le; 4h de vol)</option><option value="Plan-séquence intérieur Cinewhoop" data-astro-cid-w5sdfsum>Plan-séquence intérieur (Bureaux / Musée / Usine)</option><option value="Suivi haute vitesse / Sports / Véhicules" data-astro-cid-w5sdfsum>Suivi dynamique haute vitesse (Voitures / Sports)</option><option value="Rendez-vous préparatoire &amp; Repérage site" data-astro-cid-w5sdfsum>Rendez-vous préparatoire &amp; Repérage technique</option><option value="Demande de devis estimatif sans date fixée" data-astro-cid-w5sdfsum>Demande de devis chiffré (dates prévisionnelles)</option></select></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvDatesInput" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>DATE(S) ENVISAGÉE(S) OU CHOISIE(S) *</strong><span class="label-help" data-astro-cid-w5sdfsum>(Sélectionnées sur le calendrier ou à renseigner)</span></label><input type="text" id="fpvDatesInput" name="fpvDatesInput" placeholder="Ex : 2026-11-23, ou période envisagée" required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvLieu" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>LIEU PRÉVU DU VOL / TOURNAGE *</strong></label><input type="text" id="fpvLieu" name="fpvLieu" placeholder="Ex : Tours (37), Région Centre, Paris..." required data-astro-cid-w5sdfsum></div><div class="form-field" data-astro-cid-w5sdfsum><label for="fpvEnvironnement" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>ENVIRONNEMENT DE VOL</strong></label><select id="fpvEnvironnement" name="fpvEnvironnement" data-astro-cid-w5sdfsum><option value="Intérieur sécurisé (ERP, Bureaux, Salle de spectacle)" data-astro-cid-w5sdfsum>Intérieur clos / ERP (Cinewhoop protégé)</option><option value="Site privé extérieur (Circuit, Domaine, Usine)" data-astro-cid-w5sdfsum>Site privé extérieur (Espace sécurisé)</option><option value="Extérieur naturel (Campagne, Forêt, Falaise)" data-astro-cid-w5sdfsum>Extérieur naturel (Grands espaces)</option><option value="Espace public / Urbain (Démarches requises)" data-astro-cid-w5sdfsum>Zone urbaine / Espace public</option></select></div><div class="form-field full-width" data-astro-cid-w5sdfsum><label for="fpvLivrables" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>LIVRABLES SOUHAITÉS &amp; POST-PRODUCTION</strong></label><select id="fpvLivrables" name="fpvLivrables" data-astro-cid-w5sdfsum><option value="Rushs 4K/5K stabilisés Gyroflow (Prêt au montage)" data-astro-cid-w5sdfsum>Rushs 4K/5K stabilisés par Gyroflow (Prêt pour montage)</option><option value="Rushs bruts Flat/Log + logs gyroscopiques" data-astro-cid-w5sdfsum>Rushs bruts Log + fichiers gyro bruts (.csv)</option><option value="Prestation globale (Tournage + Montage + Étalonnage)" data-astro-cid-w5sdfsum>Prestation complète : tournage + montage + étalonnage</option></select></div><div class="form-field full-width" data-astro-cid-w5sdfsum><label for="fpvBrief" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>DESCRIPTION DU PROJET &amp; BRIEF CRÉATIF *</strong></label><textarea id="fpvBrief" name="fpvBrief" rows="5" placeholder="Décrivez votre projet : sujet du tournage, dynamique souhaitée, contraintes d'accès, budget envisagé, délai de rendu..." required data-astro-cid-w5sdfsum></textarea></div></div><div class="form-footer" data-astro-cid-w5sdfsum><button type="submit" class="btn-noir btn-submit" data-astro-cid-w5sdfsum>Envoyer la demande de tournage / devis FPV &rarr;</button><p class="form-notice" data-astro-cid-w5sdfsum>Devis détaillé transmis sous 24h à 48h ouvrées. Démarches réglementaires et sécurité garanties.</p></div><div id="confirmationBannerFpv" class="confirmation-box" style="display: none;" data-astro-cid-w5sdfsum><h3 data-astro-cid-w5sdfsum>DEMANDE FPV TRANSMISE</h3><p id="confirmationMessageFpv" data-astro-cid-w5sdfsum></p><a href="#" id="mailtoFallbackBtnFpv" class="btn-outline btn-inline" data-astro-cid-w5sdfsum>Ouvrir dans votre messagerie &rarr;</a></div></form></section></div><!-- Rappel des garanties des 2 agendas --><section class="prose-card memo-cabine" data-astro-cid-w5sdfsum><span class="etiquette" data-astro-cid-w5sdfsum>INDÉPENDANCE DES PLANNINGS</span><h2 data-astro-cid-w5sdfsum>ENGAGEMENTS D'EXPLOITATION &amp; TOURNAGE</h2><div class="specs-grid" data-astro-cid-w5sdfsum><div class="spec-box" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Planning Cabines Dédié</strong><p data-astro-cid-w5sdfsum>Réservé aux 2 cinémas partenaires, avec affichage exclusif des séances, remplacements et semaines de CFA.</p></div><div class="spec-box" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Planning FPV Indépendant</strong><p data-astro-cid-w5sdfsum>Consacré aux tournages cinématiques, repérages techniques et chiffrage des devis de vol.</p></div><div class="spec-box" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Confidentialité Totale</strong><p data-astro-cid-w5sdfsum>Aucun croisement de données entre exploitants cinéma et productions audiovisuelles.</p></div><div class="spec-box" data-astro-cid-w5sdfsum><strong data-astro-cid-w5sdfsum>Réactivité &amp; Rigueur</strong><p data-astro-cid-w5sdfsum>Confirmation immédiate et coordination rigoureuse pour chaque intervention sur le terrain.</p></div></div></section></main>` })}${renderScript($$result, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda.astro", void 0);
var $$file = "C:/Users/User/OneDrive/Projet/tom-bigot.fr/src/pages/agenda.astro";
var $$url = "/agenda";
// \0virtual:astro:page:src/pages/agenda@_@astro
var page = () => agenda_exports;
export { page };
