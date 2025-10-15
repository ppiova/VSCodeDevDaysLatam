import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import matchesData from "@/data/matches.json";
import teamsData from "@/data/teams.json";
import venuesData from "@/data/venues.json";
import { formatDateTimeByZone, getTimeZoneByVenue } from "@/lib/utils";
import type { Metadata } from "next";

interface MatchDetailPageProps {
  params: {
    matchId: string;
  };
}

export async function generateStaticParams() {
  return matchesData.map((match) => ({
    matchId: match.id,
  }));
}

export async function generateMetadata({
  params,
}: MatchDetailPageProps): Promise<Metadata> {
  const match = matchesData.find((m) => m.id === params.matchId);
  if (!match) return {};

  const homeTeam = teamsData.find((t) => t.code === match.home);
  const awayTeam = teamsData.find((t) => t.code === match.away);

  return {
    title: `${homeTeam?.name} vs ${awayTeam?.name} - Mundial 2026`,
    description: `Detalles del partido ${homeTeam?.name} vs ${awayTeam?.name} en el Mundial 2026`,
  };
}

export default function MatchDetailPage({ params }: MatchDetailPageProps) {
  const match = matchesData.find((m) => m.id === params.matchId);

  if (!match) {
    notFound();
  }

  const homeTeam = teamsData.find((t) => t.code === match.home);
  const awayTeam = teamsData.find((t) => t.code === match.away);
  const venue = venuesData.find((v) => v.slug === match.venue);

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/fixtures">← Volver a Fixtures</Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex gap-2 mb-2">
              <Badge variant="secondary">{match.stage}</Badge>
              <Badge variant="outline">Grupo {match.group}</Badge>
            </div>
            <CardTitle className="text-3xl">
              {homeTeam?.name} vs {awayTeam?.name}
            </CardTitle>
            <CardDescription>
              {venue && formatDateTimeByZone(match.dateUTC, getTimeZoneByVenue(venue.slug))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Equipos</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    <Link
                      href={`/equipos/${homeTeam?.code}`}
                      className="hover:text-primary transition-colors"
                    >
                      {homeTeam?.name}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✈️</span>
                    <Link
                      href={`/equipos/${awayTeam?.code}`}
                      className="hover:text-primary transition-colors"
                    >
                      {awayTeam?.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información del Estadio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Estadio</h3>
                <Link
                  href={`/sedes/${venue?.slug}`}
                  className="text-primary hover:underline"
                >
                  {venue?.name}
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Ubicación</h3>
                <p className="text-muted-foreground">
                  {venue?.city}, {venue?.country}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Capacidad</h3>
                <p className="text-muted-foreground">
                  {venue?.capacity.toLocaleString()} espectadores
                </p>
              </div>
              {venue && (
                <div className="mt-4">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${venue.lng - 0.01},${venue.lat - 0.01},${venue.lng + 0.01},${venue.lat + 0.01}&layer=mapnik&marker=${venue.lat},${venue.lng}`}
                    className="w-full h-64 rounded-lg border"
                    title={`Mapa de ${venue.name}`}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
