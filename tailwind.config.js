const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Iconify plugin
    addDynamicIconSelectors(),
  ],
}
