// Environment configuration
// Note: All API calls use mock data - these URLs are for reference only
export const config = {
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://api.example.com", // Placeholder - mock data is used instead
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
  API_DOCUMENTS_URL:
    import.meta.env.VITE_API_DOCUMENTS_URL ||
    "https://api.example.com/docs", // Placeholder - mock data is used instead
};

// All API calls are mocked - no real backend connection required
// The mock API in src/services/api.ts handles all data operations
// You can override by setting VITE_API_BASE_URL in your .env.local file if needed
