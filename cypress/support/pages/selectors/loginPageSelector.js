class LoginPage {
  getLoginUsername() {
    return cy.get('input[name="username"]');
  }

  getLoginPassword() {
    return cy.get('input[name="password"]');
  }

  getLoginSubmit() {
    return cy.get('button[type="submit"]');
  }
}

export default LoginPage;
