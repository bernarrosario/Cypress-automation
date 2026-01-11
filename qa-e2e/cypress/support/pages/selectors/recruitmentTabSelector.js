class PimTab {
//update with correct tab locators
  getRecruitmentTabCandidatesBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.oxd-topbar-body-nav-tab.--visited');
  }

  getRecruitmentTabAddCandidateBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button');
  }

  getRecruitmentTabAddCandidateFirstNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(1) > div:nth-child(2) > input');
  }

  getRecruitmentTabAddCandidateMiddleNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input');
  }

  getRecruitmentTabAddCandidateLastNameTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(3) > div:nth-child(2) > input');
  }
}

export default PimTab;
