import venuesData from '@/data/venues.json';

export default function VenuesSection() {
  const groupedVenues = venuesData.venues.reduce((acc, venue) => {
    if (!acc[venue.country]) {
      acc[venue.country] = [];
    }
    acc[venue.country].push(venue);
    return acc;
  }, {} as Record<string, typeof venuesData.venues>);

  return (
    <section id="venues" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Sedes y Estadios
        </h2>
        <div className="space-y-8">
          {Object.entries(groupedVenues).map(([country, venues]) => (
            <div key={country}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">{venues[0].flag}</span>
                {country}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {venues.map((venue) => (
                  <div
                    key={venue.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
                  >
                    <h4 className="font-bold text-lg mb-2">{venue.city}</h4>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {venue.stadium}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Capacidad: {venue.capacity.toLocaleString()} personas
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
