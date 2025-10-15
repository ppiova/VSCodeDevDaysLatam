// TODO: Confirm the official start date for the World Cup 2026
// The tournament is expected to start on June 11, 2026
// Once FIFA confirms the exact date, update this constant
export const TOURNAMENT_START_UTC = "2026-06-11T16:00:00Z";

export const TOURNAMENT_NAME = "Copa Mundial de la FIFA 2026";
export const TOURNAMENT_HOSTS = ["México", "Estados Unidos", "Canadá"];

export const STAGES = {
  GROUP: "Fase de Grupos",
  ROUND_16: "Octavos de Final",
  QUARTER: "Cuartos de Final",
  SEMI: "Semifinales",
  THIRD_PLACE: "Tercer Puesto",
  FINAL: "Final",
} as const;

export const CONFEDERATIONS = {
  CONMEBOL: "CONMEBOL",
  UEFA: "UEFA",
  CONCACAF: "CONCACAF",
  CAF: "CAF",
  AFC: "AFC",
  OFC: "OFC",
} as const;
