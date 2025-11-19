# Luis Machado Reis - Portfolio

[![CI](https://github.com/luismr/luismachadoreis.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/luismr/luismachadoreis.dev/actions/workflows/ci.yml)
[![Docker Build](https://github.com/luismr/luismachadoreis.dev/actions/workflows/docker.yml/badge.svg)](https://github.com/luismr/luismachadoreis.dev/actions/workflows/docker.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Image](https://img.shields.io/badge/docker-ghcr.io%2Fluismr%2Fluismachadoreis.dev-blue)](https://github.com/luismr/luismachadoreis.dev/pkgs/container/luismachadoreis.dev)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev/)

🍮 Personal portfolio website built with React, Vite, and i18n support. Features a modern, responsive design with multi-language support (English, Portuguese-BR, Spanish) and optimized Docker deployment.

## ✨ Features

- 🌍 **Multi-language Support**: English (🇬🇧), Portuguese-BR (🇧🇷), and Spanish (🇪🇸)
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🚀 **Fast & Modern**: Built with React 18 and Vite for optimal performance
- 🐳 **Docker Ready**: Production-ready Docker image based on nginx:alpine-slim
- 🧪 **Tested**: Comprehensive test suite with Vitest and React Testing Library
- 🎨 **Modern UI**: Clean, professional design with dark theme
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- 📊 **CI/CD**: Automated testing and Docker builds via GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/luismr/luismachadoreis.dev.git
cd luismachadoreis.dev

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🧪 Testing

This project uses Vitest and React Testing Library for comprehensive testing.

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 🐳 Docker

### Build Docker Image

```bash
# Build the image
npm run docker:build
# or
docker build -t portfolio:latest .
```

### Run Docker Container

```bash
# Run the container
npm run docker:run
# or
docker run -p 8080:80 portfolio:latest
```

The application will be available at `http://localhost:8080`

### Docker Compose

```bash
# Start with Docker Compose
docker-compose up -d

# Stop
docker-compose down
```

### Using GitHub Container Registry

Images are automatically built and pushed to GitHub Container Registry via GitHub Actions:

```bash
# Pull the latest image
docker pull ghcr.io/luismr/luismachadoreis.dev:latest

# Run the image
docker run -p 8080:80 ghcr.io/luismr/luismachadoreis.dev:latest
```

## 📁 Project Structure

```
luismachadoreis.dev/
├── public/                 # Static assets
│   ├── favicon.svg        # Pudim favicon 🍮
│   ├── luis-profile.png   # Profile image
│   └── carimbo-vip.png    # Project logo
├── src/
│   ├── components/         # React components
│   │   ├── LanguageSelector.jsx
│   │   └── __tests__/     # Component tests
│   ├── i18n/              # Internationalization
│   │   ├── config.js      # i18n configuration
│   │   └── locales/       # Translation files
│   │       ├── en.json
│   │       ├── pt-BR.json
│   │       └── es.json
│   ├── __tests__/         # App tests
│   ├── App.jsx            # Main app component
│   ├── App.css            # Styles
│   └── main.jsx           # Entry point
├── .github/
│   └── workflows/         # GitHub Actions
│       ├── ci.yml         # CI workflow
│       └── docker.yml     # Docker build workflow
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose config
├── nginx.conf            # Nginx configuration
├── vite.config.mjs       # Vite configuration
├── vitest.config.js      # Vitest configuration
└── eslint.config.js      # ESLint configuration
```

## 🌍 Internationalization

The portfolio supports three languages:

- **English (en)**: Default language
- **Portuguese-BR (pt-BR)**: Brazilian Portuguese
- **Spanish (es)**: Spanish

Language detection:
- Automatically detects browser language on first visit
- Falls back to English if language is not supported
- User selection is saved in localStorage
- Language selector with flag icons in the top right corner

### Adding a New Language

1. Create a new translation file in `src/i18n/locales/` (e.g., `fr.json`)
2. Add the language to `src/i18n/config.js`
3. Add the language flag to `src/components/LanguageSelector.jsx`

## 🎨 Styling

The project uses custom CSS with CSS variables for theming:

- Dark theme with gradient backgrounds
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Modern card-based layout

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint

# Testing
npm test             # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
npm run test:ui      # Run tests with UI

# Docker
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
```

## 🚢 Deployment

### GitHub Actions CI/CD

The project includes automated CI/CD workflows:

- **CI Workflow**: Runs on every push/PR
  - Lints code
  - Runs tests
  - Builds application
  
- **Docker Workflow**: Builds and pushes Docker images
  - Multi-architecture support (AMD64, ARM64)
  - Automatic semantic versioning
  - Pushes to GitHub Container Registry

### Manual Deployment

1. Build the application: `npm run build`
2. The `dist/` folder contains the production build
3. Deploy to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

### Docker Deployment

```bash
# Build and tag
docker build -t portfolio:latest .

# Run
docker run -d -p 8080:80 --name portfolio portfolio:latest
```

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Bundled with [Vite](https://vitejs.dev/)
- Internationalization with [i18next](https://www.i18next.com/)
- Testing with [Vitest](https://vitest.dev/)
- Containerized with [Docker](https://www.docker.com/)
- Served with [nginx](https://nginx.org/)

## 🔗 Links

- **Live Site**: [luismachadoreis.dev](https://luismachadoreis.dev)
- **GitHub Repository**: [luismr/luismachadoreis.dev](https://github.com/luismr/luismachadoreis.dev)
- **Docker Image**: [ghcr.io/luismr/luismachadoreis.dev](https://github.com/luismr/luismachadoreis.dev/pkgs/container/luismachadoreis.dev)
- **LinkedIn**: [luismachadoreis](https://linkedin.com/in/luismachadoreis)
- **GitHub Profile**: [@luismr](https://github.com/luismr)
- **Projects**:
  - [pudim.dev](https://pudim.dev) - Dev Pudim Score Calculator
  - [carimbo.vip](https://carimbo.vip) - Access, tickets, and stamps management

---

Made with 💜 and 🍮 by [Luis Machado Reis](https://github.com/luismr)
