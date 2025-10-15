import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca - Mundial 2026",
  description: "Información sobre el sitio web del Mundial 2026",
};

export default function AcercaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Acerca de Este Sitio</h1>

      <div className="space-y-6 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Sobre Este Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Este es un sitio web informativo no oficial sobre el Mundial de Fútbol 2026,
              que se celebrará en México, Estados Unidos y Canadá.
            </p>
            <p className="text-muted-foreground">
              El objetivo es proporcionar información fácil de acceder sobre fixtures,
              sedes, equipos y otros detalles del torneo.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fuentes de Datos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Los datos actualmente están almacenados en archivos JSON estáticos en el
              directorio <code className="bg-muted px-1 py-0.5 rounded">/data</code>.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Archivos de datos:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">teams.json</code> - Información de equipos
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">venues.json</code> - Estadios y sedes
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">matches.json</code> - Calendario de partidos
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cómo Actualizar los Datos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Para actualizar la información del sitio, edita los archivos JSON en el
                directorio <code className="bg-muted px-1 py-0.5 rounded">/data</code>.
              </p>
              <p>
                <strong>Pasos:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Edita los archivos JSON con los datos actualizados</li>
                <li>Ejecuta <code className="bg-muted px-1 py-0.5 rounded">npm run validate-data</code> para validar el formato</li>
                <li>Ejecuta <code className="bg-muted px-1 py-0.5 rounded">npm run build</code> para generar el sitio estático</li>
                <li>Haz commit y push de los cambios para desplegar automáticamente</li>
              </ol>
              <p className="mt-4">
                <strong>Migración a API:</strong> En el futuro, se puede migrar a usar una
                API externa siguiendo las instrucciones en el README.md del repositorio.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tecnologías Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js 14 (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Radix UI / shadcn/ui</li>
              <li>Zod para validación de datos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notas Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ⚠️ <strong>Fecha de Inicio:</strong> La fecha de inicio del torneo
                configurada actualmente es tentativa. Por favor, verifica y actualiza la
                constante <code className="bg-muted px-1 py-0.5 rounded">TOURNAMENT_START_UTC</code> en{" "}
                <code className="bg-muted px-1 py-0.5 rounded">lib/constants.ts</code> una vez
                que FIFA confirme la fecha oficial.
              </p>
              <p>
                Este es un sitio no oficial creado con fines informativos y educativos.
                No está afiliado con FIFA ni con ninguna federación de fútbol.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accesibilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Este sitio está diseñado siguiendo las pautas WCAG 2.1 nivel AA para ser
              accesible a todos los usuarios. Si encuentras algún problema de accesibilidad,
              por favor reportalo en el repositorio del proyecto.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Licencia y Créditos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              El código de este sitio está disponible bajo licencia MIT. Las banderas y
              escudos de equipos son propiedad de sus respectivos dueños.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
