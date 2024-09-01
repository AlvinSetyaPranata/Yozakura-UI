// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundColor: {
        'night': '#2E1E49',
        'sakura': '#FFC0CB'
      },
      colors: {
        'night': '#2E1E49',
        'sakura' : '#FFC0CB'
      },
    },
  },
  plugins: [],
};
