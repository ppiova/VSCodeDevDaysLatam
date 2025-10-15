"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Match, Team, Venue } from "@/lib/types";
import { formatDateTimeByZone, getTimeZoneByVenue } from "@/lib/utils";

interface FixturesFilterProps {
  matches: Match[];
  teams: Team[];
  venues: Venue[];
}

export function FixturesFilter({ matches, teams, venues }: FixturesFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const stages = Array.from(new Set(matches.map((m) => m.stage)));
  const groups = Array.from(new Set(matches.map((m) => m.group))).sort();

  const filteredMatches = matches.filter((match) => {
    const homeTeam = teams.find((t) => t.code === match.home);
    const awayTeam = teams.find((t) => t.code === match.away);
    const venue = venues.find((v) => v.slug === match.venue);

    const matchesSearch =
      !searchTerm ||
      homeTeam?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      awayTeam?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue?.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue?.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStage = !selectedStage || match.stage === selectedStage;
    const matchesGroup = !selectedGroup || match.group === selectedGroup;

    return matchesSearch && matchesStage && matchesGroup;
  });

  return (
    <div>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Buscar por equipo, ciudad o estadio..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Fase</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedStage === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedStage(null)}
          >
            Todas
          </Badge>
          {stages.map((stage) => (
            <Badge
              key={stage}
              variant={selectedStage === stage ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedStage(stage)}
            >
              {stage}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium mb-3">Grupo</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedGroup === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedGroup(null)}
          >
            Todos
          </Badge>
          {groups.map((group) => (
            <Badge
              key={group}
              variant={selectedGroup === group ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedGroup(group)}
            >
              Grupo {group}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMatches.length === 0 ? (
          <p className="text-muted-foreground col-span-full text-center py-8">
            No se encontraron partidos que coincidan con los filtros.
          </p>
        ) : (
          filteredMatches.map((match) => {
            const homeTeam = teams.find((t) => t.code === match.home);
            const awayTeam = teams.find((t) => t.code === match.away);
            const venue = venues.find((v) => v.slug === match.venue);

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
          })
        )}
      </div>
    </div>
  );
}
