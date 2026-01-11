class ClaimTab {
  //update with correct tab locators
  getClaimTabAssignClaimBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div.orangehrm-paper-container > div.orangehrm-header-container > button');
  }
}

export default ClaimTab;
