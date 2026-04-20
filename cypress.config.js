const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.telpark.com/pt/login',
    chromeWebSecurity: false,
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    defaultCommandTimeout: 4000,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {

    },
  },
});
