# AdminHub Quick Start Guide

Get up and running with AdminHub Dashboard in 5 minutes!

## ⚡ Installation (2 minutes)

```bash
# Clone the repository
git clone <your-repo-url>
cd adminhub

# Install dependencies
npm install
```

## 🎨 Choose Your Theme (30 seconds)

Open `/src/config/theme.ts` and change line 5:

```typescript
// Available: 'forest', 'ocean', 'sunset', 'midnight', 'minimal'
export const THEME_NAME = 'forest' as const;  // ← Change this!
```

## 🚀 Start Development (1 minute)

```bash
npm run dev
```

Visit `http://localhost:5173`

## 🔐 Login Credentials

Use any email and password to login (mock authentication):
- **Email**: admin@example.com
- **Password**: admin123

## 📦 What's Included

✅ 5 beautiful themes with dark mode  
✅ Complete mock data API  
✅ Responsive design  
✅ Notification system  
✅ Authentication flow  
✅ 10+ pre-built pages  

## 🎯 Next Steps

1. **Customize Branding**: Edit `/src/config/theme.ts`
2. **Add Your Logo**: Replace `/public/adminhub-logo.svg`
3. **Update Favicon**: Replace `/public/favicon.svg`
4. **Build for Production**: `npm run build`

## 📚 Full Documentation

See [README.md](./README.md) for complete documentation.

---

**Need Help?** Check the troubleshooting section in README.md or open an issue on GitHub.
