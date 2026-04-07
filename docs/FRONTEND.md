# Triple 7 Dubai — Frontend Development Guide

> **👨‍💻 Complete Frontend Documentation** - Comprehensive frontend development and engineering guide

## 📋 **Table of Contents**

1. [Frontend Architecture](#-frontend-architecture)
2. [Technology Stack](#-technology-stack)
3. [Development Setup](#-development-setup)
4. [Component Development](#-component-development)
5. [State Management](#-state-management)
6. [Performance Optimization](#-performance-optimization)
7. [Testing Strategy](#-testing-strategy)
8. [Build & Deployment](#-build--deployment)
9. [Code Quality](#-code-quality)
10. [Security Best Practices](#-security-best-practices)
11. [Frontend Tools](#-frontend-tools)
12. [Troubleshooting](#-troubleshooting)

---

## 🏗️ **Frontend Architecture**

### 📦 **Project Structure**
```
src/
├── 📦 components/              # Reusable UI components
│   ├── 🎨 ui/               # Base component library (51 components)
│   ├── 🎪 HeroSection.tsx     # Landing hero with animations
│   ├── 📝 BookingSection.tsx  # Reservation system
│   ├── 🎨 GallerySection.tsx   # Image gallery with filtering
│   ├── 📋 MenuSection.tsx      # Food & drink menu
│   ├── 🎭 EventsSection.tsx    # Weekly entertainment schedule
│   ├── 📊 ReviewsSection.tsx   # Customer testimonials
│   ├── 📍 LocationSection.tsx  # Map and directions
│   ├── 📋 FAQSection.tsx       # Expandable knowledge base
│   ├── 📄 Footer.tsx          # Site footer
│   ├── 📱 WhatsAppButton.tsx   # Quick contact button
│   └── 📱 MobileBottomBar.tsx # Mobile navigation
├── 📁 pages/                 # Route-level components
│   ├── 📄 Index.tsx          # Main landing page
│   └── 📄 NotFound.tsx       # 404 error page
├── 🎣 hooks/                 # Custom React hooks
│   ├── 📱 use-mobile.tsx      # Mobile detection hook
│   └── 🎣 use-toast.ts         # Toast notification hook
├── 📚 lib/                  # Utility functions
│   ├── 🔧 utils.ts             # Helper functions
│   └── 🎨 cn.ts               # Class name utility
├── 🎨 styles/                # Global styles
│   └── 📄 index.css           # Main stylesheet
├── 📂 assets/                # Static resources
│   ├── 🖼️ images/             # Optimized images
│   └── 🎨 fonts/              # Font files
└── 🎯 types/                 # TypeScript definitions
```

### 🎯 **Component Architecture**
```typescript
// Component Structure Pattern
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("base-class", className)} {...props}>
        {children}
      </div>
    );
  }
);

Component.displayName = "Component";
```

---

## 🛠️ **Technology Stack**

### 📦 **Core Technologies**
```typescript
// Frontend Dependencies
const techStack = {
  framework: {
    name: "React",
    version: "18.3.1",
    features: ["Hooks", "Context", "Suspense", "Concurrent Mode"]
  },
  language: {
    name: "TypeScript",
    version: "5.8.3",
    strict: true,
    features: ["Type Inference", "Generics", "Decorators"]
  },
  bundler: {
    name: "Vite",
    version: "5.4.19",
    features: ["HMR", "Tree Shaking", "Code Splitting"]
  },
  styling: {
    name: "Tailwind CSS",
    version: "3.4.17",
    features: ["Utility-First", "Responsive Design", "Dark Mode"]
  },
  ui: {
    library: "Shadcn UI",
    primitives: "Radix UI",
    components: 51
  },
  animations: {
    library: "Framer Motion",
    version: "12.38.0",
    features: ["Layout Animations", "Gestures", "Drag"]
  },
  state: {
    library: "React Query",
    version: "5.83.0",
    features: ["Server State", "Caching", "Background Refetch"]
  },
  routing: {
    library: "React Router DOM",
    version: "6.30.1",
    features: ["Dynamic Routes", "Nested Routes", "Route Guards"]
  },
  forms: {
    library: "React Hook Form",
    validation: "Zod",
    features: ["Schema Validation", "Type Safety"]
  }
};
```

### 🎨 **UI Component Library**
```typescript
// Shadcn UI Components
const uiComponents = {
  // Layout Components
  Card: "Container with consistent styling",
  Container: "Responsive container with max-width",
  Separator: "Visual divider between sections",
  
  // Form Components
  Button: "Interactive button with variants",
  Input: "Form input with validation",
  Label: "Accessible form label",
  Textarea: "Multi-line text input",
  Select: "Dropdown selection component",
  Checkbox: "Toggle selection component",
  Radio: "Single selection component",
  
  // Navigation Components
  NavigationMenu: "Responsive navigation menu",
  Breadcrumb: "Navigation trail component",
  Tabs: "Tabbed interface component",
  Pagination: "Page navigation component",
  
  // Feedback Components
  Toast: "Notification system",
  Alert: "Warning and error messages",
  Dialog: "Modal overlay system",
  Tooltip: "Contextual help text",
  
  // Data Display
  Table: "Structured data display",
  Badge: "Status indicator component",
  Avatar: "User profile image component",
  Skeleton: "Loading placeholder component"
};
```

---

## 🔧 **Development Setup**

### 📋 **Prerequisites**
```bash
# Required Software
node --version  # >= 18.0.0
npm --version     # >= 9.0.0
git --version      # >= 2.30.0

# Recommended VS Code Extensions
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-json
```

### 🚀 **Project Initialization**
```bash
# Clone Repository
git clone https://github.com/your-org/triple7-dubai.git
cd triple7-dubai

# Install Dependencies
npm install

# Environment Setup
cp .env.example .env
# Edit .env with your configuration

# Start Development
npm run dev
```

### 📝 **Development Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:e2e": "playwright test",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,css,md,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,css,md,json}\""
  }
}
```

---

## 🧩 **Component Development**

### 🎯 **Component Development Guidelines**
```typescript
// Component Development Pattern
interface ComponentDevelopment {
  structure: {
    imports: "Import React and dependencies first",
    props: "Define props interface with TypeScript",
    component: "Use React.forwardRef for ref forwarding",
    displayName: "Set displayName for debugging",
    exports: "Default export with proper typing"
  },
  
  styling: {
    tailwind: "Use Tailwind utility classes",
    variants: "Use class-variance-authority for variants",
    responsive: "Mobile-first responsive design",
    darkMode: "Support dark/light theme switching"
  },
  
  accessibility: {
    semantic: "Use semantic HTML elements",
    aria: "Include proper ARIA attributes",
    keyboard: "Ensure keyboard navigation",
    focus: "Manage focus states properly"
  },
  
  performance: {
    memo: "Use React.memo for expensive components",
    callback: "Use useCallback for expensive functions",
    lazy: "Use React.lazy for code splitting"
  }
};
```

### 🎨 **Component Template**
```typescript
// Reusable Component Template
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: "default" | "neon" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        neon: "bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8"
      }
    }
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

---

## 🎣 **State Management**

### 🔄 **React Query Configuration**
```typescript
// React Query Setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    },
    mutations: {
      retry: 1,
      onError: (error) => {
        console.error('Mutation error:', error);
        // Show toast notification
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    }
  }
});

// App Wrapper
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  </QueryClientProvider>
);
```

### 🎯 **Custom Hooks**
```typescript
// Mobile Detection Hook
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

// Toast Hook
import { useState, useCallback } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, description, variant = "default" }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, title, description, variant };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toast, dismiss, toasts };
}
```

---

## ⚡ **Performance Optimization**

### 📊 **Performance Targets**
```typescript
// Performance Goals
const performanceTargets = {
  bundleSize: {
    total: "Under 100KB gzipped",
    javascript: "Under 60KB gzipped",
    css: "Under 40KB gzipped"
  },
  loadTime: {
    firstContentfulPaint: "< 1.8s",
    largestContentfulPaint: "< 2.5s",
    firstInputDelay: "< 100ms",
    cumulativeLayoutShift: "< 0.1"
  },
  runtime: {
    javascriptExecution: "Optimize for 60fps",
    memoryUsage: "Minimize memory allocations",
    rendering: "Avoid unnecessary re-renders"
  }
};
```

### 🚀 **Optimization Techniques**
```typescript
// Code Splitting
const LazyComponent = React.lazy(() => import('./Component'));

// Image Optimization
const OptimizedImage = ({ src, alt, ...props }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    width={1920}
    height={1080}
    {...props}
  />
);

// Bundle Analysis
const bundleAnalysis = {
  vendorChunking: "Separate vendor dependencies",
  routeBasedSplitting: "Split by route",
  treeShaking: "Remove unused code",
  minification: "Production minification",
  compression: "Gzip compression"
};
```

---

## 🧪 **Testing Strategy**

### 📊 **Testing Architecture**
```typescript
// Testing Configuration
const testingConfig = {
  unit: {
    framework: "Vitest",
    library: "React Testing Library",
    coverage: {
      statements: 90,
      branches: 85,
      functions: 90,
      lines: 90
    }
  },
  integration: {
    framework: "React Testing Library",
    mocking: "MSW (Mock Service Worker)",
    scenarios: "User flows and component interactions"
  },
  e2e: {
    framework: "Playwright",
    browsers: ["Chromium", "Firefox", "WebKit"],
    devices: ["Desktop", "Mobile", "Tablet"],
    scenarios: "Critical user journeys"
  },
  visual: {
    framework: "Chromatic",
    components: "All UI components",
    scenarios: "Visual regression testing"
  }
};
```

### 🧪 **Test Examples**
```typescript
// Unit Test Example
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes', () => {
    render(<Button variant="neon">Neon Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-primary');
  });
});

// E2E Test Example
import { test, expect } from '@playwright/test';

test('booking flow', async ({ page }) => {
  await page.goto('/');
  
  // Navigate to booking
  await page.click('text=Book a Table');
  
  // Fill form
  await page.fill('[data-testid="date-input"]', '2024-01-15');
  await page.fill('[data-testid="name-input"]', 'John Doe');
  await page.fill('[data-testid="whatsapp-input"]', '+971544484000');
  
  // Submit form
  await page.click('[data-testid="submit-button"]');
  
  // Verify WhatsApp redirect
  await expect(page).toHaveURL(/wa\.me\/971544484000/);
});
```

---

## 🚀 **Build & Deployment**

### 📦 **Build Configuration**
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    minify: mode === 'production',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-*'],
          router: ['react-router-dom']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}));
```

### 🚀 **Build Process**
```bash
# Development Build
npm run dev

# Production Build
npm run build

# Build Analysis
npm run build:analyze

# Preview Production Build
npm run preview

# Type Checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

---

## 🔍 **Code Quality**

### 📋 **TypeScript Configuration**
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 🔍 **ESLint Configuration**
```javascript
// eslint.config.js
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import react from '@eslint/jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist', 'node_modules', '.eslintrc.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescript.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint',
      'react-hooks',
      'react',
      'react/jsx-a11y',
      'jsx-a11y',
    },
    rules: {
      // TypeScript Rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error',
      
      // React Rules
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-react-props': 'error',
      'react/jsx-uses-react-props-default-props': 'error',
      
      // Accessibility Rules
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
```

---

## 🔐 **Security Best Practices**

### 🛡️ **Frontend Security**
```typescript
// Security Guidelines
const securityGuidelines = {
  inputValidation: {
    clientSide: "Validate all user inputs",
    sanitization: "Sanitize user-generated content",
    xssPrevention: "Use textContent, avoid innerHTML"
  },
  
  authentication: {
    tokenManagement: "Store tokens securely",
    httpOnly: "Use HttpOnly cookies",
    csrfProtection: "Implement CSRF tokens"
  },
  
  dataProtection: {
    sensitiveData: "Never expose sensitive data",
    apiKeys: "Keep API keys server-side",
    userPrivacy: "Follow GDPR compliance"
  },
  
  contentSecurity: {
    csp: "Implement Content Security Policy",
    https: "Enforce HTTPS everywhere",
    headers: "Set security headers"
  }
};
```

### 🔒 **Content Security Policy**
```javascript
// CSP Implementation
const cspDirectives = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'"],
  "style-src": ["'self'", "'unsafe-inline'"],
  "img-src": ["'self'", "data:", "https:"],
  "font-src": ["'self'", "https:"],
  "connect-src": ["'self'", "https://api.triple7dubai.com"],
  "frame-ancestors": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-src": ["'none'"],
  "object-src": ["'none'"],
  "report-uri": ["'self'"]
};

// CSP Header
const cspHeader = Object.entries(cspDirectives)
  .map(([key, value]) => `${key} ${value.join(' ')}`)
  .join('; ');
```

---

## 🛠️ **Frontend Tools**

### 📚 **Development Tools**
```json
{
  "ide": {
    "name": "Visual Studio Code",
    "extensions": [
      "ms-vscode.vscode-typescript-next",
      "bradlc.vscode-tailwindcss",
      "esbenp.prettier-vscode",
      "ms-vscode.vscode-json",
      "formulahendry.auto-rename-tag",
      "christian-kohler.path-intellisense"
    ]
  },
  
  "packageManager": {
    "name": "npm",
    "version": "9.0.0",
    "features": ["Workspaces", "Scripts", "Dependencies"]
  },
  
  "browser": {
    "name": "Chrome",
    "devTools": ["React Developer Tools", "Redux DevTools", "Lighthouse"]
  },
  
  "testing": {
    "unit": "Vitest + React Testing Library",
    "e2e": "Playwright",
    "visual": "Chromatic",
    "coverage": "Vitest Coverage"
  }
}
```

### 🔧 **Build Tools**
```json
{
  "bundler": {
    "name": "Vite",
    "features": ["HMR", "Tree Shaking", "Code Splitting"],
    "plugins": ["@vitejs/plugin-react"]
  },
  
  "transpiler": {
    "name": "SWC",
    "features": ["Fast compilation", "Modern JavaScript"]
  },
  
  "optimizer": {
    "name": "Terser",
    "features": ["Minification", "Code optimization"]
  },
  
  "cssProcessor": {
    "name": "PostCSS",
    "plugins": ["tailwindcss", "autoprefixer"]
  }
}
```

---

## 🔧 **Troubleshooting**

### 🐛 **Common Issues & Solutions**
```typescript
// Troubleshooting Guide
const troubleshooting = {
  build: {
    typescriptErrors: "Check tsconfig.json and imports",
    bundlerErrors: "Check vite.config.js and dependencies",
    assetErrors: "Verify file paths and optimization"
  },
  
  runtime: {
    hydrationErrors: "Check server/client data mismatch",
    memoryLeaks: "Monitor memory usage and cleanup",
    performanceIssues: "Profile and optimize expensive operations"
  },
  
  development: {
    hotReloadIssues: "Check HMR configuration",
    moduleResolution: "Verify import paths and aliases",
    eslintErrors: "Check configuration and dependencies"
  },
  
  testing: {
    flakyTests: "Add proper waits and mocks",
    coverageGaps: "Review test coverage and add missing tests",
    e2eFailures: "Check selectors and timing issues"
  }
};
```

### 📊 **Performance Monitoring**
```typescript
// Performance Monitoring Setup
const performanceMonitoring = {
  webVitals: {
    implementation: "web-vitals library",
    metrics: ["LCP", "FID", "CLS", "FCP", "TTFB", "TTI"],
    reporting: "Send to analytics dashboard"
  },
  
  bundleAnalysis: {
    tools: ["webpack-bundle-analyzer", "rollup-plugin-visualizer"],
    frequency: "Run on every build",
    thresholds: {
      totalSize: "100KB",
      chunkSize: "50KB"
    }
  },
  
  runtimePerformance: {
    profiling: "React DevTools Profiler",
    memoryMonitoring: "Chrome DevTools Memory tab",
    frameRate: "Chrome DevTools Rendering tab"
  }
};
```

---

## 📚 **Learning Resources**

### 📖 **Frontend Documentation**
```typescript
// Learning Resources
const learningResources = {
  react: {
    official: ["https://react.dev", "https://reactjs.org/docs"],
    tutorials: ["React Tutorial", "React Patterns"],
    bestPractices: ["React Best Practices", "React Performance"]
  },
  
  typescript: {
    official: ["https://www.typescriptlang.org/docs/"],
    handbook: ["TypeScript Handbook"],
    deepDive: ["TypeScript Deep Dive", "Advanced TypeScript"]
  },
  
  styling: {
    tailwind: ["https://tailwindcss.com/docs"],
    css: ["MDN Web Docs", "CSS Tricks"],
    designSystems: ["Design Systems for FEDs", "CSS Custom Properties"]
  },
  
  testing: {
    testingLibrary: ["Testing Library Docs", "Testing Playground"],
    playwright: ["Playwright Docs", "Playwright Testing Guide"],
    vitest: ["Vitest Docs", "Vitest Guide"]
  },
  
  performance: {
    webVitals: ["Web Vitals", "Core Web Vitals Guide"],
    optimization: ["Web Performance Optimization Guide", "Image Optimization"],
    tools: ["Lighthouse", "Bundle Analyzer", "Chrome DevTools"]
  }
};
```

---

## 🎯 **Best Practices**

### 📋 **Development Workflow**
```typescript
// Development Best Practices
const bestPractices = {
  code: {
    typescript: "Use strict TypeScript for type safety",
    eslint: "Follow ESLint rules and fix warnings",
    prettier: "Format code consistently with Prettier",
    git: "Use conventional commits and proper branching"
  },
  
  components: {
    composition: "Compose small, reusable components",
    props: "Use TypeScript interfaces for props",
    testing: "Write tests for all components",
    documentation: "Document component props and usage"
  },
  
  performance: {
    optimization: "Optimize images, bundle size, and runtime",
    monitoring: "Monitor Core Web Vitals and performance metrics",
    lazy: "Use code splitting and lazy loading appropriately"
  },
  
  accessibility: {
    semantic: "Use semantic HTML elements",
    aria: "Include proper ARIA attributes",
    keyboard: "Ensure keyboard navigation",
    testing: "Test with screen readers and accessibility tools"
  },
  
  security: {
    validation: "Validate all inputs and sanitize outputs",
    dependencies: "Keep dependencies updated and scan for vulnerabilities",
    https: "Use HTTPS and implement security headers"
  }
};
```

---

## 📊 **Metrics & Monitoring**

### 📈 **Performance Metrics**
```typescript
// Performance Metrics Dashboard
const performanceMetrics = {
  build: {
    bundleSize: "Total bundle size in KB",
    chunkCount: "Number of chunks created",
    buildTime: "Build duration in seconds",
    assetOptimization: "Image and asset optimization score"
  },
  
  runtime: {
    firstContentfulPaint: "FCP in milliseconds",
    largestContentfulPaint: "LCP in milliseconds",
    firstInputDelay: "FID in milliseconds",
    cumulativeLayoutShift: "CLS score",
    timeToInteractive: "TTI in milliseconds"
  },
  
  quality: {
    testCoverage: "Percentage of code covered by tests",
    eslintWarnings: "Number of ESLint warnings",
    typescriptErrors: "Number of TypeScript errors",
    accessibilityScore: "WCAG compliance score"
  },
  
  user: {
    pageLoadTime: "Average page load time",
    bounceRate: "Percentage of single-page sessions",
    sessionDuration: "Average session duration in minutes",
    conversionRate: "Percentage of successful conversions"
  }
};
```

---

## 🚀 **Deployment Checklist**

### ✅ **Pre-Deployment Checklist**
```typescript
// Deployment Checklist
const deploymentChecklist = {
  code: {
    typescript: "No TypeScript errors",
    eslint: "No ESLint warnings",
    tests: "All tests passing",
    build: "Production build successful"
  },
  
  performance: {
    bundleSize: "Under 100KB gzipped",
    lighthouse: "Lighthouse score > 90",
    webVitals: "All Core Web Vitals green"
  },
  
  security: {
    dependencies: "No known vulnerabilities",
    envVars: "Environment variables configured",
    https: "HTTPS properly configured"
  },
  
  functionality: {
    navigation: "All routes working",
    forms: "Form submissions working",
    responsive: "Mobile responsive design",
    accessibility: "WCAG 2.1 AA compliant"
  }
};
```

---

## 📚 **Resources & References**

### 📖 **Documentation**
```typescript
// Documentation Resources
const documentation = {
  react: ["https://react.dev", "https://reactjs.org/docs"],
  typescript: ["https://www.typescriptlang.org/docs/"],
  tailwind: ["https://tailwindcss.com/docs"],
  vite: ["https://vitejs.dev/guide/"],
  playwright: ["https://playwright.dev/"],
  vitest: ["https://vitest.dev/guide/"],
  shadcn: ["https://ui.shadcn.com/"],
  framerMotion: ["https://www.framer.com/motion/"]
};
```

### 🛠️ **Tools & Libraries**
```typescript
// Essential Tools
const tools = {
  development: ["VS Code", "Chrome DevTools", "React Developer Tools"],
  testing: ["Vitest", "Playwright", "React Testing Library"],
  design: ["Figma", "Chrome DevTools", "Color Contrast Checker"],
  performance: ["Lighthouse", "Bundle Analyzer", "WebPageTest"],
  monitoring: ["Sentry", "Google Analytics", "Hotjar"]
};
```

---

## 🎯 **Success Metrics**

### 📈 **Frontend KPIs**
```typescript
// Key Performance Indicators
const kpis = {
  performance: {
    bundleSize: "< 100KB gzipped",
    lighthouseScore: "> 90",
    webVitals: "All green",
    buildTime: "< 30 seconds"
  },
  
  quality: {
    testCoverage: "> 80%",
    eslintWarnings: "< 5",
    typescriptErrors: "0",
    accessibilityScore: "WCAG 2.1 AA compliant"
  },
  
  user: {
    pageLoadTime: "< 2 seconds",
    bounceRate: "< 40%",
    sessionDuration: "> 3 minutes",
    conversionRate: "> 5%"
  },
  
  development: {
    buildSuccess: "100%",
    deploymentSuccess: "100%",
    rollbackTime: "< 5 minutes",
    uptime: "> 99.9%"
  }
};
```

---

*This comprehensive frontend development guide provides actionable strategies, patterns, and best practices for building high-performance, accessible, and maintainable React applications with modern tooling and workflows.*
