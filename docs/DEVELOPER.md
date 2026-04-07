# Triple 7 Dubai — Developer Guide

> **👨‍💻 Complete Developer Documentation** - Comprehensive development guide for frontend and backend developers

## 📋 **Table of Contents**

1. [Getting Started](#-getting-started)
2. [Development Environment](#-development-environment)
3. [Project Structure](#-project-structure)
4. [Frontend Development](#-frontend-development)
5. [Backend Development](#-backend-development)
6. [Database Management](#-database-management)
7. [Testing](#-testing)
8. [Code Quality](#-code-quality)
9. [Deployment](#-deployment)
10. [Collaboration](#-collaboration)
11. [Troubleshooting](#-troubleshooting)
12. [Best Practices](#-best-practices)
13. [API Development](#-api-development)
14. [Security Implementation](#-security-implementation)
15. [Performance Optimization](#-performance-optimization)
16. [Monitoring & Logging](#-monitoring--logging)
17. [DevOps & CI/CD](#-devops--cicd)
18. [Database Optimization](#-database-optimization)
19. [Testing Strategies](#-testing-strategies)
20. [Code Architecture](#-code-architecture)

---

## 🚀 **Getting Started**

### � **Required Software**
```bash
# Required Software
node --version  # >= 18.0.0
npm --version     # >= 9.0.0
git --version      # >= 2.30.0
docker --version   # >= 20.10.0

# Database Requirements
postgresql --version  # >= 15.0
redis-server --version # >= 7.0.0

# Optional Tools
code --version      # VS Code
postman --version   # API Testing
dbeaver           # Database management
redis-desktop      # Redis management
docker            # Containerization
```

### 📋 **Environment Variables**
```bash
# Development Environment Variables
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://username:password@localhost:5432/triple7dubai
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
AWS_ACCESS_KEY=your-aws-access-key
AWS_SECRET_KEY=your-aws-secret-key
AWS_REGION=me-south-1
AWS_S3_BUCKET=triple7dubai-assets
```
```
```

### 📋 **Development Environment**
```bash
# Environment Variables
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://username:password@localhost:5432/triple7dubai
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
AWS_ACCESS_KEY=your-aws-access-key
AWS_SECRET_KEY=your-aws-secret-key
AWS_REGION=me-south-1
AWS_S3_BUCKET=triple7dubai-assets
```

### 🔧 **Environment Setup**
```bash
# Clone Repository
git clone https://github.com/your-org/triple7-dubai.git
cd triple7-dubai

# Frontend Setup
cd frontend
npm install
cp .env.example .env
npm run dev

# Backend Setup
cd backend
npm install
cp .env.example .env
npm run dev

# Database Setup
createdb triple7dubai
npm run db:migrate
npm run db:seed
```

### 🛠️ **Development Tools**
```json
{
  "frontend": {
    "devServer": "Vite",
    "browser": "Chrome DevTools",
    "reactDevTools": "React Developer Tools",
    "network": "Chrome Network Tab",
    "performance": "Lighthouse"
  },
  "backend": {
    "api": "Postman/Insomnia",
    "database": "DBeaver/pgAdmin",
    "caching": "Redis Desktop Manager",
    "monitoring": "Prometheus + Grafana"
  },
  "collaboration": {
    "git": "Git + GitHub Desktop",
    "communication": "Slack/Discord",
    "projectManagement": "Jira/Trello"
  }
}
```

### 📋 **IDE Configuration**
```json
// VS Code Settings (.vscode/settings.json)
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "files.associations": {
    "*.css": "tailwindcss",
    "*.tsx": "typescriptreact"
  }
}
```

### 📋 **VS Code Extensions**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-eslint",
    "ms-vscode.vscode-prettier",
    "ms-vscode.vscode-docker",
    "humao.rest-client",
    "ms-vscode.thunder-client"
  ]
}
```

### 📋 **Debugging Configuration**
```json
{
  "debug.allowBreakpointsEverywhere": true,
  "debug.inlineValues": "on",
  "debug.console": "integratedTerminal",
  "debug.node.autoAttach": "on",
  "debug.terminal.clearBeforeReusing": true
}
```

### IDE Setup
```json
// VS Code Extensions
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

---

## 🛠️ **Development Environment**

### 📁 **Required Software**
- **Node.js**: 18.x LTS
- **npm**: Latest stable
- **Git**: Version control
- **VS Code**: Primary IDE
- **Chrome**: Development browser
- **Postman**: API testing

### 🎯 **Development Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "dev:backend": "nodemon server.js",
    "build": "vite build",
    "build:backend": "tsc",
    "test": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "type-check": "tsc --noEmit",
    "db:migrate": "prisma migrate dev",
    "db:seed": "prisma db seed"
  }
}
```

### 🌍 **Environment Variables**
```bash
# .env.example
NODE_ENV=development
VITE_API_URL=http://localhost:3001
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_SENTRY_DSN=https://xxxx@sentry.io/xxxx
DATABASE_URL=postgresql://user:password@localhost:5432/triple7dubai
JWT_SECRET=your-super-secret-jwt-key
```

---

## 🏗️ **Project Structure**

```
triple7-dubai/
├── 📁 src/                     # Frontend source code
│   ├── 📦 components/          # Reusable UI components
│   │   ├── 🎨 ui/           # Base component library
│   │   ├── 🎪 HeroSection.tsx
│   │   ├── 📝 BookingSection.tsx
│   │   └── 📂 ...           # Feature components
│   ├── 📁 pages/              # Route components
│   ├── 🎣 hooks/              # Custom React hooks
│   ├── 📚 lib/               # Utility functions
│   ├── 📂 assets/             # Static assets
│   └── 🎨 styles/             # Global styles
├── 📁 server/                   # Backend source code (if applicable)
│   ├── 📋 controllers/        # Route handlers
│   ├── 🗃️ models/             # Data models
│   ├── 📂 services/           # Business logic
│   ├── 📚 utils/              # Helper functions
│   └── 📋 routes/             # API routes
├── 📁 database/                 # Database files
│   ├── 📋 migrations/         # Schema changes
│   ├── 📂 seeds/              # Initial data
│   └── 📋 schema.sql          # Database schema
├── 📁 tests/                    # Test files
│   ├── 📦 __tests__/          # Unit tests
│   ├── 🎪 e2e/               # End-to-end tests
│   └── 📊 fixtures/           # Test data
├── 📁 docs/                     # Documentation
│   ├── 📋 api/                # API docs
│   ├── 🎨 design/             # Design system docs
│   └── 👨‍💻 developer/         # Developer guides
├── 📁 public/                   # Static assets
│   ├── 🖼️ images/             # Optimized images
│   ├── 🎨 fonts/              # Font files
│   └── 📄 favicon.ico          # Site icons
├── 📋 package.json              # Dependencies and scripts
├── 📋 tsconfig.json            # TypeScript config
├── 📋 vite.config.ts           # Build tool config
├── 📋 tailwind.config.ts       # Styling config
├── 📋 eslint.config.js          # Linting config
└── 📋 playwright.config.ts       # E2E test config
```

---

## 🎨 **Frontend Development**

### 🛠️ **Tech Stack**
```typescript
// Frontend Dependencies
{
  "framework": "React 18.3.1",
  "language": "TypeScript 5.8.3",
  "bundler": "Vite 5.4.19",
  "styling": "Tailwind CSS 3.4.17",
  "ui": "Shadcn UI + Radix UI",
  "animations": "Framer Motion 12.38.0",
  "state": "React Query 5.83.0",
  "routing": "React Router DOM 6.30.1",
  "forms": "React Hook Form + Zod",
  "testing": "Vitest + React Testing Library + Playwright"
}
```

### 🎯 **Component Development**
```typescript
// Component Template
import { React, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-gradient-primary text-primary-foreground shadow-neon hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
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

### 🎨 **Custom Hooks**
```typescript
// useIsMobile Hook
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
```

### 🎭 **Styling Guidelines**
```css
/* Tailwind Custom Styles */
@layer components {
  .neon-glow {
    animation: neon-breathe 2s ease-in-out infinite;
    box-shadow: 0 0 20px hsl(var(--primary)/0.3);
  }
  
  .hero-parallax-img {
    transform: translateY(var(--scroll-y, 0px));
    will-change: transform;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .neon-glow,
    .hero-parallax-img {
      animation: none;
      transform: none;
    }
  }
}
```

---

## 🖥️ **Backend Development**

### 🛠️ **Tech Stack**
```typescript
// Backend Dependencies
{
  "runtime": "Node.js 18.x",
  "framework": "Express.js 4.18.2",
  "database": "PostgreSQL 15+",
  "orm": "Prisma 5.0+",
  "authentication": "JWT + bcrypt",
  "validation": "Zod",
  "testing": "Jest + Supertest",
  "documentation": "Swagger/OpenAPI"
}
```

### 🗃️ **Database Schema**
```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  guests INTEGER NOT NULL,
  package_type VARCHAR(50) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  special_requests TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events Table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 🔐 **Authentication System**
```typescript
// JWT Authentication
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  phone: z.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
});

class AuthService {
  async register(userData: RegisterDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
      ...userData,
      password: hashedPassword
    });
    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    
    return { user, token };
  }
  
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('Invalid credentials');
    
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) throw new Error('Invalid credentials');
    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );
    
    return { user, token };
  }
}
```

---

## 📡 **API Documentation**

### 🔗 **REST Endpoints**
```typescript
// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/auth/register', authController.register);
app.post('/api/auth/login', authController.login);
app.post('/api/auth/refresh', authController.refresh);

app.get('/api/bookings', bookingController.getAll);
app.post('/api/bookings', bookingController.create);
app.get('/api/bookings/:id', bookingController.getById);
app.put('/api/bookings/:id', bookingController.update);
app.delete('/api/bookings/:id', bookingController.delete);

app.get('/api/events', eventController.getAll);
app.post('/api/events', eventController.create);
```

### 📝 **API Response Format**
```typescript
// Standard Response Format
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

// Success Response
{
  "success": true,
  "data": { /* ... */ },
  "timestamp": "2024-01-15T10:30:00.000Z"
}

// Error Response
{
  "success": false,
  "error": "VALIDATION_ERROR",
  "message": "Invalid email format",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 🧪 **Testing Strategy**

### 📊 **Test Structure**
```
tests/
├── unit/                    # Unit tests
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── services/
├── integration/             # Integration tests
│   ├── api/
│   └── database/
├── e2e/                    # End-to-end tests
│   ├── booking-flow.spec.ts
│   ├── auth-flow.spec.ts
│   └── navigation.spec.ts
└── fixtures/               # Test data
    ├── users.json
    ├── bookings.json
    └── events.json
```

### 🧪 **Unit Testing**
```typescript
// Component Test Example
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    render(<Button variant="neon">Neon Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-gradient-primary');
  });
});
```

### 🎪 **E2E Testing**
```typescript
// E2E Test Example
import { test, expect } from '@playwright/test';

test('booking flow', async ({ page }) => {
  await page.goto('/');
  
  // Navigate to booking section
  await page.click('text=Book a Table');
  
  // Fill booking form
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

## 🚀 **Deployment**

### 🌐 **Environment Configuration**
```bash
# Production Environment
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/triple7dubai
JWT_SECRET=your-production-jwt-secret
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=https://xxxx@sentry.io/xxxx
```

### 📦 **Build Process**
```bash
# Frontend Build
npm run build

# Backend Build
npm run build:backend

# Database Migrations
npm run db:migrate:prod

# Seed Production Data
npm run db:seed:prod
```

### 🐳 **Docker Setup**
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/triple7dubai
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=triple7dubai
      - POSTGRES_USER=triple7
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
```

---

## 🔧 **Troubleshooting**

### 🐛 **Common Issues**

#### **Build Errors**
```bash
# TypeScript compilation error
npm run type-check

# ESLint errors
npm run lint

# Fix ESLint errors
npm run lint:fix
```

#### **Development Issues**
```bash
# Clear cache
rm -rf node_modules/.vite

# Reinstall dependencies
npm install

# Check port conflicts
netstat -tulpn | grep :3001
```

#### **Database Issues**
```bash
# Reset database
npm run db:reset

# Run migrations
npm run db:migrate

# Check database connection
npm run db:check
```

### 📞 **Performance Issues**
```bash
# Bundle analysis
npm run build:analyze

# Lighthouse audit
npm run lighthouse

# Memory profiling
npm run dev:profile
```

---

## 📞 **Best Practices**

### 🎯 **Code Quality**
- **TypeScript**: Use strict mode, avoid `any`
- **ESLint**: Follow all rules, fix warnings
- **Testing**: Write tests for all new features
- **Documentation**: Comment complex logic
- **Git**: Use conventional commits

### 🎨 **Performance**
- **Lazy Loading**: Use `React.lazy()` for code splitting
- **Memoization**: Use `React.memo()` for expensive components
- **Images**: Optimize with WebP, lazy loading
- **Bundle**: Keep under 100KB gzipped

### 🔐 **Security**
- **Validation**: Always validate user input
- **Authentication**: Use JWT with secure secrets
- **Environment**: Never commit secrets to Git
- **Dependencies**: Regularly update and audit

---

## 📚 **Additional Resources**

### 📖 **Documentation**
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma Documentation](https://www.prisma.io/docs/)

### 🛠️ **Tools**
- [VS Code Extensions](./docs/vscode-extensions.md)
- [Browser Extensions](./docs/browser-extensions.md)
- [API Testing](./docs/api-testing-tools.md)
- [Performance Tools](./docs/performance-tools.md)

---

*This developer guide provides comprehensive documentation for building, testing, and deploying the Triple 7 Dubai platform. Follow these guidelines to ensure code quality, performance, and maintainability.*
