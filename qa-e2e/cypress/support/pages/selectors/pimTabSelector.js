class PimTab {

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

  getPimTabAddEmployeeNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(1) > div:nth-child(2) > input');
  }

  getPimTabAddEmployeeMiddleNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input');
  }

  getPimTabAddEmployeeLastNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(3) > div:nth-child(2) > input');
  }

  getPimTabAddEmployeeIDTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(1) > div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input');
  }
}

export default PimTab;
