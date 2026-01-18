# Frontend Developer Portfolio

A stunning, minimal, and interactive portfolio website built with Next.js, Tailwind CSS, and Particle.js. This portfolio showcases your work as a Frontend Developer with smooth animations and engaging user experience.

## Features

- ✨ **Modern Design**: Clean, minimal, and stunning UI
- 🎨 **Interactive Elements**: Smooth animations and hover effects using Framer Motion
- 🌟 **Particle Background**: Dynamic particle effects using tsparticles
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🎯 **Sections Included**:
  - About Me
  - Experiences
  - Journey
  - Skills
  - Projects (with video demo support)
- ⚡ **Performance**: Built with Next.js 14 for optimal performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: tsparticles (Particle.js alternative)
- **Icons**: React Icons
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Your Content

1. **About Section** (`components/About.tsx`):
   - Update the description text
   - Add your social media links
   - Replace the placeholder avatar

2. **Experiences** (`components/Experiences.tsx`):
   - Update the `experiences` array with your work history
   - Modify titles, companies, periods, descriptions, and technologies

3. **Journey** (`components/Journey.tsx`):
   - Update the `journeySteps` array with your career milestones
   - Customize years, titles, and descriptions

4. **Skills** (`components/Skills.tsx`):
   - Update the `skills` array with your technologies
   - Adjust skill levels (0-100)
   - Add or remove skill icons

5. **Projects** (`components/Projects.tsx`):
   - Update the `projects` array with your projects
   - Add project images, video URLs, GitHub links, and live URLs
   - Update technologies used for each project

6. **Header** (`components/Header.tsx`):
   - Update navigation items if needed
   - Customize the logo/brand name

7. **Footer** (`components/Footer.tsx`):
   - Update social media links
   - Customize footer text

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Particle Effects

Particle settings can be customized in `components/ParticleBackground.tsx`:
- Particle count
- Colors
- Interaction modes
- Speed and behavior

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── About.tsx        # About section
│   ├── Experiences.tsx  # Work experiences
│   ├── Journey.tsx      # Career journey
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects portfolio
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer component
│   └── ParticleBackground.tsx # Particle effects
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## License

This project is open source and available for personal use.

---

Built with ❤️ for Frontend Developers
