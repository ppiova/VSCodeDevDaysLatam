# Mundial 2026 - Sitio Informativo

Sitio web informativo sobre la Copa Mundial de la FIFA 2026™ que se llevará a cabo en Canadá, México y Estados Unidos.

## 🌟 Características

- ⏱️ **Cuenta Regresiva**: Contador en tiempo real hasta el inicio del torneo
- 📅 **Calendario de Partidos**: Fixtures completos organizados por fase (Grupos, Octavos, Cuartos, Semifinales y Final)
- 🏟️ **Sedes y Estadios**: Información detallada de las 16 sedes en los 3 países anfitriones
- 🌍 **Equipos Clasificados**: Grupos con banderas y códigos de países
- 🎨 **Tema Claro/Oscuro**: Toggle para cambiar entre modo claro y oscuro
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y escritorio
- 🔍 **SEO Básico**: Metadatos y optimización para motores de búsqueda

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de estilos utility-first
- **React 19** - Biblioteca de UI

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Verificar código
npm run lint
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 📦 Estructura del Proyecto

```
.
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes de React
│   ├── Countdown.tsx      # Contador regresivo
│   ├── ThemeToggle.tsx    # Toggle de tema
│   ├── Navigation.tsx     # Barra de navegación
│   ├── FixturesSection.tsx    # Sección de partidos
│   ├── VenuesSection.tsx      # Sección de sedes
│   └── TeamsSection.tsx       # Sección de equipos
├── data/                  # Datos en JSON
│   ├── fixtures.json      # Calendario de partidos
│   ├── venues.json        # Sedes y estadios
│   └── teams.json         # Equipos por grupo
└── public/                # Archivos estáticos

```

## 🌐 Deploy en GitHub Pages

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

URL del sitio: [https://ppiova.github.io/VSCodeDevDaysLatam](https://ppiova.github.io/VSCodeDevDaysLatam)

## 📄 Datos

Todos los datos del torneo se encuentran en archivos JSON en la carpeta `data/`:

- **fixtures.json**: Fechas, horarios, equipos y sedes de los partidos
- **venues.json**: Información de las 16 sedes (ciudad, estadio, capacidad)
- **teams.json**: 48 equipos organizados en 12 grupos

## 📸 Screenshots

![Modo Claro](https://github.com/user-attachments/assets/181cbd99-2692-47f3-be91-53a94af46319)
![Modo Oscuro](https://github.com/user-attachments/assets/443aec3d-340c-4007-a56a-fab2642680fa)

## 📝 Licencia

Este es un proyecto educativo sin fines de lucro. Los derechos de la Copa Mundial de la FIFA™ pertenecen a la FIFA.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.
