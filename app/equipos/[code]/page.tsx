import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import teamsData from "@/data/teams.json";
import matchesData from "@/data/matches.json";
import venuesData from "@/data/venues.json";
import { formatDateTimeByZone, getTimeZoneByVenue } from "@/lib/utils";
import type { Metadata } from "next";

interface TeamDetailPageProps {
  params: {
    code: string;
  };
}

export async function generateStaticParams() {
  return teamsData.map((team) => ({
    code: team.code,
  }));
}

export async function generateMetadata({
  params,
}: TeamDetailPageProps): Promise<Metadata> {
  const team = teamsData.find((t) => t.code === params.code);
  if (!team) return {};

  return {
    title: `${team.name} - Mundial 2026`,
    description: `Información sobre la selección de ${team.name} en el Mundial 2026`,
  };
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const team = teamsData.find((t) => t.code === params.code);

  if (!team) {
    notFound();
  }

  const teamMatches = matchesData.filter(
    (m) => m.home === team.code || m.away === team.code
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/equipos">← Volver a Equipos</Link>
      </Button>

      <Card className="mb-12">
        <CardHeader>
          <div className="flex gap-2 mb-2">
            <Badge variant="secondary">{team.confed}</Badge>
            <Badge variant="outline">Grupo {team.group}</Badge>
          </div>
          <CardTitle className="text-3xl">{team.name}</CardTitle>
          <CardDescription>Código FIFA: {team.code}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            La selección de {team.name} participará en el Grupo {team.group} del Mundial 2026.
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-6">
          Partidos de {team.name}
        </h2>
        {teamMatches.length === 0 ? (
          <p className="text-muted-foreground">
            No hay partidos programados para este equipo.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMatches.map((match) => {
              const homeTeam = teamsData.find((t) => t.code === match.home);
              const awayTeam = teamsData.find((t) => t.code === match.away);
              const venue = venuesData.find((v) => v.slug === match.venue);

              return (
                <Card key={match.id}>
                  <CardHeader>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">{match.stage}</Badge>
                      <Badge variant="outline">Grupo {match.group}</Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {homeTeam?.name} vs {awayTeam?.name}
                    </CardTitle>
                    <CardDescription>
                      {venue && formatDateTimeByZone(
                        match.dateUTC,
                        getTimeZoneByVenue(venue.slug)
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      📍 {venue?.name}, {venue?.city}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/fixtures/${match.id}`}>Ver Detalles</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
