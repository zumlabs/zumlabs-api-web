# ZUMLABS APIs - High-Performance Developer Tools

A unified platform for AI, Media Processing, and Open Source Intelligence. Seamlessly integrate powerful capabilities into your applications.

## Features

- **Landing Page** - Modern hero section with Spotlight effects and animated features
- **API Documentation** - Interactive docs with endpoint details, parameters, and examples
- **System Status** - Real-time monitoring with uptime, memory, and latency metrics
- **Responsive Design** - Mobile-first with hamburger navigation and adaptive layouts
- **Dark Theme** - Professional dark mode with green accents (#16a34a)

## Tech Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Button, Card)
- **Animations**: Framer Motion 12.24.0
- **Icons**: Lucide React 0.562.0
- **Git Hooks**: Commitlint + Husky (Conventional Commits)

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── status/page.tsx    # System status page
│   ├── docs/page.tsx      # API documentation
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # HeroSection, FeaturesSection, StatusMetrics
│   ├── features/          # FeatureCard, MetricCard, SystemLog
│   ├── docs/              # DocsSidebar, DocsContent, EndpointDetail
│   └── ui/                # shadcn/ui components
```

## Design System

### Colors
- Background: `#0f1218` (dark blue-black)
- Cards: `#1a1f2e` (dark blue-grey)
- Borders: `#2d3748` (subtle grey)
- Text: `#9ca3af` (light grey)
- Accent: `#16a34a` (green)

### Typography
- Font: Geist Sans & Geist Mono
- Responsive scaling with `md:` breakpoints

## API Endpoints

Base URL: `https://api.zumlabs.tech`

Example endpoint:
```
GET /api/ai/flux-image?prompt=sunset&width=1024&height=1024
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with commitlint.

Valid commit types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `build:` - Build system changes
- `ci:` - CI configuration changes
- `chore:` - Other changes (maintenance)

Example:
```bash
git commit -m "feat: add api documentation page with sidebar navigation"
```

## License

© 2026 ZUMLABS. All rights reserved.

## Contact

Instagram: [@qhorryzuma](https://instagram.com/qhorryzuma)

---

Built with Next.js and deployed on Vercel.

