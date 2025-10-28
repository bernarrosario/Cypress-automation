import LoginPage from "./pages/selectors/loginPageSelector";

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
  const loginPage = new LoginPage();

  cy.visit('/');
  cy.location('pathname', { timeout: 10000 }).should('include', '/auth/login');
  loginPage.getLoginUsername().should('be.visible').clear().type(username, { log: false });
  loginPage.getLoginPassword().should('be.visible').clear().type(password, { log: false });
  loginPage.getLoginSubmit().click();
  cy.location('pathname', { timeout: 10000 }).should('include', '/dashboard');
});
