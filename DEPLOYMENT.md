# Deployment Guide - Mundial 2026

## GitHub Pages Setup

### Initial Setup (One-time)

1. **Enable GitHub Pages**
   - Go to your repository: https://github.com/ppiova/VSCodeDevDaysLatam
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Verify Workflow Permissions**
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, ensure:
     - ✅ Read and write permissions is selected
     - ✅ Allow GitHub Actions to create and approve pull requests is checked

3. **Wait for Deployment**
   - The GitHub Actions workflow will run automatically on push to `main`
   - Check the **Actions** tab to monitor progress
   - Once complete, your site will be live at: https://ppiova.github.io/VSCodeDevDaysLatam/

### Deployment Workflow

The site deploys automatically when you push to the `main` branch. The workflow:

1. **Lint** - Runs ESLint to check code quality
2. **Typecheck** - Validates TypeScript types
3. **Test** - Runs Vitest unit tests
4. **Build** - Generates static site
5. **Deploy** - Publishes to GitHub Pages

### Manual Deployment

If needed, you can trigger a manual deployment:

1. Go to the **Actions** tab
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Build and Test Locally

```bash
# Validate data files
npm run validate-data

# Run linter
npm run lint

# Run type checker
npm run typecheck

# Run tests
npm run test

# Build for production
npm run build

# The static site is generated in ./out directory
```

## Updating Content

### Update Match Data

Edit `data/matches.json`:

```json
{
  "id": "mx-001",
  "dateUTC": "2026-06-11T19:00:00Z",
  "stage": "Fase de Grupos",
  "group": "A",
  "home": "MEX",
  "away": "ARG",
  "venue": "estadio-azteca"
}
```

### Update Team Data

Edit `data/teams.json`:

```json
{
  "code": "ARG",
  "name": "Argentina",
  "group": "A",
  "confed": "CONMEBOL",
  "flag": "/flags/ARG.png"
}
```

### Update Venue Data

Edit `data/venues.json`:

```json
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
```

### Validate and Deploy

```bash
# Validate your changes
npm run validate-data

# Commit and push
git add data/
git commit -m "Update match data"
git push origin main

# The site will deploy automatically
```

## Important Configuration

### Tournament Start Date

The countdown timer uses the date from `lib/constants.ts`:

```typescript
export const TOURNAMENT_START_UTC = "2026-06-11T16:00:00Z";
```

**⚠️ TODO**: Update this with the official FIFA announcement.

### Base Path

The site is configured for GitHub Pages with a base path in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/VSCodeDevDaysLatam' : '',
```

If you're using a custom domain or user/org repository (username.github.io), remove the `basePath`.

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Run `npm run build` locally to reproduce the issue
- Ensure all data files pass validation: `npm run validate-data`

### 404 Errors on GitHub Pages

- Wait 5-10 minutes after deployment completes
- Clear your browser cache
- Check that the `basePath` is correct in `next.config.js`

### Countdown Not Working

- The countdown uses client-side JavaScript
- Ensure JavaScript is enabled in the browser
- Check browser console for errors

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Update DNS settings with your domain provider
3. Update `basePath` in `next.config.js` to `''`
4. Follow GitHub's custom domain guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Performance

The site is fully static with:
- ✅ No runtime server required
- ✅ Fast loading times
- ✅ CDN-served via GitHub Pages
- ✅ Optimized assets
- ✅ Mobile-first responsive design

## Monitoring

Monitor your deployment:
- **Actions Tab**: Build and deployment status
- **Insights → Traffic**: Page views and visitor stats (after some time)
- Browser DevTools: Check for JavaScript errors or warnings
