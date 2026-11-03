// ============================================================================
// DATA PLANNING OFFICIELLE & TYPÉE — CABINES CINÉMA & DRONE FPV
// ============================================================================

export interface JourPlanningCinema {
  jour: number;
  dateStr: string;
  statut: 'libre' | 'formation' | 'reserve_studios' | 'reserve_cineoff' | 'option';
  label: string;
  detail?: string;
  ownerId: 'studios' | 'cineoff' | 'cfa' | 'none';
}

export interface MoisCinema {
  nom: string;
  annee: number;
  decalageLundi: number;
  jours: JourPlanningCinema[];
}

export const joursCinemaNovembre2026: JourPlanningCinema[] = [
  { jour: 1, dateStr: '2026-11-01', statut: 'reserve_studios', label: 'Les Studios', detail: 'Cabine DCI & 35mm (Soir)', ownerId: 'studios' },
  { jour: 2, dateStr: '2026-11-02', statut: 'formation', label: 'CFA / Formation', detail: 'Théorie DCI & Acoustique', ownerId: 'cfa' },
  { jour: 3, dateStr: '2026-11-03', statut: 'formation', label: 'CFA / Formation', detail: 'Atelier Optique & Électronique', ownerId: 'cfa' },
  { jour: 4, dateStr: '2026-11-04', statut: 'formation', label: 'CFA / Formation', detail: 'Cryptographie & KDM', ownerId: 'cfa' },
  { jour: 5, dateStr: '2026-11-05', statut: 'formation', label: 'CFA / Formation', detail: 'Pratique 35mm Argentique', ownerId: 'cfa' },
  { jour: 6, dateStr: '2026-11-06', statut: 'formation', label: 'CFA / Formation', detail: 'Normes de sécurité ERP', ownerId: 'cfa' },
  { jour: 7, dateStr: '2026-11-07', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Projection itinérante (Soirée)', ownerId: 'cineoff' },
  { jour: 8, dateStr: '2026-11-08', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 9, dateStr: '2026-11-09', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 10, dateStr: '2026-11-10', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 11, dateStr: '2026-11-11', statut: 'reserve_studios', label: 'Les Studios', detail: 'Férié — Séances continues DCI', ownerId: 'studios' },
  { jour: 12, dateStr: '2026-11-12', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 13, dateStr: '2026-11-13', statut: 'option', label: 'Option en cours', detail: 'Confirmation exploitant en attente', ownerId: 'none' },
  { jour: 14, dateStr: '2026-11-14', statut: 'reserve_studios', label: 'Les Studios', detail: 'Séance 35mm Spéciale Patrimoine', ownerId: 'studios' },
  { jour: 15, dateStr: '2026-11-15', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 16, dateStr: '2026-11-16', statut: 'formation', label: 'CFA / Formation', detail: 'Sonorisation Dolby CP', ownerId: 'cfa' },
  { jour: 17, dateStr: '2026-11-17', statut: 'formation', label: 'CFA / Formation', detail: 'Réseaux TMS & Ingest', ownerId: 'cfa' },
  { jour: 18, dateStr: '2026-11-18', statut: 'formation', label: 'CFA / Formation', detail: 'Calibration laser & xénon', ownerId: 'cfa' },
  { jour: 19, dateStr: '2026-11-19', statut: 'formation', label: 'CFA / Formation', detail: 'Maintenance préventive cabine', ownerId: 'cfa' },
  { jour: 20, dateStr: '2026-11-20', statut: 'formation', label: 'CFA / Formation', detail: 'Contrôles réglementaires', ownerId: 'cfa' },
  { jour: 21, dateStr: '2026-11-21', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Tournée week-end circuit rural', ownerId: 'cineoff' },
  { jour: 22, dateStr: '2026-11-22', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Tournée week-end circuit rural', ownerId: 'cineoff' },
  { jour: 23, dateStr: '2026-11-23', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 24, dateStr: '2026-11-24', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 25, dateStr: '2026-11-25', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 26, dateStr: '2026-11-26', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 27, dateStr: '2026-11-27', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 28, dateStr: '2026-11-28', statut: 'reserve_studios', label: 'Les Studios', detail: 'Soirée ciné-débat & régie micro', ownerId: 'studios' },
  { jour: 29, dateStr: '2026-11-29', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 30, dateStr: '2026-11-30', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
];

export const joursCinemaDecembre2026: JourPlanningCinema[] = [
  { jour: 1, dateStr: '2026-12-01', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 2, dateStr: '2026-12-02', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 3, dateStr: '2026-12-03', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 4, dateStr: '2026-12-04', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 5, dateStr: '2026-12-05', statut: 'reserve_studios', label: 'Les Studios', detail: 'Cabine Week-end 7 écrans', ownerId: 'studios' },
  { jour: 6, dateStr: '2026-12-06', statut: 'reserve_studios', label: 'Les Studios', detail: 'Cabine Week-end 7 écrans', ownerId: 'studios' },
  { jour: 7, dateStr: '2026-12-07', statut: 'formation', label: 'CFA / Formation', detail: 'Exploitation multi-écrans', ownerId: 'cfa' },
  { jour: 8, dateStr: '2026-12-08', statut: 'formation', label: 'CFA / Formation', detail: 'Processeurs IMS automatisés', ownerId: 'cfa' },
  { jour: 9, dateStr: '2026-12-09', statut: 'formation', label: 'CFA / Formation', detail: 'Dépannage optique d\'urgence', ownerId: 'cfa' },
  { jour: 10, dateStr: '2026-12-10', statut: 'formation', label: 'CFA / Formation', detail: 'Normes SMPTE & DCI', ownerId: 'cfa' },
  { jour: 11, dateStr: '2026-12-11', statut: 'formation', label: 'CFA / Formation', detail: 'Évaluation des acquis', ownerId: 'cfa' },
  { jour: 12, dateStr: '2026-12-12', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 13, dateStr: '2026-12-13', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 14, dateStr: '2026-12-14', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 15, dateStr: '2026-12-15', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 16, dateStr: '2026-12-16', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Séance événementielle fête communale', ownerId: 'cineoff' },
  { jour: 17, dateStr: '2026-12-17', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 18, dateStr: '2026-12-18', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 19, dateStr: '2026-12-19', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Circuit jeunesse vacances scolaires', ownerId: 'cineoff' },
  { jour: 20, dateStr: '2026-12-20', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Circuit jeunesse vacances scolaires', ownerId: 'cineoff' },
  { jour: 21, dateStr: '2026-12-21', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 22, dateStr: '2026-12-22', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 23, dateStr: '2026-12-23', statut: 'reserve_studios', label: 'Les Studios', detail: 'Séances jeunesse affluence', ownerId: 'studios' },
  { jour: 24, dateStr: '2026-12-24', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 25, dateStr: '2026-12-25', statut: 'reserve_studios', label: 'Les Studios', detail: 'Séances de Noël après-midi + soir', ownerId: 'studios' },
  { jour: 26, dateStr: '2026-12-26', statut: 'reserve_studios', label: 'Les Studios', detail: 'Séances de Noël après-midi + soir', ownerId: 'studios' },
  { jour: 27, dateStr: '2026-12-27', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 28, dateStr: '2026-12-28', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 29, dateStr: '2026-12-29', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 30, dateStr: '2026-12-30', statut: 'libre', label: 'Disponible Cabine', ownerId: 'none' },
  { jour: 31, dateStr: '2026-12-31', statut: 'reserve_cineoff', label: 'Ciné-Off', detail: 'Séance Réveillon itinérance festive', ownerId: 'cineoff' },
];

export const planningCinemaMois: MoisCinema[] = [
  { nom: 'Novembre', annee: 2026, decalageLundi: 6, jours: joursCinemaNovembre2026 },
  { nom: 'Décembre', annee: 2026, decalageLundi: 1, jours: joursCinemaDecembre2026 },
];

export interface JourPlanningFpv {
  jour: number;
  dateStr: string;
  statut: 'libre' | 'reserve_tournage' | 'reserve_reperage' | 'option_meteo' | 'indisponible';
  label: string;
  detail?: string;
}

export interface MoisFpv {
  nom: string;
  annee: number;
  decalageLundi: number;
  jours: JourPlanningFpv[];
}

export const joursFpvNovembre2026: JourPlanningFpv[] = [
  { jour: 1, dateStr: '2026-11-01', statut: 'indisponible', label: 'Indisponible', detail: 'Engagement en cabine' },
  { jour: 2, dateStr: '2026-11-02', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 3, dateStr: '2026-11-03', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 4, dateStr: '2026-11-04', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 5, dateStr: '2026-11-05', statut: 'option_meteo', label: 'Option Tournage FPV', detail: 'Tournage extérieur sous réserve météo' },
  { jour: 6, dateStr: '2026-11-06', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 7, dateStr: '2026-11-07', statut: 'indisponible', label: 'Indisponible', detail: 'Autre engagement' },
  { jour: 8, dateStr: '2026-11-08', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Journée complète ouverte' },
  { jour: 9, dateStr: '2026-11-09', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Tournage ou repérage' },
  { jour: 10, dateStr: '2026-11-10', statut: 'reserve_reperage', label: 'Repérage Site', detail: 'Visite technique site industriel' },
  { jour: 11, dateStr: '2026-11-11', statut: 'indisponible', label: 'Indisponible', detail: 'Férié cabine' },
  { jour: 12, dateStr: '2026-11-12', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Créneau vol extérieur ou intérieur' },
  { jour: 13, dateStr: '2026-11-13', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Créneau vol ouvert' },
  { jour: 14, dateStr: '2026-11-14', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 15, dateStr: '2026-11-15', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Week-end disponible tournage' },
  { jour: 16, dateStr: '2026-11-16', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 17, dateStr: '2026-11-17', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 18, dateStr: '2026-11-18', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 19, dateStr: '2026-11-19', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 20, dateStr: '2026-11-20', statut: 'reserve_tournage', label: 'Tournage Confirmé', detail: 'Prise de vue cinématique 5"' },
  { jour: 21, dateStr: '2026-11-21', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 22, dateStr: '2026-11-22', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 23, dateStr: '2026-11-23', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 24, dateStr: '2026-11-24', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 25, dateStr: '2026-11-25', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 26, dateStr: '2026-11-26', statut: 'option_meteo', label: 'Option Production', detail: 'Option posée par agence' },
  { jour: 27, dateStr: '2026-11-27', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 28, dateStr: '2026-11-28', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 29, dateStr: '2026-11-29', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 30, dateStr: '2026-11-30', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
];

export const joursFpvDecembre2026: JourPlanningFpv[] = [
  { jour: 1, dateStr: '2026-12-01', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Tournage ou repérage' },
  { jour: 2, dateStr: '2026-12-02', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Tournage ou repérage' },
  { jour: 3, dateStr: '2026-12-03', statut: 'reserve_tournage', label: 'Tournage Intérieur', detail: 'Cinewhoop bureaux & show-room' },
  { jour: 4, dateStr: '2026-12-04', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 5, dateStr: '2026-12-05', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 6, dateStr: '2026-12-06', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 7, dateStr: '2026-12-07', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 8, dateStr: '2026-12-08', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 9, dateStr: '2026-12-09', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 10, dateStr: '2026-12-10', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 11, dateStr: '2026-12-11', statut: 'indisponible', label: 'Indisponible', detail: 'Formation' },
  { jour: 12, dateStr: '2026-12-12', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Week-end ouvert' },
  { jour: 13, dateStr: '2026-12-13', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Week-end ouvert' },
  { jour: 14, dateStr: '2026-12-14', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 15, dateStr: '2026-12-15', statut: 'reserve_reperage', label: 'Repérage Site', detail: 'Validation espace aérien' },
  { jour: 16, dateStr: '2026-12-16', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 17, dateStr: '2026-12-17', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Tournage possible' },
  { jour: 18, dateStr: '2026-12-18', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Tournage possible' },
  { jour: 19, dateStr: '2026-12-19', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 20, dateStr: '2026-12-20', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 21, dateStr: '2026-12-21', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 22, dateStr: '2026-12-22', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 23, dateStr: '2026-12-23', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 24, dateStr: '2026-12-24', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Matinée disponible' },
  { jour: 25, dateStr: '2026-12-25', statut: 'indisponible', label: 'Indisponible', detail: 'Férié Noël' },
  { jour: 26, dateStr: '2026-12-26', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
  { jour: 27, dateStr: '2026-12-27', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 28, dateStr: '2026-12-28', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 29, dateStr: '2026-12-29', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 30, dateStr: '2026-12-30', statut: 'libre', label: 'Vol FPV Disponible', detail: 'Disponibilité tournage' },
  { jour: 31, dateStr: '2026-12-31', statut: 'indisponible', label: 'Indisponible', detail: 'Non disponible' },
];

export const planningFpvMois: MoisFpv[] = [
  { nom: 'Novembre', annee: 2026, decalageLundi: 6, jours: joursFpvNovembre2026 },
  { nom: 'Décembre', annee: 2026, decalageLundi: 1, jours: joursFpvDecembre2026 },
];
