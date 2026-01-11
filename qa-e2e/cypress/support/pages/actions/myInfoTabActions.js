import MainSite from "../selectors/mainSiteSelector";
import MyInfoTab from "../selectors/myInfoTabSelector";

class MyInfoTabActions {
  constructor(mainSite = new MainSite(), myInfoTab = new MyInfoTab()) {
    this.mainSite = mainSite;
    this.myInfoTab = myInfoTab;
  }

  editEmployeeInfo(name = "edit") {
    this.mainSite.getMainSiteMyInfoBtn().click();
    this.myInfoTab.getEmployeeNameTextBox().clear().type(name);
    //this.myInfoTab.getEmployeeSaveBtn().click();
  }
}

export default MyInfoTabActions;
export const myInfoTabActions = new MyInfoTabActions();
