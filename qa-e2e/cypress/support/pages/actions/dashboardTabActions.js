import MainSite from "../selectors/mainSiteSelector";
import DashboardTab from "../selectors/dashboardTabSelector";

class DashboardTabActions {
  constructor(mainSite = new MainSite(), dashboardTab = new DashboardTab()) {
    this.mainSite = mainSite;
    this.dashboardTab = dashboardTab;
  }

  openDashboardConfig() {
    this.mainSite.getMainSiteDashboardBtn().click();
    this.dashboardTab.getDashboardTabClockInBtn().click();
  }
}

export default DashboardTabActions;
export const dashboardTabActions = new DashboardTabActions();
