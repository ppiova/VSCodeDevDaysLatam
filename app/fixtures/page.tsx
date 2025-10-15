import { FixturesFilter } from "@/components/FixturesFilter";
import matchesData from "@/data/matches.json";
import teamsData from "@/data/teams.json";
import venuesData from "@/data/venues.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixtures - Mundial 2026",
  description: "Calendario completo de partidos del Mundial de Fútbol 2026",
};

export default function FixturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Fixtures</h1>
      <p className="text-muted-foreground mb-8">
        Calendario completo de partidos del Mundial 2026. Filtra por fase, grupo o busca tu equipo favorito.
      </p>
      <FixturesFilter
        matches={matchesData}
        teams={teamsData}
        venues={venuesData}
      />
    </div>
  );
}
