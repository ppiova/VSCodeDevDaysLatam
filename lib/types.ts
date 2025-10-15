import { z } from "zod";

export const TeamSchema = z.object({
  code: z.string(),
  name: z.string(),
  group: z.string(),
  confed: z.string(),
  flag: z.string(),
});

export const VenueSchema = z.object({
  slug: z.string(),
  name: z.string(),
  city: z.string(),
  country: z.string(),
  capacity: z.number(),
  tz: z.string(),
  lat: z.number(),
  lng: z.number(),
});

export const MatchSchema = z.object({
  id: z.string(),
  dateUTC: z.string(),
  stage: z.string(),
  group: z.string(),
  home: z.string(),
  away: z.string(),
  venue: z.string(),
});

export type Team = z.infer<typeof TeamSchema>;
export type Venue = z.infer<typeof VenueSchema>;
export type Match = z.infer<typeof MatchSchema>;
