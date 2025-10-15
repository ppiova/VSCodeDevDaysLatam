import fixturesData from '@/data/fixtures.json';

export default function FixturesSection() {
  const groupedMatches = fixturesData.matches.reduce((acc, match) => {
    if (!acc[match.phase]) {
      acc[match.phase] = [];
    }
    acc[match.phase].push(match);
    return acc;
  }, {} as Record<string, typeof fixturesData.matches>);

  const phases = [
    'Fase de Grupos',
    'Octavos de Final',
    'Cuartos de Final',
    'Semifinales',
    'Final'
  ];

  return (
    <section id="fixtures" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Calendario de Partidos
        </h2>
        <div className="space-y-8">
          {phases.map((phase) => {
            const matches = groupedMatches[phase];
            if (!matches) return null;

            return (
              <div key={phase}>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {phase}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {matches.map((match) => (
                    <div
                      key={match.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(match.date).toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {match.time}
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex-1 text-right font-semibold">
                          {match.homeTeam}
                        </div>
                        <div className="text-gray-400 dark:text-gray-500 font-bold">
                          VS
                        </div>
                        <div className="flex-1 text-left font-semibold">
                          {match.awayTeam}
                        </div>
                      </div>
                      {match.group && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          Grupo {match.group}
                        </div>
                      )}
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        📍 {match.venue}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
