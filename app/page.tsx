import Countdown from '@/components/Countdown';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import FixturesSection from '@/components/FixturesSection';
import VenuesSection from '@/components/VenuesSection';
import TeamsSection from '@/components/TeamsSection';
import QualificationStats from '@/components/QualificationStats';
import FeaturedTeams from '@/components/FeaturedTeams';
import fixturesData from '@/data/fixtures.json';

export default function Home() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-950 dark:via-indigo-950 dark:to-gray-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Main Title */}
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🏆 Primera vez con 48 equipos
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Copa Mundial de la FIFA 2026™
              </h1>
              <p className="text-2xl sm:text-3xl mb-4 font-semibold">
                🇨🇦 Canadá · 🇲🇽 México · 🇺🇸 Estados Unidos
              </p>
              <p className="text-lg sm:text-xl mb-6 text-blue-100">
                El torneo más grande de la historia del fútbol
              </p>
            </div>
            
            {/* Countdown */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                ⏱️ Cuenta regresiva para el inicio
              </h2>
              <Countdown targetDate={fixturesData.tournamentStart} />
            </div>
            
            {/* Tournament Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-yellow-500">48</div>
                <div className="text-sm mt-2 font-semibold">Equipos</div>
                <div className="text-xs mt-1 text-blue-200">+50% más</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-300 to-green-500">16</div>
                <div className="text-sm mt-2 font-semibold">Sedes</div>
                <div className="text-xs mt-1 text-blue-200">3 países</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-300 to-red-500">104</div>
                <div className="text-sm mt-2 font-semibold">Partidos</div>
                <div className="text-xs mt-1 text-blue-200">40 días</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-300 to-purple-500">12</div>
                <div className="text-sm mt-2 font-semibold">Grupos</div>
                <div className="text-xs mt-1 text-blue-200">4 equipos c/u</div>
              </div>
            </div>

            {/* Key Dates */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">📅 Fechas Clave</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-yellow-300">Sorteo</div>
                    <div className="text-blue-100">5 de diciembre, 2025</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-300">Inauguración</div>
                    <div className="text-blue-100">11 de junio, 2026</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-300">Final</div>
                    <div className="text-blue-100">19 de julio, 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification Stats Section */}
        <QualificationStats />

        {/* Featured Teams Section */}
        <FeaturedTeams />

        {/* Fixtures Section */}
        <FixturesSection />

        {/* Teams Section */}
        <TeamsSection />

        {/* Venues Section */}
        <VenuesSection />

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
