import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mundial 2026 - Copa Mundial de la FIFA",
  description: "Sitio informativo del Mundial 2026 en Canadá, México y Estados Unidos. Consulta fixtures, sedes, estadios y equipos clasificados. Cuenta regresiva hasta el inicio del torneo.",
  keywords: "Mundial 2026, FIFA, Copa Mundial, Canadá, México, Estados Unidos, fútbol, soccer, fixtures, equipos, sedes",
  openGraph: {
    title: "Mundial 2026 - Copa Mundial de la FIFA",
    description: "Sitio informativo del Mundial 2026. Fixtures, sedes y equipos clasificados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
