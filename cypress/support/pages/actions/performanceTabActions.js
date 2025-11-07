import MainSite from "../selectors/mainSiteSelector";
import PerformanceTab from "../selectors/performanceTabSelector";

class PerformanceTabActions {
  constructor(mainSite = new MainSite(), performanceTab = new PerformanceTab()) {
    this.mainSite = mainSite;
    this.performanceTab = performanceTab;
  }

  openConfigureKpis() {
    this.mainSite.getMainSitePerformanceBtn().click();
    this.performanceTab.getPerformanceTabConfigureDropDownBtn().click();
    this.performanceTab.getPerformanceTabConfigureDropDownKpisBtn().click();
  }
}

export default PerformanceTabActions;
export const performanceTabActions = new PerformanceTabActions();
