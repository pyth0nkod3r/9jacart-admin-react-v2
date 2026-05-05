# AdminHub Dashboard

A fully customizable, modern admin dashboard template built with React, TypeScript, and Tailwind CSS. Features 5 predefined themes, comprehensive mock data for development, and complete branding customization through a single configuration file.

![AdminHub Dashboard](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

- 🎨 **5 Predefined Themes**: Forest, Ocean, Sunset, Midnight, and Minimal
- 🌗 **Dark Mode Support**: Every theme includes light and dark variants
- ⚡ **One-Line Theme Switching**: Change themes by modifying a single constant
- 🔐 **Authentication Ready**: Complete login/logout flow with token management
- 📊 **Mock Data API**: Full-featured mock API with realistic data for all entities
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎯 **Type-Safe**: Built with TypeScript for better developer experience
- 🚀 **Performance Optimized**: Lazy loading, image optimization, and efficient rendering

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd adminhub

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Theme Configuration

### Changing Themes

To switch between themes, simply modify the `THEME_NAME` constant in `/src/config/theme.ts`:

```typescript
// Available themes: 'forest', 'ocean', 'sunset', 'midnight', 'minimal'
export const THEME_NAME = 'forest' as const;
```

That's it! The entire application will instantly reflect the new theme.

### Available Themes

| Theme | Description | Color Palette |
|-------|-------------|---------------|
| **Forest** | Professional green tones | Emerald, sage, and forest greens |
| **Ocean** | Calming blue hues | Deep blues, teals, and aqua |
| **Sunset** | Warm orange gradients | Orange, coral, and warm yellows |
| **Midnight** | Elegant purple shades | Deep purples and violets |
| **Minimal** | Clean monochrome | Black, white, and grays |

### Customizing Branding

All branding is configured in `/src/config/theme.ts`:

```typescript
export const BRANDING = {
  APP_NAME: 'AdminHub',
  COMPANY_NAME: 'AdminHub',
  LOGO_TEXT: 'AdminHub',
  FAVICON_PATH: '/favicon.svg',
};
```

### Feature Flags

Enable or disable features globally:

```typescript
export const FEATURES = {
  SHOW_NOTIFICATIONS: true,
  SHOW_USER_INFO_IN_SIDEBAR: true,
  ENABLE_DARK_MODE: true,
  SHOW_BADGE_COUNTS: true,
};
```

## 📦 Mock Data

AdminHub uses comprehensive mock data for development and testing. No real API calls are made.

### Available Mock Entities

- **Contacts**: Customer contact form submissions
- **Waitlist**: Vendor waitlist applications
- **Vendors**: Vendor signups and accounts
- **Buyers**: Buyer registrations
- **Orders**: E-commerce orders with items
- **Product Categories**: Product categorization
- **Business Categories**: Business type categories
- **Tickets**: Support tickets with messages
- **Notifications**: System notifications
- **Overview Stats**: Dashboard statistics

### Mock API Features

- ✅ Simulated network delays (200-500ms)
- ✅ Pagination support
- ✅ Search and filtering
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ In-memory data persistence during session
- ✅ Realistic data relationships

### Using Mock Data

The mock API automatically replaces all real API calls. No configuration needed:

```typescript
import { api } from '@/services/api';

// All these methods return mock data
const contacts = await api.getContacts(1, 20);
const orders = await api.getOrders({ status: 'pending' });
const vendors = await api.getVendorSignups();
```

## 🏗️ Project Structure

```
adminhub/
├── public/                    # Static assets
│   ├── favicon.svg           # Application favicon
│   └── adminhub-logo.svg     # Logo SVG
├── src/
│   ├── assets/               # Image assets
│   ├── components/           # Reusable UI components
│   │   ├── Layout/          # Layout components (Sidebar, Header)
│   │   ├── ui/              # Base UI components (Button, Input)
│   │   └── ProtectedRoute.tsx
│   ├── config/              # Configuration files
│   │   ├── theme.ts         # Theme and branding config
│   │   └── env.ts           # Environment variables
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   ├── services/            # API and mock data services
│   │   ├── api.ts           # API service layer
│   │   └── mockData.ts      # Mock data generators
│   ├── stores/              # State management (Zustand)
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # This file
```

## 🛠️ Development

### Available Scripts

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

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation item in `src/components/Layout/Sidebar.tsx`

### Creating New API Endpoints

1. Add mock data generator in `src/services/mockData.ts`
2. Implement API method in `src/services/api.ts`
3. Use in your components via the API service

## 🎯 Key Components

### Sidebar Navigation

The sidebar automatically displays notification badges and supports:
- Active state highlighting
- Unread message counts
- Mobile-responsive collapse
- Theme-aware styling

### Notification System

Real-time notification bell with:
- Category-based grouping
- Unread count badges
- Auto-refresh every 60 seconds
- Click-to-mark-as-read

### Authentication

Complete auth flow with:
- JWT token management
- Automatic token expiry checking
- Protected routes
- Persistent sessions

## 📱 Responsive Design

AdminHub is fully responsive:

- **Desktop (>1024px)**: Full sidebar navigation
- **Tablet (768px - 1024px)**: Collapsible sidebar
- **Mobile (<768px)**: Hamburger menu with overlay

## 🔒 Security Features

- Token-based authentication
- Automatic token expiry handling
- Protected routes
- Secure password input
- Basic auth fallback for certain endpoints

## 🎨 Customization Guide

### Changing Colors

Edit theme colors in `/src/config/theme.ts`:

```typescript
export const THEMES = {
  forest: {
    light: {
      primary: 'oklch(0.28 0.08 142)',
      // ... other colors
    }
  }
}
```

### Adding Custom Themes

1. Add new theme object to `THEMES` in `theme.ts`
2. Include both `light` and `dark` variants
3. Update `THEME_NAME` to use your theme

### Modifying Logo

Replace `/public/adminhub-logo.svg` with your custom logo. Recommended size: 200x60px.

### Updating Favicon

Replace `/public/favicon.svg` with your custom favicon. Recommended size: 100x100px.

## 🐛 Troubleshooting

### Common Issues

**Issue**: Theme not changing
- **Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R)

**Issue**: Mock data not loading
- **Solution**: Check browser console for errors, ensure API service is imported

**Issue**: Build fails with TypeScript errors
- **Solution**: Run `npm run type-check` to identify specific issues

### Development Tips

- Use React DevTools to inspect component state
- Check Network tab to verify mock API responses
- Use Theme Config to preview different themes quickly

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
