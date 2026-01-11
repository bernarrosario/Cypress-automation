import MainSite from "../selectors/mainSiteSelector";
import AdminTab from "../selectors/adminTabSelector";

class AdminTabActions {
  constructor(mainSite = new MainSite(), adminTab = new AdminTab()) {
    this.mainSite = mainSite;
    this.adminTab = adminTab;
  }

  createUser({
    employeeName = "Timothy Lewis Amiano",
    username = "Elie123",
    password = "elie4321@",
  } = {}) {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabUserMngmentDropDownBtn().click();
    this.adminTab.getAdminTabUserMngmentUserDropDownBtn().click();
    this.adminTab.getAdminTabAddUserFlowBtn().click();
    this.adminTab.getAdminTabAddingUserEmpName().type(employeeName);
    cy.wait(5000); // Allow autocomplete suggestions to load
    this.adminTab.getAdminTabAddingUserEmployeeDropdown().click();
    this.adminTab.getAdminTabAddingUserRoleDropDown().click();
    this.adminTab.getAdminTabAddingUserRoleDropDownESS().click();
    this.adminTab.getAdminTabAddingUserStateDropDown().click();
    this.adminTab.getAdminTabAddingUserStatusDropDownEnabled().click();
    this.adminTab.getAdminTabAddingUserNameTextBox().type(username);
    this.adminTab.getAdminTabAddingUserPasswordTextBox().type(password);
    this.adminTab.getAdminTabAddingUserConfirmPasswordTextBox().type(password);
    this.adminTab.getAdminTabAddingUserKeepBtn().click();
    cy.wait(3000);
  }

  deleteUser({ username = "Elie123" } = {}) {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabUserMngmentDropDownBtn().should("be.visible");
    this.adminTab.getAdminTabUserMngmentUserTextBox().type(username);
    this.adminTab.getAdminTabUserMngmentSearchBtn().click();
    this.adminTab.getAdminTabDeleteUserBtn().click();
    this.adminTab.getAdminTabAcceptDeleteUserBtn().click();
  }

  createRole() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropJobTitles().click();
    this.adminTab.getAdminTabJobDropJobTitleAddBtn().click();
    this.adminTab.getAdminTabJobDropJobTitleTextBox().click().type('A1Test Title Bernar text box test');
    this.adminTab.getAdminTabJobDropJobTitleDescTextBox().click().type('Test Title Description text box test');
    this.adminTab.getAdminTabJobDropJobTitleNoteTextBox().click().type('Test Title Note text box test');
    this.adminTab.getAdminTabJobDropJobTitleSaveBtn().click();
  }

  editRole() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropJobTitles().click();
    this.adminTab.getAdminTabJobDropJobTitleNameEditBtn().click();
    this.adminTab.getAdminTabJobDropJobTitleDescTextBox().click().clear().type('Test Title Description edit test');
    this.adminTab.getAdminTabJobDropJobTitleNoteTextBox().click().clear().type('Test Title Note edit test');
    this.adminTab.getAdminTabJobDropJobTitleSaveBtn().click();
  }

  deleteRole() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropJobTitles().click();
    this.adminTab.getAdminTabJobDropJobTitleDeleteBtn().click();
    this.adminTab.getAdminTabJobDropJobTitleDeleteBtnYes().click();
  }

  createPaygrade() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropPayGrades().click();
    this.adminTab.getAdminTabJobDropPayGradesAddBtn().click();
    this.adminTab.getAdminTabJobDropPayGradesAddNameText().click().type('A1Test Pay Grade');
    this.adminTab.getAdminTabJobDropPayGradesAddNameSaveBtn().click();
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesBtn().click();
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesDropDown().click();
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesDropDownOption1().click();
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesMinimumSalaryText().click().type('1500');
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesMaximumSalaryText().click().type('3000');
    // this.adminTab.getAdminTabJobDropPayGradesAddNameAddCurrenciesSaveBtn().click();

  }

  editPaygrade() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropPayGrades().click();
    this.adminTab.getAdminTabJobDropPayGradesEditBtn().click();
    this.adminTab.getAdminTabJobDropPayGradesAddNameText().click().clear().type('A1Test Pay Grade Edited');
    this.adminTab.getAdminTabJobDropPayGradesAddNameSaveBtn().click();
  }

  deletePaygrade() {
    this.mainSite.getMainSiteAdminBtn().click();
    this.adminTab.getAdminTabJobDropDownBtn().click();
    this.adminTab.getAdminTabJobDropPayGrades().click();
    this.adminTab.getAdminTabJobDropPayGradesDeleteBtn().click();
    this.adminTab.getAdminTabJobDropJobTitleDeleteBtnYes().click();
  }
}

export default AdminTabActions;
export const adminTabActions = new AdminTabActions();
