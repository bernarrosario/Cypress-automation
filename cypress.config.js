module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    // Point the root project to the QA E2E structure
    specPattern: 'qa-e2e/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'qa-e2e/cypress/support/e2e.js',
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    env: {
      username: 'Admin',
      password: 'admin123',
    },
  },
};
