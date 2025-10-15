'use client';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              ⚽ Mundial 2026
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('fixtures')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Partidos
            </button>
            <button
              onClick={() => scrollToSection('venues')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Sedes
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Equipos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
