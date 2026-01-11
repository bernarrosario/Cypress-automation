class LeaveTab {

  getLeaveTabApplyBtn() {
    return cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item');
  }

  getLeaveTabMyLeaveBtn() {
    return cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item');
  }
  
  getLeaveTabEntitlementsBtn() {
    return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item');
  }

  getLeaveTabReportsBtn() {
    return cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item');
  }

  getLeaveTabConfigureBtn() {
    return cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item');
  }

  getLeaveTabMoreBtn() {
    return cy.get(':nth-child(6) > .oxd-topbar-body-nav-tab-item');
  }

  getLeaveTabHelpBtn() {
    return cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon');
  }

  getLeaveTabAssigneLeaveBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab > ul > div:nth-child(2) > li > a');
  }

  getLeaveTabAssigneLeaveEmployeeNameSearshBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > input');
  }
}

export default LeaveTab;
