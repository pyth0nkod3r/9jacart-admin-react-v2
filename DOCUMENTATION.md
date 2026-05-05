# AdminHub Dashboard - Comprehensive Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Features Overview](#features-overview)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
   - [Theme Configuration](#theme-configuration)
   - [Branding Configuration](#branding-configuration)
   - [Environment Variables](#environment-variables)
6. [Mock API System](#mock-api-system)
   - [How It Works](#how-it-works)
   - [Available Mock Endpoints](#available-mock-endpoints)
   - [Using Mock Data](#using-mock-data)
7. [Image Optimization](#image-optimization)
8. [Authentication](#authentication)
9. [Customization Guide](#customization-guide)
   - [Changing Themes](#changing-themes)
   - [Creating Custom Themes](#creating-custom-themes)
   - [Updating Logo and Favicon](#updating-logo-and-favicon)
   - [Adding New Pages](#adding-new-pages)
10. [Development Workflow](#development-workflow)
11. [Building for Production](#building-for-production)
12. [Troubleshooting](#troubleshooting)
13. [API Reference](#api-reference)

---

## Introduction

AdminHub is a fully customizable, modern admin dashboard template built with React, TypeScript, and Tailwind CSS. It features 5 predefined themes, comprehensive mock data for development, and complete branding customization through a single configuration file.

This template is designed to help you quickly set up an admin dashboard for managing vendors, buyers, orders, products, support tickets, and more. All API calls are mocked, making it perfect for prototyping, development, and demonstration purposes.

---

## Features Overview

### Core Features

- **🎨 5 Predefined Themes**: Forest, Ocean, Sunset, Midnight, and Minimal
- **🌗 Dark Mode Support**: Every theme includes light and dark variants
- **⚡ One-Line Theme Switching**: Change themes by modifying a single constant
- **🔐 Authentication Ready**: Complete login/logout flow with token management
- **📊 Mock Data API**: Full-featured mock API with realistic Nigerian addresses and data
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **🎯 Type-Safe**: Built with TypeScript for better developer experience
- **🚀 Performance Optimized**: Lazy loading, image optimization, and efficient rendering
- **🖼️ Image Optimization**: Automatic image compression and lazy loading
- **🔔 Real-time Notifications**: Notification bell with unread counts
- **📧 Messaging System**: Support ticket and message management

### Managed Entities

- Contacts (customer inquiries)
- Waitlist entries
- Vendor signups and accounts
- Buyer registrations
- Orders with items and tracking
- Product categories
- Business categories
- Support tickets and messages
- System notifications
- Dashboard statistics

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** version 18 or higher
- **npm** or **yarn** package manager
- A modern web browser (Chrome, Firefox, Safari, Edge)

To check your Node.js version:
```bash
node --version
```

### Installation

1. **Clone the repository** (or extract the project files):
```bash
git clone <your-repository-url>
cd adminhub
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables** (optional):
```bash
cp .env.example .env.local
```

The application uses mock data by default, so no backend configuration is required.

### Running the Application

**Development Mode:**
```bash
npm run dev
```

The application will start at `http://localhost:5173`

**Available Scripts:**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint
```

---

## Project Structure

```
adminhub/
├── public/                     # Static assets
│   ├── favicon.svg            # Application favicon (mocked logo)
│   └── adminhub-logo.svg      # Logo SVG
├── src/
│   ├── assets/                # Image assets
│   ├── components/            # Reusable UI components
│   │   ├── Layout/           # Layout components (Sidebar, Header)
│   │   ├── ui/               # Base UI components (Button, Input, Card)
│   │   └── ProtectedRoute.tsx
│   ├── config/                # Configuration files
│   │   ├── theme.ts          # Theme and branding configuration
│   │   └── env.ts            # Environment variables
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuthCheck.ts
│   │   ├── useNotifications.ts
│   │   ├── useOrders.ts
│   │   └── useOrderItems.ts
│   ├── pages/                 # Page components
│   │   ├── Overview.tsx
│   │   ├── Orders.tsx
│   │   ├── Contacts.tsx
│   │   ├── VendorSignups.tsx
│   │   ├── BuyerSignups.tsx
│   │   └── ...
│   ├── services/              # API and mock data services
│   │   ├── api.ts            # API service layer (all mock)
│   │   └── mockData.ts       # Mock data generators
│   ├── stores/                # State management (Zustand)
│   │   └── authStore.ts
│   ├── types/                 # TypeScript type definitions
│   │   └── api.ts
│   ├── utils/                 # Utility functions
│   │   ├── imageOptimizer.ts
│   │   └── csvExport.ts
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation
```

---

## Configuration

### Theme Configuration

All theme settings are located in `/src/config/theme.ts`.

**Changing the Active Theme:**
```typescript
// Available themes: 'forest', 'ocean', 'sunset', 'midnight', 'minimal'
export const THEME_NAME = 'forest' as const;
```

Simply change the value to switch themes instantly.

### Branding Configuration

Update branding in `/src/config/theme.ts`:

```typescript
export const BRANDING = {
  APP_NAME: 'AdminHub',           // Application name
  COMPANY_NAME: 'AdminHub',       // Company name
  LOGO_TEXT: 'AdminHub',          // Text displayed with logo
  FAVICON_PATH: '/favicon.svg',   // Path to favicon
};
```

### Feature Flags

Enable or disable features globally:

```typescript
export const FEATURES = {
  SHOW_NOTIFICATIONS: true,        // Show notification bell
  SHOW_USER_INFO_IN_SIDEBAR: true, // Display user info in sidebar
  ENABLE_DARK_MODE: true,          // Allow dark mode toggle
  SHOW_BADGE_COUNTS: true,         // Show notification badges
};
```

### Environment Variables

Create a `.env.local` file to override defaults:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_API_DOCUMENTS_URL=http://localhost:3000/docs
```

**Default Configuration:**
- Development: Uses mock data (no real API calls)
- Production: Configured for `https://api.adminhub.ng`

---

## Mock API System

### How It Works

AdminHub uses a comprehensive mock API system that simulates all backend operations. No real API calls are made, making it perfect for:

- Rapid prototyping
- Offline development
- Testing and demonstrations
- Frontend-only deployments

The mock API includes:
- Simulated network delays (200-500ms)
- Pagination support
- Search and filtering
- CRUD operations
- In-memory data persistence during session

### Available Mock Endpoints

| Entity | Methods | Description |
|--------|---------|-------------|
| **Contacts** | `getContacts()`, `getContact(id)`, `getAllContacts()` | Customer contact submissions |
| **Waitlist** | `getWaitlist()`, `getWaitlistEntry(id)`, `getAllWaitlist()` | Vendor waitlist applications |
| **Vendors** | `getVendorSignups()`, `getVendorSignup(id)`, `approveVendor()`, `suspendVendor()` | Vendor management |
| **Buyers** | `getBuyerSignups()`, `getBuyerSignup(id)`, `toggleBuyerStatus()` | Buyer management |
| **Orders** | `getOrders()`, `getOrdersSummary()`, `updateOrderStatus()`, `getOrderItems()` | Order management |
| **Business Categories** | `getBusinessCategories()`, `createBusinessCategory()`, `updateBusinessCategory()`, `deleteBusinessCategory()` | Category CRUD |
| **Product Categories** | `getProductCategories()`, `createProductCategory()`, `updateProductCategory()`, `deleteProductCategory()` | Product category CRUD |
| **Tickets** | `getTickets()`, `getTicketMessages()`, `replyToTicket()` | Support tickets |
| **Notifications** | `getNotifications()`, `markNotificationAsRead()` | System notifications |
| **Overview** | `getOverviewStats()` | Dashboard statistics |
| **Commission** | `getCommission()`, `updateCommission()` | Commission rate management |

### Using Mock Data

Import the API service and call methods directly:

```typescript
import { apiService } from '@/services/api';

// Get paginated contacts
const contacts = await apiService.getContacts(1, 20);

// Get orders with filters
const orders = await apiService.getOrders({ 
  status: 'pending',
  page: 1,
  perPage: 20
});

// Get vendor signup details
const vendor = await apiService.getVendorSignup('vendor-123');

// Approve a vendor
await apiService.approveVendor('vendor-123');
```

All methods return promises with consistent response structures:

```typescript
// Single item response
{
  status: 200,
  error: false,
  message: "Success",
  data: { /* item data */ }
}

// Paginated response
{
  status: 200,
  error: false,
  message: "Success",
  data: [/* array of items */],
  pagination: {
    currentPage: 1,
    totalPages: 5,
    totalItems: 100,
    itemsPerPage: 20
  }
}
```

---

## Image Optimization

AdminHub includes built-in image optimization for fast loading and reduced bandwidth usage.

### Features

- **Automatic Compression**: Images are served with optimized quality settings
- **Lazy Loading**: Non-critical images load only when visible
- **Responsive Sizes**: Different sizes for different contexts
- **WebP Format**: Modern format for better compression
- **Placeholder Support**: Blur-up placeholders for smooth loading

### Usage

```typescript
import { optimizeImageUrl, createOptimizedImageUrl } from '@/utils/imageOptimizer';

// Optimize with custom parameters
const optimizedUrl = optimizeImageUrl(imageUrl, {
  width: 400,
  height: 300,
  quality: 80,
  format: 'webp'
});

// Use preset sizes
const thumbnail = createOptimizedImageUrl(imageUrl, 'thumbnail'); // 150x150
const small = createOptimizedImageUrl(imageUrl, 'small');         // 300x200
const medium = createOptimizedImageUrl(imageUrl, 'medium');       // 600x400
const large = createOptimizedImageUrl(imageUrl, 'large');         // 1200x800
```

### Image Sources

All images use Unsplash for high-quality, optimized photos:
- Product images
- User avatars
- Background images
- Placeholder images

Example URLs:
```
https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop
```

---

## Authentication

### Login Flow

1. User enters credentials on login page
2. Mock API validates and returns JWT token
3. Token stored in localStorage and Zustand store
4. User redirected to dashboard

### Token Management

- Tokens are automatically checked for expiry
- Expired tokens trigger automatic logout
- Protected routes redirect unauthenticated users

### Protected Routes

Use the `ProtectedRoute` component:

```typescript
import { ProtectedRoute } from '@/components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
```

### Logout

```typescript
import { apiService } from '@/services/api';

apiService.logout(); // Clears token and redirects to login
```

---

## Customization Guide

### Changing Themes

1. Open `/src/config/theme.ts`
2. Change `THEME_NAME` to one of: `'forest'`, `'ocean'`, `'sunset'`, `'midnight'`, `'minimal'`
3. Save and refresh

### Creating Custom Themes

Add a new theme to the `THEMES` object:

```typescript
export const THEMES = {
  // ... existing themes
  custom: {
    name: 'Custom',
    light: {
      radius: '0.5rem',
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0 0)',
      primary: 'oklch(0.4 0.2 200)',
      // ... add all required color tokens
    },
    dark: {
      // ... dark mode variants
    }
  }
};

export const THEME_NAME = 'custom' as const;
```

### Updating Logo and Favicon

**Logo:**
1. Replace `/public/adminhub-logo.svg` with your logo
2. Recommended size: 200x60px
3. Update `BRANDING.LOGO_TEXT` if needed

**Favicon:**
1. Replace `/public/favicon.svg` with your favicon
2. Recommended size: 100x100px
3. The favicon already uses the mocked logo design

Both files are SVG for crisp display at any size.

### Adding New Pages

1. **Create the page component** in `src/pages/`:
```typescript
// src/pages/Settings.tsx
export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      {/* Your content */}
    </div>
  );
}
```

2. **Add route** in `src/App.tsx`:
```typescript
import Settings from './pages/Settings';

<Route path="/settings" element={<Settings />} />
```

3. **Add navigation** in `src/components/Layout/Sidebar.tsx`:
```typescript
{
  label: 'Settings',
  icon: Settings2,
  path: '/settings'
}
```

---

## Development Workflow

### Recommended Workflow

1. **Start development server**: `npm run dev`
2. **Make changes** to components, pages, or configuration
3. **View changes** instantly with hot module replacement
4. **Test functionality** using mock data
5. **Run type checking**: `npm run type-check`
6. **Lint code**: `npm run lint`

### Best Practices

- Use TypeScript for type safety
- Follow existing component patterns
- Keep components small and focused
- Use the provided hooks for data fetching
- Leverage the mock API for testing
- Test responsive design on multiple screen sizes

### Debugging Tips

- **React DevTools**: Inspect component hierarchy and state
- **Network Tab**: Verify mock API responses
- **Console Logs**: Check for errors and warnings
- **Theme Config**: Quickly preview different themes

---

## Building for Production

### Build Process

```bash
# Create production build
npm run build

# Preview build locally
npm run preview
```

### Build Output

- Optimized JavaScript bundles
- Minified CSS
- Compressed assets
- Tree-shaken dependencies

### Deployment

The build output is in the `dist/` folder. Deploy to any static hosting:

- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push `dist/` to gh-pages branch
- **Any static host**: Upload contents of `dist/`

### Environment-Specific Builds

Create `.env.production` for production-specific settings:

```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_VERSION=1.0.0
```

---

## Troubleshooting

### Common Issues

**Issue: Theme not changing**
- **Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Issue: Mock data not loading**
- **Solution**: Check browser console for errors, ensure API service is imported correctly

**Issue: Build fails with TypeScript errors**
- **Solution**: Run `npm run type-check` to identify specific issues

**Issue: Images not loading**
- **Solution**: Verify image URLs are accessible, check network tab for 404 errors

**Issue: Login not working**
- **Solution**: Mock login accepts any credentials; check localStorage for auth_token

### Development Tips

- Use React DevTools to inspect component state
- Check Network tab to verify mock API responses
- Use Theme Config to preview different themes quickly
- Test on multiple browsers for compatibility

---

## API Reference

### Authentication

#### `login(credentials)`
Authenticate user and get token.

```typescript
await apiService.login({
  email: 'user@example.com',
  password: 'password'
});
```

#### `logout()`
Clear authentication and redirect to login.

```typescript
apiService.logout();
```

#### `isAuthenticated()`
Check if user is authenticated.

```typescript
const isAuth = apiService.isAuthenticated();
```

### Contacts

#### `getContacts(page, perPage)`
Get paginated contacts.

```typescript
const response = await apiService.getContacts(1, 20);
```

#### `getContact(id)`
Get single contact by ID.

```typescript
const contact = await apiService.getContact('contact-123');
```

### Orders

#### `getOrders(query)`
Get orders with filters.

```typescript
const orders = await apiService.getOrders({
  page: 1,
  perPage: 20,
  status: 'pending',
  paymentMethod: 'card'
});
```

#### `getOrderItems(orderNo)`
Get items for an order.

```typescript
const items = await apiService.getOrderItems('ORD-123');
```

#### `updateOrderStatus(id, status)`
Update order status.

```typescript
await apiService.updateOrderStatus('order-123', 'delivered');
```

### Vendors

#### `getVendorSignups(page, perPage)`
Get vendor signups.

```typescript
const vendors = await apiService.getVendorSignups(1, 20);
```

#### `approveVendor(id)`
Approve a vendor.

```typescript
await apiService.approveVendor('vendor-123');
```

#### `suspendVendor(id, reason)`
Suspend a vendor.

```typescript
await apiService.suspendVendor('vendor-123', {
  reason: 'Policy violation'
});
```

### Categories

#### `getBusinessCategories()`
Get all business categories.

```typescript
const categories = await apiService.getBusinessCategories();
```

#### `createBusinessCategory(data)`
Create new business category.

```typescript
await apiService.createBusinessCategory({
  categoryName: 'Electronics'
});
```

### Tickets

#### `getTickets(page, perPage, search)`
Get support tickets.

```typescript
const tickets = await apiService.getTickets(1, 10, 'refund');
```

#### `getTicketMessages(ticketId)`
Get messages for a ticket.

```typescript
const messages = await apiService.getTicketMessages('ticket-123');
```

#### `replyToTicket(ticketId, message)`
Reply to a ticket.

```typescript
await apiService.replyToTicket('ticket-123', 'Your issue has been resolved.');
```

### Notifications

#### `getNotifications(options)`
Get notifications.

```typescript
const notifications = await apiService.getNotifications({
  page: 1,
  perPage: 10
});
```

#### `markNotificationAsRead(id)`
Mark notification as read.

```typescript
await apiService.markNotificationAsRead('notif-123');
```

---

## Support

For questions, issues, or contributions:

- **Documentation**: This file and README.md
- **Issues**: Open an issue on GitHub
- **Contributions**: Submit pull requests

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

Last updated: 2024
