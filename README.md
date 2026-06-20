# Manoj's Portfolio

A modern, interactive portfolio website featuring scroll-driven animations and canvas-based image sequences.

## Tech Stack

### Core Framework

- **React** (^18.3.1) - UI library for building the component-based interface
- **React DOM** (^18.3.1) - React renderer for web applications

### Build Tools & Development

- **Vite** (^6.0.3) - Fast build tool and development server
- **TypeScript** (^5.7.2) - Type-safe JavaScript with static type checking
- **@vitejs/plugin-react** (^4.3.4) - Vite plugin for React support

### Styling

- **Tailwind CSS** (^3.4.17) - Utility-first CSS framework
- **PostCSS** (^8.4.49) - CSS transformation tool
- **Autoprefixer** (^10.4.20) - PostCSS plugin to parse CSS and add vendor prefixes

### Animation & Interactions

- **Framer Motion** (^11.15.0) - Production-ready motion library for React
  - Used for scroll-based animations
  - Parallax effects and scroll progress tracking
  - Smooth transitions and animations

### Type Definitions

- **@types/react** (^18.3.18) - TypeScript type definitions for React
- **@types/react-dom** (^18.3.5) - TypeScript type definitions for React DOM

## Key Features

- **Scroll-driven Canvas Animation**: Canvas-based image sequence that progresses as you scroll
- **Parallax Text Overlays**: Multiple text sections with parallax effects that appear/disappear based on scroll position
- **Projects Showcase**: Animated project grid with hover effects and staggered animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Performance Optimized**: Image preloading, canvas rendering, and optimized animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn (or npm)

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
# Build for production
yarn build
```

### Preview Production Build

```bash
# Preview the production build locally
yarn preview
```

## Development Server

The development server runs on port 3000 by default (configured in `vite.config.ts`).

## TypeScript Configuration

The project uses strict TypeScript settings with:

- ES2020 target
- React JSX transform
- Module resolution: bundler
- Strict type checking enabled
- Unused locals and parameters detection

## Styling Approach

The project uses Tailwind CSS with:

- Custom font stack (Inter, SF Pro, system fonts)
- Custom dark theme colors
- Utility-first styling approach
- Responsive design utilities

## Animation Strategy

- **Framer Motion** handles all scroll-based animations
- Uses `useScroll` and `useTransform` hooks for scroll progress tracking
- Canvas rendering for smooth image sequence playback
- Parallax effects for text overlays
