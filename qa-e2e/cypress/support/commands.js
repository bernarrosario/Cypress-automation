import LoginPage from "./pages/selectors/loginPageSelector";
import LogoutMenu from "./pages/selectors/logoutSelector";

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
  const loginPage = new LoginPage();

  cy.visit('/web/index.php/auth/login');
  cy.location('pathname', { timeout: 20000 }).should('include', '/auth/login');
  loginPage.getLoginUsername().should('be.visible').clear().type(username, { log: false });
  loginPage.getLoginPassword().should('be.visible').clear().type(password, { log: false });
  loginPage.getLoginSubmit().click();
  cy.location('pathname', { timeout: 20000 }).should('include', '/dashboard');
});

Cypress.Commands.add('logout', () => {
  const logoutMenu = new LogoutMenu();

  Cypress.once('uncaught:exception', (err) => {
    if (err?.message?.includes("reading 'response'")) {
      return false;
    }
  });

  cy.location('pathname', { timeout: 20000 }).then((pathname) => {
    if (pathname.includes('/auth/login')) {
      return;
    }

    logoutMenu.getUserMenuTrigger().should('be.visible').click();
    logoutMenu.getLogoutButton().should('be.visible').click();
    cy.location('pathname', { timeout: 20000 }).should('include', '/auth/login');
  });
});
