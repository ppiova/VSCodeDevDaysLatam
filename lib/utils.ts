import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeZoneByVenue(venueSlug: string): string {
  const timezones: Record<string, string> = {
    "estadio-azteca": "America/Mexico_City",
    "estadio-bbva": "America/Monterrey",
    "estadio-akron": "America/Mexico_City",
    "metlife-stadium": "America/New_York",
    "sofi-stadium": "America/Los_Angeles",
    "att-stadium": "America/Chicago",
    "arrowhead-stadium": "America/Chicago",
    "mercedes-benz-stadium": "America/New_York",
    "nrg-stadium": "America/Chicago",
    "hard-rock-stadium": "America/New_York",
    "lincoln-financial-field": "America/New_York",
    "gillette-stadium": "America/New_York",
    "bmo-field": "America/Toronto",
    "bc-place": "America/Vancouver",
  };
  return timezones[venueSlug] || "UTC";
}

export function formatDateTimeByZone(
  dateUTC: string,
  timeZone: string,
  locale: string = "es-AR"
): string {
  const date = new Date(dateUTC);
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export function formatDate(dateUTC: string, locale: string = "es-AR"): string {
  const date = new Date(dateUTC);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(date);
}

export function formatTime(dateUTC: string, locale: string = "es-AR"): string {
  const date = new Date(dateUTC);
  return new Intl.DateTimeFormat(locale, {
    timeStyle: "short",
  }).format(date);
}
