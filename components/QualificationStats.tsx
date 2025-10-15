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

interface ConfederationData {
  total: number;
  qualified?: number;
  remaining?: number;
  teams?: Team[];
  pending?: string;
}

export default function QualificationStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            📊 Estado de Clasificación
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Actualizado al {new Date(qualifiedData.lastUpdated).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {qualifiedData.qualifiedTeams}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Equipos Clasificados
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {qualifiedData.remainingSpots}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Cupos Restantes
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {qualifiedData.totalTeams}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                  Total de Equipos
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${Math.round((qualifiedData.qualifiedTeams / qualifiedData.totalTeams) * 100)}%` 
                }}
              >
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
              {Math.round((qualifiedData.qualifiedTeams / qualifiedData.totalTeams) * 100)}% clasificado
            </div>
          </div>
        </div>

        {/* Confederation Breakdown */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            🌍 Clasificación por Confederación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(qualifiedData.qualifiedByConfederation).map(([conf, data]) => {
              const confData = data as ConfederationData;
              const qualified = confData.qualified || confData.teams?.length || 0;
              const total = confData.total;
              const percentage = (qualified / total) * 100;
              
              return (
                <div 
                  key={conf} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{conf}</h4>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {qualified}/{total}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                        style={{ 
                          width: `${Math.round(percentage)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {Math.round(percentage)}%
                    </div>
                  </div>

                  {confData.teams && confData.teams.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {confData.teams.slice(0, 6).map((team) => (
                        <span 
                          key={team.code}
                          className="text-2xl"
                          title={team.name}
                        >
                          {team.flag}
                        </span>
                      ))}
                      {confData.teams.length > 6 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
                          +{confData.teams.length - 6}
                        </span>
                      )}
                    </div>
                  )}

                  {confData.pending && (
                    <div className="mt-3 text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 rounded p-2">
                      ⏳ {confData.pending}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Historical Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Time */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
              <span>🆕</span>
              <span>Hitos Históricos</span>
            </h3>
            <ul className="space-y-3">
              {qualifiedData.historicalMilestones.firstTime.map((milestone, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Returning Teams */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span>↩️</span>
              <span>Equipos que Regresan</span>
            </h3>
            <ul className="space-y-3">
              {qualifiedData.historicalMilestones.returning.map((team, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-500 mt-1">↩</span>
                  <span>{team}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Intercontinental Playoffs Info */}
        <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
            <span>⚔️</span>
            <span>Repechaje Intercontinental</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-semibold">📅 Fecha:</span> {qualifiedData.intercontinentalPlayoffs.date}
            </div>
            <div>
              <span className="font-semibold">🎯 Cupos:</span> {qualifiedData.intercontinentalPlayoffs.spots} de {qualifiedData.intercontinentalPlayoffs.participants}
            </div>
            <div className="sm:col-span-2">
              <span className="font-semibold">📋 Formato:</span> {qualifiedData.intercontinentalPlayoffs.format}
            </div>
            <div className="sm:col-span-2 text-xs text-yellow-800 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900/30 rounded p-2">
              💡 {qualifiedData.intercontinentalPlayoffs.note}
            </div>
          </div>
        </div>

        {/* Draw Information */}
        <div className="mt-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            🎲 Sorteo Final
          </h3>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">{new Date(qualifiedData.drawDate).toLocaleDateString('es-ES', { 
              weekday: 'long',
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="text-md text-gray-600 dark:text-gray-400">
            📍 {qualifiedData.drawLocation}
          </div>
        </div>
      </div>
    </section>
  );
}
