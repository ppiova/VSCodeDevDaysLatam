import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import venuesData from "@/data/venues.json";
import matchesData from "@/data/matches.json";
import teamsData from "@/data/teams.json";
import { formatDateTimeByZone, getTimeZoneByVenue } from "@/lib/utils";
import type { Metadata } from "next";

interface VenueDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return venuesData.map((venue) => ({
    slug: venue.slug,
  }));
}

export async function generateMetadata({
  params,
}: VenueDetailPageProps): Promise<Metadata> {
  const venue = venuesData.find((v) => v.slug === params.slug);
  if (!venue) return {};

  return {
    title: `${venue.name} - Mundial 2026`,
    description: `Información sobre ${venue.name} en ${venue.city}, ${venue.country}`,
  };
}

export default function VenueDetailPage({ params }: VenueDetailPageProps) {
  const venue = venuesData.find((v) => v.slug === params.slug);

  if (!venue) {
    notFound();
  }

  const venueMatches = matchesData.filter((m) => m.venue === venue.slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/sedes">← Volver a Sedes</Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{venue.name}</CardTitle>
            <CardDescription>
              {venue.city}, {venue.country}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Capacidad</h3>
                <p className="text-muted-foreground">
                  {venue.capacity.toLocaleString()} espectadores
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Zona Horaria</h3>
                <p className="text-muted-foreground">{venue.tz}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Coordenadas</h3>
                <p className="text-muted-foreground">
                  {venue.lat.toFixed(4)}, {venue.lng.toFixed(4)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ubicación</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${venue.lng - 0.02},${venue.lat - 0.02},${venue.lng + 0.02},${venue.lat + 0.02}&layer=mapnik&marker=${venue.lat},${venue.lng}`}
              className="w-full h-96 rounded-lg border"
              title={`Mapa de ${venue.name}`}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">
          Partidos en {venue.name}
        </h2>
        {venueMatches.length === 0 ? (
          <p className="text-muted-foreground">
            No hay partidos programados en este estadio.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueMatches.map((match) => {
              const homeTeam = teamsData.find((t) => t.code === match.home);
              const awayTeam = teamsData.find((t) => t.code === match.away);

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
                      {formatDateTimeByZone(
                        match.dateUTC,
                        getTimeZoneByVenue(venue.slug)
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
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
