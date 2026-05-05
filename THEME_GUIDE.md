# Theme Configuration Guide

This template is fully customizable with **5 predefined themes**. All branding, colors, and features can be configured through a single configuration file.

## Quick Start

### Changing Themes

To switch between themes, simply change one line in `/src/config/theme.ts`:

```typescript
export const THEME_NAME = 'forest' as const;  // Change this line
```

**Available themes:**
- `'forest'` - Green/nature inspired theme (default)
- `'ocean'` - Blue ocean-inspired theme
- `'sunset'` - Warm orange/red sunset theme
- `'midnight'` - Purple/dark elegant theme
- `'minimal'` - Clean black & white minimalist theme

## Configuration File Location

All configuration is in **`/src/config/theme.ts`**

## Branding Configuration

Edit the `BRANDING` object to customize your app's identity:

```typescript
export const BRANDING = {
  APP_NAME: 'AdminHub',      // Full application name
  COMPANY_NAME: 'AdminHub',        // Company name
  LOGO_TEXT: 'AdminHub',           // Text shown in sidebar/logo
  FAVICON_PATH: '/favicon.svg',      // Path to favicon
};
```

## Feature Flags

Enable or disable features using the `FEATURES` object:

```typescript
export const FEATURES = {
  SHOW_NOTIFICATIONS: true,           // Show notification badges
  SHOW_USER_INFO_IN_SIDEBAR: true,    // Display user info in sidebar
  ENABLE_DARK_MODE: true,             // Allow dark mode toggle
  SHOW_BADGE_COUNTS: true,            // Show count badges on menu items
};
```

## Dark Mode

Dark mode is automatically supported for all themes. Toggle it programmatically:

```typescript
import { toggleDarkMode, setDarkMode } from './config/theme';

// Toggle between light and dark
toggleDarkMode();

// Set explicitly
setDarkMode(true);   // Enable dark mode
setDarkMode(false);  // Disable dark mode
```

Or add/remove the `dark` class on the `<html>` element manually.

## Creating Custom Themes

You can create your own theme by adding a new entry to the `THEMES` object:

```typescript
export const THEMES = {
  // ... existing themes
  myCustomTheme: {
    name: 'My Custom Theme',
    light: {
      radius: '0.5rem',
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0 0)',
      // ... all other color properties
    },
    dark: {
      background: 'oklch(0.1 0 0)',
      foreground: 'oklch(0.9 0 0)',
      // ... all other color properties
    },
  },
} as const;
```

Then set it as active:
```typescript
export const THEME_NAME = 'myCustomTheme' as const;
```

## Color Format

All colors use the **OKLCH** color format for better perceptual uniformity:
- `oklch(lightness chroma hue)`
- Example: `oklch(0.5 0.2 240)` = medium brightness, moderate saturation, blue hue

## Theme Properties

Each theme defines the following color properties for both light and dark modes:

| Property | Description |
|----------|-------------|
| `radius` | Border radius for components |
| `background` | Main page background |
| `foreground` | Main text color |
| `card` / `cardForeground` | Card backgrounds and text |
| `popover` / `popoverForeground` | Popover/dropdown colors |
| `primary` / `primaryForeground` | Primary brand colors |
| `secondary` / `secondaryForeground` | Secondary colors |
| `muted` / `mutedForeground` | Muted/subtle colors |
| `accent` / `accentForeground` | Accent highlight colors |
| `destructive` / `destructiveForeground` | Error/danger colors |
| `border` / `input` / `ring` | Borders, inputs, focus rings |
| `chart-1` to `chart-5` | Chart/graph colors |
| `sidebar` variants | Sidebar-specific colors |

## Example: Switching to Ocean Theme

1. Open `/src/config/theme.ts`
2. Find line 5: `export const THEME_NAME = 'forest' as const;`
3. Change to: `export const THEME_NAME = 'ocean' as const;`
4. Save the file
5. The app will automatically use the ocean theme on next load

That's it! No other changes needed.

## How It Works

1. On app initialization, `applyTheme()` is called from `main.tsx`
2. This function reads the `THEME_NAME` and applies all CSS variables
3. Light mode variables are set as `--background`, `--foreground`, etc.
4. Dark mode variables are set as `--dark-background`, `--dark-foreground`, etc.
5. When the `.dark` class is added to `<html>`, CSS switches to dark variables
6. All components use Tailwind's semantic color classes (e.g., `bg-background`)

## Files Modified

- `/src/config/theme.ts` - **Main configuration file** (created)
- `/src/index.css` - Updated to use dynamic CSS variables
- `/src/main.tsx` - Added theme initialization
- `/src/components/Layout/Sidebar.tsx` - Uses branding config

## Support

For questions or issues, refer to the theme configuration file comments.
