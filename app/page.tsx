import Countdown from '@/components/Countdown';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import FixturesSection from '@/components/FixturesSection';
import VenuesSection from '@/components/VenuesSection';
import TeamsSection from '@/components/TeamsSection';
import fixturesData from '@/data/fixtures.json';

export default function Home() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-900 dark:to-blue-950 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Copa Mundial de la FIFA 2026™
            </h1>
            <p className="text-xl sm:text-2xl mb-4">
              🇨🇦 Canadá · 🇲🇽 México · 🇺🇸 Estados Unidos
            </p>
            <p className="text-lg sm:text-xl mb-12 text-blue-100">
              El torneo más grande de la historia
            </p>
            
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Cuenta regresiva para el inicio
              </h2>
              <Countdown targetDate={fixturesData.tournamentStart} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold">48</div>
                <div className="text-sm mt-2">Equipos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold">16</div>
                <div className="text-sm mt-2">Sedes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold">104</div>
                <div className="text-sm mt-2">Partidos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixtures Section */}
        <FixturesSection />

        {/* Venues Section */}
        <VenuesSection />

        {/* Teams Section */}
        <TeamsSection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400">
              Copa Mundial de la FIFA 2026™
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Sitio informativo no oficial
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
