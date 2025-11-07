import MainSite from "../selectors/mainSiteSelector";
import DirectoryTab from "../selectors/directoryTabSelector";

class DirectoryTabActions {
  constructor(mainSite = new MainSite(), directoryTab = new DirectoryTab()) {
    this.mainSite = mainSite;
    this.directoryTab = directoryTab;
  }

  openDirectoryFilters() {
    this.mainSite.getMainSiteDirectoryBtn().click();
    this.directoryTab.getDirectoryTabShowDirectoryOptionsBtn().click();
  }
}

export default DirectoryTabActions;
export const directoryTabActions = new DirectoryTabActions();
