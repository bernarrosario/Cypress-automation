import MainSite from "../selectors/mainSiteSelector";
import BuzzTab from "../selectors/buzzTabSelector";

class BuzzTabActions {
  constructor(mainSite = new MainSite(), buzzTab = new BuzzTab()) {
    this.mainSite = mainSite;
    this.buzzTab = buzzTab;
  }

  postBuzzUpdate(message = "Automated buzz post") {
    this.mainSite.getMainSiteBuzzBtn().click();
    this.buzzTab.getBuzzTabPostTextBox().click().type(message);
    this.buzzTab.getBuzzTabPostBtn().click();
  }
}

export default BuzzTabActions;
export const buzzTabActions = new BuzzTabActions();
