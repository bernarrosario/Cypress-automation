class PimTab {
//update with correct tab locators
  getPimTabConfigBtn() {
    return cy.get('.--parent > .oxd-topbar-body-nav-tab-item');
  }

  getPimTabEmployeeListBtn() {
    return cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item');
  }
  
  getPimTabAddEmployeeBtn() {
    return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item');
  }

  getPimTabReportsBtn() {
    return cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item');
  }

  getPimTabHelpBtn() {
    return cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon');
  }
}

export default PimTab;
