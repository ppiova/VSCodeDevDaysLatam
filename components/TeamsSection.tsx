'use client';

import { useState } from 'react';
import teamsData from '@/data/teams.json';
import qualifiedData from '@/data/qualified-teams-2026.json';

type ViewMode = 'groups' | 'qualified';

export default function TeamsSection() {
  const [viewMode, setViewMode] = useState<ViewMode>('qualified');
  const groups = Object.entries(teamsData.groups);

  // Contar equipos clasificados
  const totalQualified = qualifiedData.qualifiedTeams;
  const totalSpots = qualifiedData.totalTeams;

  return (
    <section id="teams" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Equipos del Mundial 2026
          </h2>
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="text-2xl">⚽</span>
            <span>{totalQualified} de {totalSpots} equipos clasificados</span>
          </div>
          
          {/* Toggle View Mode */}
          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setViewMode('qualified')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                viewMode === 'qualified'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              ✅ Equipos Clasificados
            </button>
            <button
              onClick={() => setViewMode('groups')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                viewMode === 'groups'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              🎲 Sorteo de Grupos (5 Dic)
            </button>
          </div>
        </div>

        {viewMode === 'qualified' ? (
          <QualifiedTeamsView data={qualifiedData} />
        ) : (
          <GroupsView groups={groups} />
        )}
      </div>
    </section>
  );
}

function QualifiedTeamsView({ data }: { data: typeof qualifiedData }) {
  const confederations = [
    { key: 'CONMEBOL', name: 'CONMEBOL', icon: '🌎', region: 'Sudamérica' },
    { key: 'UEFA', name: 'UEFA', icon: '🌍', region: 'Europa' },
    { key: 'CAF', name: 'CAF', icon: '🌍', region: 'África' },
    { key: 'CONCACAF', name: 'CONCACAF', icon: '🌎', region: 'Norte y Centroamérica' },
    { key: 'AFC', name: 'AFC', icon: '🌏', region: 'Asia' },
    { key: 'OFC', name: 'OFC', icon: '🌊', region: 'Oceanía' },
  ];

  return (
    <div className="space-y-8">
      {confederations.map((conf) => {
        const confData = data.qualifiedByConfederation[conf.key as keyof typeof data.qualifiedByConfederation];
        if (!confData || !confData.teams) return null;

        return (
          <div key={conf.key} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{conf.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{conf.name}</h3>
                    <p className="text-blue-100">{conf.region}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{confData.qualified}</div>
                  <div className="text-sm text-blue-100">de {confData.total} clasificados</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {confData.teams.map((team) => {
                const isDebutant = team.previousAppearances === 0;
                const isChampion = team.bestFinish?.includes('Campeón');
                
                return (
                  <div
                    key={team.code}
                    className={`flex items-start gap-3 p-4 rounded-lg transition-all hover:shadow-md ${
                      isDebutant 
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-400 dark:border-green-700'
                        : isChampion
                        ? 'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-400 dark:border-yellow-700'
                        : 'bg-white dark:bg-gray-750 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-4xl">{team.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-bold text-lg">{team.name}</div>
                        {isChampion && <span className="text-xl" title="Campeón Mundial">🏆</span>}
                        {isDebutant && <span className="text-xl" title="Debutante">🆕</span>}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mt-1">
                        <span className="font-mono font-bold">{team.code}</span>
                        <span>•</span>
                        <span title="Ranking FIFA">📊 #{team.ranking}</span>
                        <span>•</span>
                        <span title="Participaciones previas">
                          {team.previousAppearances === 0 
                            ? '🆕 Debut' 
                            : `📅 ${team.previousAppearances}x`
                          }
                        </span>
                      </div>
                      
                      {team.bestFinish && (
                        <div className="text-xs mt-2 flex items-center gap-1">
                          <span className={isChampion ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-400'}>
                            {isChampion ? '🏆' : '🎯'} Mejor: {team.bestFinish}
                          </span>
                        </div>
                      )}
                      
                      {'note' in team && team.note && (
                        <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mt-2 inline-block">
                          💡 {team.note}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {'pending' in confData && confData.pending && (
              <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 text-sm text-gray-600 dark:text-gray-300">
                ⏳ {confData.pending}
              </div>
            )}
          </div>
        );
      })}
      
      {/* Info Playoffs */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
          <span>⚡</span>
          <span>Playoffs Pendientes - Marzo 2026</span>
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="font-bold mb-2">🇪🇺 UEFA Playoffs</div>
            <div className="text-gray-600 dark:text-gray-400">4 equipos europeos por definir</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="font-bold mb-2">🌐 Repechaje Intercontinental</div>
            <div className="text-gray-600 dark:text-gray-400">6 equipos compiten por 2 plazas finales</div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Team {
  name: string;
  flag: string;
  code: string;
  qualified?: boolean;
}

function GroupsView({ groups }: { groups: [string, Team[]][] }) {
  const hostGroups = { A: '🇲🇽 México', B: '🇨🇦 Canadá', D: '🇺🇸 Estados Unidos' };

  return (
    <>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6 mb-8">
        <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
          <span>📅</span>
          <span>Sorteo Final: 5 de Diciembre de 2025</span>
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Los grupos se definirán en el Kennedy Center, Washington D.C. Los países anfitriones tienen posiciones garantizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {groups.map(([groupName, teams]) => {
          const isHostGroup = groupName in hostGroups;
          
          return (
            <div
              key={groupName}
              className={`rounded-lg shadow-lg p-6 ${
                isHostGroup
                  ? 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-500 dark:border-green-700'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  Grupo {groupName}
                </h3>
                {isHostGroup && (
                  <span className="text-xl" title="Grupo anfitrión">🏟️</span>
                )}
              </div>
              
              {isHostGroup && (
                <div className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
                  {hostGroups[groupName as keyof typeof hostGroups]}
                </div>
              )}
              
              <div className="space-y-3">
                {teams.map((team, index: number) => {
                  const isHost = team.qualified === true;
                  
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-2 rounded transition-colors ${
                        isHost
                          ? 'bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-700'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-3xl">{team.flag}</span>
                      <div className="flex-1">
                        <div className="font-medium">{team.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {team.code}
                          {isHost && <span className="ml-2 text-green-600 dark:text-green-400">✓ Anfitrión</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
