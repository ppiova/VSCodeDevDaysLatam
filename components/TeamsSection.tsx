import teamsData from '@/data/teams.json';

export default function TeamsSection() {
  const groups = Object.entries(teamsData.groups);

  return (
    <section id="teams" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Equipos Clasificados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map(([groupName, teams]) => (
            <div
              key={groupName}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Grupo {groupName}
              </h3>
              <div className="space-y-3">
                {teams.map((team, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-3xl">{team.flag}</span>
                    <div>
                      <div className="font-medium">{team.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {team.code}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
