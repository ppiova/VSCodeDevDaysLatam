# Prompt para GitHub Copilot Agents — Web Mundial 2026

Quiero que crees una **web pública** centrada en el **Mundial de Fútbol 2026** (fixtures, fechas, sedes/lugares y equipos). La página principal debe mostrar un **countdown** de días (y horas/minutos) restantes para el inicio del torneo.  
Entrega el proyecto completo en un repositorio nuevo y déjalo **deployado en GitHub Pages**.

## Objetivo y alcance
- Sitio informativo con:
  1. **Inicio**: hero + countdown al inicio del Mundial, CTA a fixtures, búsqueda rápida.
  2. **Fixtures**: calendario por fase, grupo y fecha; detalle de partido.
  3. **Sedes**: lista de ciudades/estadios con ficha.
  4. **Equipos**: grid por confederación/grupo.
  5. **Acerca/FAQ**: fuente de datos y créditos.

## Requisitos técnicos
- **Stack**: Next.js 14 (App Router) + TypeScript + TailwindCSS.
- **UI**: shadcn/ui, lucide-react.
- **Datos**: JSON estáticos en `/data`.
- **Countdown**: `<Countdown startDate={TOURNAMENT_START_UTC} />`.
- **Rutas**: `/`, `/fixtures`, `/sedes`, `/equipos`, `/acerca`.
- **Accesibilidad**, **SEO** y **modo oscuro**.

## Diseño
- Minimalista, responsive, modo claro/oscuro.
- Paleta con acentos verdes o azules.
- Home con hero, contador grande y accesos rápidos.

## Estructura de datos
Ejemplo `teams.json`:
```json
[{ "code": "ARG", "name": "Argentina", "group": "C", "confed": "CONMEBOL", "flag": "/flags/ARG.png" }]
```

Ejemplo `venues.json`:
```json
[{ "slug": "estadio-azteca", "name": "Estadio Azteca", "city": "Ciudad de México", "capacity": 87000 }]
```

## Páginas y componentes
- `app/page.tsx`: Hero + Countdown + próximos partidos.
- `app/fixtures/page.tsx`: Tabla con filtros.
- `app/equipos/page.tsx` y `[code]`: fichas de selección.
- `app/sedes/page.tsx` y `[slug]`: fichas de estadio.
- `components/Countdown.tsx`: cálculo de tiempo real.

## Calidad y CI
- Tests: vitest + testing-library.
- Linter y formateo.
- Deploy automático con GitHub Actions → Pages.

## Criterios de aceptación
- Home muestra countdown exacto.
- Fixtures filtrables.
- Sedes y equipos enlazables.
- Build estático funcional en GitHub Pages.
