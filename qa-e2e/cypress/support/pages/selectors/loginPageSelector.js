class LoginPage {
  getLoginUsername() {
    return cy.get('input[name="username"]', { timeout: 20000 });
  }

  getLoginPassword() {
    return cy.get('input[name="password"]', { timeout: 20000 });
  }

  getLoginSubmit() {
    return cy.get('button[type="submit"]', { timeout: 20000 });
  }
}

export default LoginPage;
