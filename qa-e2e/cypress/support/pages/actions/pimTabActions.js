import MainSite from "../selectors/mainSiteSelector";
import PimTab from "../selectors/pimTabSelector";

class PimTabActions {
  constructor(mainSite = new MainSite(), pimTab = new PimTab()) {
    this.mainSite = mainSite;
    this.pimTab = pimTab;
  }

  createEmployee({
  } = {}) {
    this.mainSite.getMainSitePimBtn().click();
    this.pimTab.getPimTabAddEmployeeBtn().click();
    this.pimTab.getPimTabAddEmployeeNameTextBox().type('1Allyfirstname');
    this.pimTab.getPimTabAddEmployeeMiddleNameTextBox().type('1Allymiddlename');
    this.pimTab.getPimTabAddEmployeeLastNameTextBox().type('1Allylastname');
    this.pimTab.getPimTabAddEmployeeIDTextBox().clear().type('1221');
  }
}

export default PimTabActions;
export const pimTabActions = new PimTabActions();
