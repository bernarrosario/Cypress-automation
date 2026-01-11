class DirectoryTab {
  //update with correct tab locators
  getDirectoryTabShowDirectoryOptionsBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-header > div.oxd-table-filter-header-options > div:nth-child(3)');
  }
}

export default DirectoryTab;
