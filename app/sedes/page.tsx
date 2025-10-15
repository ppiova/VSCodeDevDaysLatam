import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import venuesData from "@/data/venues.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedes - Mundial 2026",
  description: "Estadios y ciudades anfitrionas del Mundial de Fútbol 2026",
};

export default function SedesPage() {
  const venuesByCountry = venuesData.reduce((acc, venue) => {
    if (!acc[venue.country]) {
      acc[venue.country] = [];
    }
    acc[venue.country].push(venue);
    return acc;
  }, {} as Record<string, typeof venuesData>);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sedes</h1>
      <p className="text-muted-foreground mb-8">
        Estadios y ciudades que albergarán los partidos del Mundial 2026 en México, Estados Unidos y Canadá.
      </p>

      {Object.entries(venuesByCountry).map(([country, venues]) => (
        <div key={country} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{country}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue) => (
              <Card key={venue.slug}>
                <CardHeader>
                  <CardTitle>{venue.name}</CardTitle>
                  <CardDescription>
                    {venue.city}, {venue.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Capacidad: {venue.capacity.toLocaleString()} personas
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/sedes/${venue.slug}`}>Ver Detalles</Link>
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
