const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bizlit.com.ua',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


