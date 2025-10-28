class AdminTab {

  getAdminTabUserMngmentDropDownBtn() {
    return cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item');
  }

  getAdminTabUserMngmentUserDropDownBtn() {
    return cy.get('.oxd-dropdown-menu > li');
  }

  getAdminTabJobDropDownBtn() {
    return cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item');
  }
  
  getAdminTabOrgDropDownBtn() {
    return cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item');
  }

  getAdminTabQualifDropDownBtn() {
    return cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item');
  }

  getAdminTabMoreDropDownBtn() {
    return cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item');
  }

  getAdminTabUserMngmentUserTextBox() {
    return cy.get(':nth-child(2) > .oxd-input');
  }

  getAdminTabUserMngmentRoleDropDown() {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  }

  getAdminTabUserMngmentRoleDropDown() {
    return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  }

  getAdminTabUserMngmentSearchBtn() {
    return cy.get('.oxd-form-actions > .oxd-button--secondary');
  }

  getAdminTabUserMngmentSearchBtn() {
    return cy.get('.oxd-form-actions > .oxd-button--secondary');
  }
  
  getAdminTabUserMngmentResetBtn() {
    return cy.get('.oxd-button--ghost');
  }
  getAdminTabUserMngmentAddBtn() {
    return cy.get('.oxd-button--ghost');
  }

  getAdminTabAddingUserRoleDropDown() {
    return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  }

  getAdminTabAddingUserStateDropDown() {
    return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
  }

  getAdminTabAddingUserEmpName() {
    return cy.get('.oxd-autocomplete-text-input > input');
  }

  getAdminTabAddingUserNameTextBox() {
    return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  getAdminTabAddingUserPasswordTextBox() {
    return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  getAdminTabAddingUserConfirmPasswordTextBox() {
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
  }

  getAdminTabAddingUserKeepBtn() {
    return cy.get('.oxd-button--secondary');
  }

  getAdminTabAddingUserCancelBtn() {
    return cy.get('.oxd-button--ghost');
  }

  getAdminTabDeleteUserBtn() {
    return cy.get('.oxd-table-cell-actions > :nth-child(1)');
  }

  getAdminTabEditUserBtn() {
    return cy.get('.oxd-table-cell-actions > :nth-child(2)');
  }

  getAdminTabEditUserBtn() {
    return cy.get('.oxd-table-cell-actions > :nth-child(2)');
  }

  getAdminTabAcceptDeleteUserBtn() {
    return cy.get('.oxd-button--label-danger');
  }
  
  getAdminTabDeclineDeleteUserBtn() {
    return cy.get('.orangehrm-modal-footer > .oxd-button--ghost');
  }

  getAdminTabAddUserFlowBtn() {
    return cy.get('.orangehrm-header-container > .oxd-button');
  }
  
  getAdminTabAddingUserRoleDropDownESS() {
    return cy.get('.oxd-select-dropdown > :nth-child(3)');
  }

  getAdminTabAddingUserStatusDropDownEnabled() {
    return cy.get('.oxd-select-dropdown > :nth-child(2)');
  }

  getAdminTabAddingUserStatusDropDownDisabled() {
    return cy.get('.oxd-select-dropdown > :nth-child(3)');
  }

  getAdminTabAddingUserEmployeeDropdown() {
    return cy.get('.oxd-autocomplete-option');
  }

  getAdminTabJobDropJobTitles() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1)');
  }
  
  getAdminTabJobDropJobTitleAddBtn() {
    return cy.get('#app li:nth-child(1) a.oxd-topbar-body-nav-tab-link');
  }

  getAdminTabJobDropJobTitleAddBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button');
  }

  getAdminTabJobDropJobTitleTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2)');
  }

  getAdminTabJobDropJobTitleDescTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > textarea');
  }

  getAdminTabJobDropJobTitleNoteTextBox() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div:nth-child(2) > textarea');
  }

  getAdminTabJobDropJobTitleSaveBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space');
  }

  getAdminTabJobDropJobTitleNameEditBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4) > div > button:nth-child(2)');
  }

  getAdminTabJobDropJobTitleEditTabDescripText() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > textarea');
  }

  getAdminTabJobDropJobTitleDeleteBtn() {
    return cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4) > div > button:nth-child(1)');
  }

  getAdminTabJobDropJobTitleDeleteBtnYes() {
    return cy.get('#app button.oxd-button--label-danger');
  }

}
export default AdminTab;
