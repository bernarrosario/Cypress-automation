class LogoutMenu {
  getUserMenuTrigger() {
    return cy.get('.oxd-userdropdown-tab');
  }

  getLogoutButton() {
    return cy.contains('.oxd-userdropdown-link', 'Logout');
  }
}

export default LogoutMenu;
