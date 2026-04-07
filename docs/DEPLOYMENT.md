# Triple 7 Dubai — Deployment Guide

> **🚀 Complete Deployment Documentation** - Production deployment and infrastructure guide

## 📋 **Table of Contents**

1. [Environment Setup](#-environment-setup)
2. [Build Process](#-build-process)
3. [Deployment Platforms](#-deployment-platforms)
4. [Configuration Management](#-configuration-management)
5. [Monitoring & Logging](#-monitoring--logging)
6. [Security & SSL](#-security--ssl)
7. [Performance Optimization](#-performance-optimization)
8. [Backup & Recovery](#-backup--recovery)
9. [Troubleshooting](#-troubleshooting)
10. [Maintenance](#-maintenance)

---

## 🌍 **Environment Setup**

### 🔧 **Required Environment Variables**
```bash
# .env.example
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://username:password@host:5432/triple7dubai
JWT_SECRET=your-super-secret-jwt-key-at-least-32-characters-long
STRIPE_SECRET_KEY=sk_live_your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXXXXXXXX
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
VITE_API_URL=https://api.triple7dubai.com
VITE_STRIPE_PUBLIC_KEY=pk_live_your-stripe-public-key
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXXXXXXXX
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### 🏗️ **Infrastructure Requirements**
```yaml
# Minimum Server Specifications
server:
  cpu: 2 cores
  memory: 4GB RAM
  storage: 50GB SSD
  network: 100Mbps bandwidth
  os: Ubuntu 20.04 LTS or CentOS 8

# Database Requirements
database:
  type: PostgreSQL 15+
  memory: 2GB RAM
  storage: 20GB SSD
  backup: Automated daily
  replication: Read replica for failover
```

---

## 🔨 **Build Process**

### 📦 **Frontend Build**
```bash
# Development Build
npm run dev

# Production Build
npm run build

# Build Analysis
npm run build:analyze

# Preview Production Build
npm run preview
```

### 🖥️ **Backend Build**
```bash
# TypeScript Compilation
npm run build:backend

# Run Database Migrations
npm run db:migrate:prod

# Seed Production Data
npm run db:seed:prod

# Start Production Server
npm run start
```

### 📊 **Build Output**
```
dist/
├── index.html                 # Main HTML file
├── assets/
│   ├── index-J24V6-YV.js   # Optimized JavaScript bundle
│   ├── index-DtfXfnsU.css   # Optimized CSS bundle
│   ├── hero-bg-C127tAhG.jpg  # Optimized images
│   ├── logo-DRqGp_nm.png
│   └── ...                   # All static assets
└── manifest.json              # PWA manifest (if applicable)
```

---

## 🚀 **Deployment Platforms**

### 🌐 **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod

# Environment Variables in Vercel Dashboard
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=...
STRIPE_SECRET_KEY=...
```

### 🔥 **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Redirects Configuration
# _redirects file
/triple7-old/* https://triple7dubai.com/:splat 301
```

### 🐳 **Docker Deployment**
```dockerfile
# Multi-stage Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3001
CMD ["node", "server.js"]
```

```yaml
# Docker Compose
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - db
      - redis
  
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=triple7dubai
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
```

### ☁️ **AWS Deployment**
```yaml
# AWS ECS Task Definition
apiVersion: ecs/v1
metadata:
  name: triple7-dubai-app
spec:
  cpu: 256
  memory: 512
  networkMode: awsvpc
  requiresCompatibilities:
    - FARGATE
  executionRoleArn: arn:aws:iam::account:role/ecs-task-execution-role
  taskRoleArn: arn:aws:iam::account:role/ecs-task-role
  containerDefinitions:
    - name: triple7-app
      image: your-account.dkr.ecr.amazonaws.com/triple7-app:latest
      portMappings:
        - containerPort: 3001
          hostPort: 80
      environment:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef: triple7-db-url
```

---

## 🔧 **Configuration Management**

### 📝 **Environment-Specific Configs**
```javascript
// vite.config.ts
export default defineConfig(({ mode }) => ({
  server: {
    host: mode === 'development' ? 'localhost' : '0.0.0.0',
    port: 3001,
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
        },
      },
    },
  },
}));
```

### 🗃️ **Database Configuration**
```typescript
// prisma/schema.prisma
generator client {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Migration Scripts
{
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate deploy",
    "db:migrate:dev": "prisma migrate dev",
    "db:migrate:prod": "prisma migrate deploy",
    "db:seed": "prisma db seed",
    "db:seed:prod": "prisma db seed --preview-feature",
    "db:studio": "prisma studio",
    "db:reset": "prisma migrate reset --force"
  }
}
```

---

## 📊 **Monitoring & Logging**

### 📈 **Performance Monitoring**
```typescript
// Web Vitals Setup
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.value),
    custom_map: {
      metric_id: metric.id,
    }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 🛡️ **Error Tracking**
```typescript
// Sentry Configuration
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay({
      sessionSampleRate: 0.1,
    }),
  ],
});

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### 📋 **Application Logging**
```typescript
// Winston Logging Configuration
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'triple7-dubai' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'info' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ],
});

export default logger;
```

---

## 🔐 **Security & SSL**

### 🛡️ **Security Headers**
```nginx
# Nginx Configuration
server {
    listen 443 ssl http2;
    server_name triple7dubai.com www.triple7dubai.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/triple7dubai.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/triple7dubai.com/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/triple7dubai.com/chain.pem;
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
    
    # Rate Limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    
    location / {
        root /var/www/triple7dubai;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### 🔒 **SSL Certificate Management**
```bash
# Let's Encrypt Setup
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d triple7dubai.com -d www.triple7dubai.com

# Auto-renewal
sudo crontab -e
0 12 * * /usr/bin/certbot renew --quiet --nginx
```

---

## ⚡ **Performance Optimization**

### 📦 **Frontend Optimization**
```javascript
// Service Worker for Caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('triple7-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/static/js/bundle.js',
        '/static/css/styles.css',
        '/images/hero-bg.webp',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### 🗄️ **Image Optimization**
```bash
# Image Optimization Pipeline
npm install --save-dev imagemin sharp

# Optimize images script
node scripts/optimize-images.js
```

```javascript
// scripts/optimize-images.js
const imagemin = require('imagemin');
const sharp = require('sharp');

const optimizeImages = async () => {
  await imagemin(['src/assets/images/**/*.{jpg,png}'], {
    plugins: [
      imagemin.mozjpeg({ quality: 80 }),
      imagemin.optipng({ optimizationLevel: 7 }),
    ],
  }).then((result) => {
    console.log('Images optimized:', result);
  });
};

optimizeImages();
```

### 🚀 **Bundle Optimization**
```javascript
// vite.config.ts optimizations
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-*', 'framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
```

---

## 💾 **Backup & Recovery**

### 📋 **Database Backup Strategy**
```bash
# Automated Backups
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/triple7dubai/$DATE"

# Create database backup
pg_dump $DATABASE_URL > $BACKUP_DIR/database.sql

# Compress backup
tar -czf $BACKUP_DIR.tar.gz $BACKUP_DIR/

# Upload to cloud storage (AWS S3 example)
aws s3 cp $BACKUP_DIR.tar.gz s3://triple7-backups/

# Clean old backups (keep last 30 days)
find /backups/triple7dubai -type d -mtime +30 -exec rm -rf {} \;

echo "Backup completed: $BACKUP_DIR.tar.gz"
```

### 🔄 **Application Backup**
```bash
# Code and Assets Backup
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="/backups/application_$DATE.tar.gz"

# Create application backup
tar -czf $BACKUP_FILE \
  --exclude=node_modules \
  --exclude=dist \
  --exclude=.git \
  .

echo "Application backup: $BACKUP_FILE"
```

### 🚨 **Disaster Recovery**
```bash
# Recovery Script
#!/bin/bash
BACKUP_DATE=$1
RESTORE_DIR="/tmp/triple7-restore_$BACKUP_DATE"

# Extract backup
tar -xzf "/backups/application_$BACKUP_DATE.tar.gz" -C $RESTORE_DIR

# Restore database
psql $DATABASE_URL < "/backups/triple7dubai/$BACKUP_DATE/database.sql"

# Rebuild application
cd $RESTORE_DIR
npm install
npm run build

echo "Recovery completed for backup: $BACKUP_DATE"
```

---

## 🔧 **Troubleshooting**

### 🐛 **Common Deployment Issues**

#### **Build Failures**
```bash
# Clear build cache
rm -rf node_modules/.vite
rm -rf dist

# Reinstall dependencies
npm ci

# Check Node.js version
node --version
npm --version
```

#### **Database Connection Issues**
```bash
# Test database connection
psql $DATABASE_URL -c "SELECT 1;"

# Check database logs
docker logs triple7-db

# Restart database service
docker-compose restart db
```

#### **Performance Issues**
```bash
# Analyze bundle size
npm run build:analyze

# Check memory usage
node --inspect scripts/memory-usage.js

# Profile CPU usage
node --prof scripts/cpu-usage.js
```

### 📞 **Error Monitoring**
```bash
# Check application logs
docker logs triple7-app

# Check error rates
grep "ERROR" /var/log/triple7dubai/app.log | wc -l

# Monitor response times
curl -w "@{time_total}" -o /dev/null https://triple7dubai.com/api/health
```

---

## 🔄 **Maintenance**

### 📅 **Regular Maintenance Tasks**
```bash
#!/bin/bash
# Weekly maintenance script

echo "Starting weekly maintenance..."

# Update dependencies
npm update
npm audit fix

# Clean up old logs
find /var/log/triple7dubai -name "*.log" -mtime +7 -delete

# Database maintenance
npm run db:vacuum
npm run db:analyze

# SSL certificate check
openssl x509 -in /etc/letsencrypt/live/triple7dubai.com/cert.pem -noout -dates

echo "Weekly maintenance completed"
```

### 📊 **Health Checks**
```bash
# Health check script
#!/bin/bash

# Check application health
curl -f http://localhost:3001/api/health

# Check database health
pg_isready -h localhost -p 5432

# Check SSL certificate
openssl x509 -checkhost triple7dubai.com -in /etc/letsencrypt/live/triple7dubai.com/cert.pem

# Check disk space
df -h

echo "Health check completed"
```

---

## 🚀 **CI/CD Pipeline**

### 🔄 **GitHub Actions Workflow**
```yaml
# .github/workflows/deploy.yml
name: Deploy Triple 7 Dubai

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm run test
      - name: Run E2E tests
        run: npm run test:e2e
      - name: Build application
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Deploy to production
        run: |
          # Add deployment commands here
          echo "Deploying to production..."
```

---

## 📚 **Additional Resources**

### 📖 **Documentation**
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Docker Best Practices](https://docs.docker.com/)
- [PostgreSQL Performance](https://www.postgresql.org/docs/)
- [Nginx Configuration](https://nginx.org/en/docs/)

### 🛠️ **Tools & Services**
- **Monitoring**: Sentry, UptimeRobot, DataDog
- **Analytics**: Google Analytics 4, Hotjar
- **Performance**: Lighthouse, WebPageTest
- **Security**: OWASP ZAP, SSL Labs

---

*This deployment guide provides comprehensive instructions for deploying, monitoring, and maintaining the Triple 7 Dubai platform in production environments.*
