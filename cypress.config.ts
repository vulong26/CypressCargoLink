import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'eozs6n',
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1200,
  viewportHeight: 900,
  chromeWebSecurity: false,
  video: false,
  // Viewport settings overridden for component tests
  // Command timeout overridden for E2E tests
  e2e: {
    supportFile: false,
    defaultCommandTimeout: 5000,
    baseUrl:'https://dev.dev.cargolink.vn',
    testIsolation: false
  }
})