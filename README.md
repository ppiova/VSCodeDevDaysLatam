# Mundial 2026 - Sitio Web Informativo

Sitio web informativo sobre la Copa Mundial de la FIFA 2026, que se celebrará en México, Estados Unidos y Canadá.

## 🚀 Características

- **Cuenta regresiva en tiempo real** hasta el inicio del torneo
- **Fixtures completos** con filtros por fase, grupo y sede
- **Información de sedes** con mapas y detalles de estadios
- **Equipos participantes** organizados por confederación
- **Diseño responsive** optimizado para móviles
- **Accesible** (WCAG 2.1 AA)
- **SEO optimizado** con metadatos sociales
- **Modo oscuro** con theming basado en clases

## 🛠️ Stack Tecnológico

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Radix UI / shadcn/ui** para componentes accesibles
- **Zod** para validación de datos
- **Vitest** para pruebas unitarias

## 📦 Instalación y Desarrollo

### Requisitos Previos

- Node.js 20.x o superior
- npm

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ppiova/VSCodeDevDaysLatam.git
cd VSCodeDevDaysLatam

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el sitio estático para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run typecheck` - Verifica los tipos de TypeScript
- `npm run test` - Ejecuta las pruebas con Vitest
- `npm run validate-data` - Valida los archivos JSON de datos

## 📊 Estructura de Datos

Los datos del sitio están almacenados en archivos JSON en el directorio `/data`:

### `teams.json`

```json
[
  {
    "code": "ARG",
    "name": "Argentina",
    "group": "A",
    "confed": "CONMEBOL",
    "flag": "/flags/ARG.png"
  }
]
```

### `venues.json`

```json
[
  {
    "slug": "estadio-azteca",
    "name": "Estadio Azteca",
    "city": "Ciudad de México",
    "country": "México",
    "capacity": 87000,
    "tz": "America/Mexico_City",
    "lat": 19.3029,
    "lng": -99.1506
  }
]
```

### `matches.json`

```json
[
  {
    "id": "mx-001",
    "dateUTC": "2026-06-11T19:00:00Z",
    "stage": "Fase de Grupos",
    "group": "A",
    "home": "MEX",
    "away": "ARG",
    "venue": "estadio-azteca"
  }
]
```

## 📝 Cómo Actualizar los Datos

1. Edita los archivos JSON en el directorio `/data`
2. Ejecuta `npm run validate-data` para validar el formato
3. Ejecuta `npm run build` para generar el sitio
4. Haz commit y push de los cambios

Los cambios se desplegarán automáticamente en GitHub Pages.

## ⚠️ Configuración Importante

### Fecha de Inicio del Torneo

La fecha de inicio del torneo está definida en `lib/constants.ts`:

```typescript
export const TOURNAMENT_START_UTC = "2026-06-11T16:00:00Z";
```

**TODO**: Confirma y actualiza esta fecha una vez que FIFA anuncie la fecha oficial del torneo.

### Base Path para GitHub Pages

El `basePath` está configurado en `next.config.js` para GitHub Pages:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/VSCodeDevDaysLatam' : '',
```

Si estás usando un repositorio de usuario/organización (e.g., `username.github.io`), puedes remover el `basePath`.

## 🌐 Despliegue en GitHub Pages

El sitio se despliega automáticamente en GitHub Pages cuando haces push a la rama `main`.

### Configuración Manual (Primera Vez)

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow `.github/workflows/pages.yml` se ejecutará automáticamente

El sitio estará disponible en: `https://ppiova.github.io/VSCodeDevDaysLatam/`

## 🔄 Migración a API Externa

Para migrar de archivos JSON estáticos a una API:

1. Crea un nuevo directorio `lib/api`
2. Implementa funciones que consuman la API:

```typescript
// lib/api/teams.ts
export async function getTeams() {
  const response = await fetch('https://api.example.com/teams');
  return response.json();
}
```

3. Actualiza las páginas para usar estas funciones en lugar de importar los JSON
4. Si usas ISR (Incremental Static Regeneration), añade `revalidate` en las páginas:

```typescript
export const revalidate = 3600; // Revalidar cada hora
```

## 🧪 Pruebas

Las pruebas están escritas con Vitest y Testing Library:

```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar en modo watch
npm run test -- --watch
```

## ♿ Accesibilidad

El sitio sigue las pautas WCAG 2.1 nivel AA:

- Contraste de colores adecuado
- Navegación por teclado
- Atributos ARIA apropiados
- Textos alternativos para imágenes
- Focus rings visibles

## 🌍 Internacionalización

El sitio está configurado en español (es-AR) por defecto. Para agregar más idiomas:

1. Crea archivos de traducción en `lib/i18n/`
2. Implementa un selector de idioma
3. Usa las traducciones en los componentes

## 📄 Licencia

MIT

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

**Nota**: Este es un sitio no oficial creado con fines informativos. No está afiliado con FIFA ni con ninguna federación de fútbol.