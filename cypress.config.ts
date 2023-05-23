import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'eozs6n',
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1200,
  viewportHeight: 900,
  chromeWebSecurity: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    supportFile: false,
    defaultCommandTimeout: 5000,
    baseUrl:'https://cargolink.vn',
    testIsolation: false,
    specPattern: 'cypress/e2e/tests/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
})