'use client';

import fixturesData from '@/data/fixtures.json';

export default function FixturesSection() {
  const confirmedMatches = 'confirmedMatches' in fixturesData ? fixturesData.confirmedMatches : [];
  const formatInfo = 'format' in fixturesData ? fixturesData.format : null;
  const keyDates = 'keyDates' in fixturesData ? fixturesData.keyDates : null;
  const stadiumInfo = 'stadiumInfo' in fixturesData ? fixturesData.stadiumInfo : null;

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
    'Tercer Lugar',
    'Final'
  ];

  return (
    <section id="fixtures" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Calendario del Mundial 2026
        </h2>

        {/* Tournament Info Cards */}
        {formatInfo && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2">{formatInfo.teams}</div>
              <div className="text-blue-100">Equipos Totales</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2">{formatInfo.groups}</div>
              <div className="text-green-100">Grupos</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2">{formatInfo.totalMatches}</div>
              <div className="text-purple-100">Partidos</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold mb-2">{formatInfo.advancePerGroup + formatInfo.thirdPlaceTeams}</div>
              <div className="text-orange-100">A Octavos</div>
            </div>
          </div>
        )}

        {/* Key Dates */}
        {keyDates && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>📅</span>
              <span>Fechas Clave del Torneo</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-1">Sorteo Final</div>
                <div className="text-lg font-bold">{new Date(keyDates.finalDraw).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-1">Inicio del Torneo</div>
                <div className="text-lg font-bold">{new Date(keyDates.tournamentStart).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-1">Gran Final</div>
                <div className="text-lg font-bold">{new Date(keyDates.final).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              </div>
            </div>
          </div>
        )}

        {/* Stadium Info */}
        {stadiumInfo && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">🏟️ Información de Estadios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Partido Inaugural</div>
                <div>{stadiumInfo.openingVenue}</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Más Partidos</div>
                <div>{stadiumInfo.mostMatches}</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Gran Final</div>
                <div>{stadiumInfo.finalVenue}</div>
              </div>
            </div>
          </div>
        )}

        {/* Confirmed Matches */}
        {confirmedMatches.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>✅</span>
              <span>Partidos Confirmados</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {confirmedMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      CONFIRMADO
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Grupo {match.group}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {new Date(match.date).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex-1 text-right font-bold text-lg">
                      {match.homeTeam}
                    </div>
                    <div className="text-gray-400 dark:text-gray-500 font-bold">VS</div>
                    <div className="flex-1 text-left font-bold text-lg">
                      {match.awayTeam}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    📍 {match.venue}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    🌍 {match.city}, {match.country}
                  </div>
                  {'note' in match && match.note && (
                    <div className="mt-3 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded">
                      ⭐ {match.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Phases */}
        <div className="space-y-8">
          {phases.map((phase) => {
            const matches = groupedMatches[phase];
            if (!matches || matches.length === 0) return null;

            const phaseIcons: Record<string, string> = {
              'Fase de Grupos': '⚽',
              'Octavos de Final': '🎯',
              'Cuartos de Final': '🔥',
              'Semifinales': '⭐',
              'Tercer Lugar': '🥉',
              'Final': '🏆'
            };

            return (
              <div key={phase}>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <span>{phaseIcons[phase] || '⚽'}</span>
                  <span>{phase}</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    ({matches.length} {matches.length === 1 ? 'partido' : 'partidos'})
                  </span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {matches.map((match) => (
                    <div
                      key={match.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-all hover:scale-[1.02]"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(match.date).toLocaleDateString('es-ES', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
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
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        <span>📍</span>
                        <span>{match.venue}</span>
                      </div>
                      {'city' in match && match.city && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {match.city}
                        </div>
                      )}
                      {'note' in match && match.note && (
                        <div className="mt-3 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded">
                          {match.note}
                        </div>
                      )}
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
