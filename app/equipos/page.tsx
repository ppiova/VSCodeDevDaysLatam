import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import teamsData from "@/data/teams.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipos - Mundial 2026",
  description: "Selecciones participantes del Mundial de Fútbol 2026",
};

export default function EquiposPage() {
  const teamsByConfed = teamsData.reduce((acc, team) => {
    if (!acc[team.confed]) {
      acc[team.confed] = [];
    }
    acc[team.confed].push(team);
    return acc;
  }, {} as Record<string, typeof teamsData>);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Equipos</h1>
      <p className="text-muted-foreground mb-8">
        Selecciones clasificadas al Mundial 2026, organizadas por confederación.
      </p>

      {Object.entries(teamsByConfed).map(([confed, teams]) => (
        <div key={confed} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{confed}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <Card key={team.code}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    Grupo {team.group}
                  </Badge>
                  <CardTitle>{team.name}</CardTitle>
                  <CardDescription>{team.code}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/equipos/${team.code}`}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
