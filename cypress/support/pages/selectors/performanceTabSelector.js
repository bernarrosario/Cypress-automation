class PerformanceTab {
//update with correct tab locators
  getPerformanceTabConfigureDropDownBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.oxd-topbar-body-nav-tab.--parent.--visited');
  }

  getPerformanceTabConfigureDropDownKpisBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent.--visited > ul > li:nth-child(1)');
  }

  getPerformanceTabConfigureDropDownKpisAddBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent.--visited > ul > li:nth-child(1)');
  }
}

export default PerformanceTab;
