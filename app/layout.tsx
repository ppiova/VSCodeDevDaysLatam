import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { TOURNAMENT_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${TOURNAMENT_NAME} - Sitio Oficial de Información`,
  description: "Toda la información sobre el Mundial de Fútbol 2026: fixtures, sedes, equipos y más.",
  keywords: ["Mundial 2026", "Copa del Mundo", "FIFA", "Fútbol", "México", "Estados Unidos", "Canadá"],
  openGraph: {
    title: `${TOURNAMENT_NAME}`,
    description: "Toda la información sobre el Mundial de Fútbol 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-primary">
                  Mundial 2026
                </Link>
                <ul className="flex gap-6">
                  <li>
                    <Link
                      href="/fixtures"
                      className="hover:text-primary transition-colors"
                    >
                      Fixtures
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sedes"
                      className="hover:text-primary transition-colors"
                    >
                      Sedes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/equipos"
                      className="hover:text-primary transition-colors"
                    >
                      Equipos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/acerca"
                      className="hover:text-primary transition-colors"
                    >
                      Acerca
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t mt-12">
            <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
              <p>
                {TOURNAMENT_NAME} - Sitio informativo no oficial
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
