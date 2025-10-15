'use client';

import qualifiedData from '@/data/qualified-teams-2026.json';

interface Team {
  name: string;
  flag: string;
  code: string;
  ranking: number;
  previousAppearances: number;
  bestFinish: string;
  note?: string;
}

export default function FeaturedTeams() {
  // Extraer equipos destacados
  const allTeams: Team[] = [];
  Object.values(qualifiedData.qualifiedByConfederation).forEach((conf) => {
    if (conf.teams) {
      allTeams.push(...conf.teams);
    }
  });

  // Filtrar categorías
  const debutants = allTeams.filter(team => team.previousAppearances === 0);
  const champions = allTeams.filter(team => team.bestFinish?.includes('Campeón'));
  const topRanked = allTeams.sort((a, b) => a.ranking - b.ranking).slice(0, 5);
  const hosts = allTeams.filter(team => team.note?.includes('anfitrión'));

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            ⭐ Equipos Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Debutantes, Campeones y más historias del Mundial 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Debutantes */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl shadow-lg p-8 border-2 border-green-400 dark:border-green-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🆕</span>
              <div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">
                  Debutantes Históricos
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Primera vez en un Mundial
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {debutants.map((team) => (
                <div 
                  key={team.code}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{team.flag}</span>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {team.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Ranking FIFA: #{team.ranking}
                      </div>
                      {team.note && (
                        <div className="text-xs text-green-700 dark:text-green-300 mt-2 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                          {team.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campeones */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl shadow-lg p-8 border-2 border-yellow-400 dark:border-yellow-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏆</span>
              <div>
                <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                  Campeones Mundiales
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Ganadores de la Copa del Mundo
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {champions.map((team) => {
                const titles = team.bestFinish?.match(/\d+/)?.[0] || '1';
                const isMultiChampion = parseInt(titles) > 1;
                
                return (
                  <div 
                    key={team.code}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-5xl">{team.flag}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-lg text-gray-900 dark:text-white">
                            {team.name}
                          </div>
                          {isMultiChampion && (
                            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                              {titles}x
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Ranking FIFA: #{team.ranking} · {team.previousAppearances} Mundiales
                        </div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">
                          🏆 {team.bestFinish}
                        </div>
                        {team.note && (
                          <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded">
                            {team.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Rankings */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl shadow-lg p-8 border-2 border-blue-400 dark:border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📊</span>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  Top 5 Ranking FIFA
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Mejores clasificados
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              {topRanked.map((team, index) => (
                <div 
                  key={team.code}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <span className="text-4xl">{team.flag}</span>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {team.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Ranking: #{team.ranking}
                      </div>
                    </div>
                    {team.bestFinish?.includes('Campeón') && (
                      <span className="text-2xl" title="Campeón Mundial">🏆</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Países Anfitriones */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl shadow-lg p-8 border-2 border-purple-400 dark:border-purple-600">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🏟️</span>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  Países Anfitriones
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Clasificación automática
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {hosts.map((team) => (
                <div 
                  key={team.code}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{team.flag}</span>
                    <div className="flex-1">
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {team.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Ranking: #{team.ranking} · {team.previousAppearances} Mundiales
                      </div>
                      <div className="text-xs text-purple-700 dark:text-purple-300 mt-2">
                        🏆 Mejor resultado: {team.bestFinish}
                      </div>
                      {team.note && (
                        <div className="text-xs text-purple-700 dark:text-purple-300 mt-1 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
                          {team.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border-2 border-orange-300 dark:border-orange-700">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            📌 Datos Curiosos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <div className="font-bold text-2xl text-orange-600 dark:text-orange-400">
                {debutants.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Equipos debutantes
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="font-bold text-2xl text-yellow-600 dark:text-yellow-400">
                {champions.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Campeones mundiales
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌟</div>
              <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                {qualifiedData.qualifiedTeams}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Equipos clasificados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
