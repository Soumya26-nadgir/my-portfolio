# React Bits Style Components

This portfolio now includes custom implementations of React Bits style components inspired by reactbits.dev:

## Components Added

### 1. **True Focus** (`components/TrueFocus.tsx`)
- Interactive focus effect that follows mouse movement
- Creates a radial gradient spotlight effect on hover
- Used in section headings and hero areas
- Provides engaging visual feedback

**Usage:**
```tsx
<TrueFocus className="rounded-2xl p-8">
  <h2>My Section</h2>
</TrueFocus>
```

### 2. **Reflective Cards** (`components/ReflectiveCard.tsx`)
- 3D tilt effect that responds to mouse position
- Reflection overlay that follows cursor
- Creates depth and interactivity
- Used in Projects, Skills, and Journey sections

**Usage:**
```tsx
<ReflectiveCard intensity={0.4} className="rounded-2xl">
  <div>Card content</div>
</ReflectiveCard>
```

### 3. **Pill Navigation** (in `components/Header.tsx`)
- Pill-shaped navigation buttons
- Active state indicator with smooth animation
- Glass morphism background
- Responsive design with mobile menu

**Features:**
- Active section detection on scroll
- Smooth pill indicator animation
- Glass effect background

### 4. **Fluid Glass** (`components/FluidGlass.tsx`)
- Advanced glassmorphism effect
- Dynamic background that responds to mouse movement
- Blur and opacity customization
- Used throughout the portfolio for cards and containers

**Usage:**
```tsx
<FluidGlass blur={20} opacity={0.1} className="rounded-xl p-6">
  <div>Content with fluid glass effect</div>
</FluidGlass>
```

## Implementation Details

All components are:
- ✅ Built with React and TypeScript
- ✅ Fully responsive
- ✅ Performance optimized
- ✅ Customizable via props
- ✅ Integrated with Framer Motion for smooth animations

## Where They're Used

- **True Focus**: Section headings (About, Experiences, Journey, Skills, Projects)
- **Reflective Cards**: Project cards, Skill cards, Journey milestone cards
- **Pill Nav**: Header navigation
- **Fluid Glass**: All cards, containers, and the header background

These components create a stunning, interactive, and engaging user experience that showcases your frontend development skills!
