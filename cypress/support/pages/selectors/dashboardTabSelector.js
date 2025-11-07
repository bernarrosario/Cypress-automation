class DashboardTab {
  //update with correct tab locators
  getDashboardTabClockInBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.orangehrm-dashboard-widget-body > div.orangehrm-attendance-card > div.orangehrm-attendance-card-bar > button');
  }
}

export default DashboardTab;
