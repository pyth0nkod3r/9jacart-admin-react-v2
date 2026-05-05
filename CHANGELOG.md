# Changelog

All notable changes to AdminHub Dashboard will be documented in this file.

## [1.0.0] - 2024-01-XX

### Added
- **5 Predefined Themes**: Forest, Ocean, Sunset, Midnight, and Minimal
- **Dark Mode Support**: Complete light/dark theme variants for all themes
- **Mock Data API**: Comprehensive mock data for all entities (contacts, waitlist, vendors, buyers, orders, categories, tickets, notifications)
- **One-Line Theme Switching**: Change themes by modifying a single constant in config
- **Complete Branding System**: Configurable app name, logo, favicon, and company info
- **Feature Flags**: Enable/disable notifications, user info display, dark mode, badge counts
- **Image Optimization Utilities**: Helper functions for optimized image loading
- **Responsive Design**: Mobile-first design with collapsible sidebar
- **Authentication Flow**: Complete login/logout with JWT token management
- **Notification System**: Real-time notification bell with category grouping
- **Protected Routes**: Route protection based on authentication state

### Changed
- Complete rebrand to AdminHub identity
- Replaced all real API calls with mock data
- Updated favicon to AdminHub logo
- Enhanced documentation with comprehensive README

### Technical
- TypeScript for type safety
- React 18+ with hooks
- Tailwind CSS for styling
- Zustand for state management
- Vite for build tooling
- OKLCH color space for modern color management

---

**Note**: This is a template project. All API calls use mock data by default for development and testing purposes.
