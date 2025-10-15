import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { TOURNAMENT_START_UTC, TOURNAMENT_NAME } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import matchesData from "@/data/matches.json";
import teamsData from "@/data/teams.json";
import venuesData from "@/data/venues.json";
import { formatDateTimeByZone, getTimeZoneByVenue } from "@/lib/utils";

export default function HomePage() {
  const upcomingMatches = matchesData
    .sort((a, b) => new Date(a.dateUTC).getTime() - new Date(b.dateUTC).getTime())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{TOURNAMENT_NAME}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          11 de junio - 19 de julio, 2026
        </p>
        <div className="flex justify-center gap-2 mb-12">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm">🇲🇽 México</span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm">🇺🇸 Estados Unidos</span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm">🇨🇦 Canadá</span>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Cuenta Regresiva
        </h2>
        <Countdown startDate={TOURNAMENT_START_UTC} />
      </div>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>⚽ Fixtures</CardTitle>
            <CardDescription>
              Calendario completo de partidos por fase y grupo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/fixtures">Ver Fixtures</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>🏟️ Sedes</CardTitle>
            <CardDescription>
              Estadios y ciudades anfitrionas del Mundial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/sedes">Ver Sedes</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>🏆 Equipos</CardTitle>
            <CardDescription>
              Selecciones participantes por confederación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/equipos">Ver Equipos</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Matches */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Próximos Partidos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingMatches.map((match) => {
            const homeTeam = teamsData.find((t) => t.code === match.home);
            const awayTeam = teamsData.find((t) => t.code === match.away);
            const venue = venuesData.find((v) => v.slug === match.venue);

            return (
              <Card key={match.id}>
                <CardHeader>
                  <CardDescription>{match.stage}</CardDescription>
                  <CardTitle className="text-lg">
                    {homeTeam?.name} vs {awayTeam?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    📍 {venue?.name}, {venue?.city}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🕐 {venue && formatDateTimeByZone(
                      match.dateUTC,
                      getTimeZoneByVenue(venue.slug)
                    )}
                  </p>
                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href={`/fixtures/${match.id}`}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
