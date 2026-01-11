import MainSite from "../selectors/mainSiteSelector";
import ClaimTab from "../selectors/claimTabSelector";

class ClaimTabActions {
  constructor(mainSite = new MainSite(), claimTab = new ClaimTab()) {
    this.mainSite = mainSite;
    this.claimTab = claimTab;
  }

  openAssignClaim() {
    this.mainSite.getMainSiteClaimBtn().click();
    this.claimTab.getClaimTabAssignClaimBtn().click();
  }
}

export default ClaimTabActions;
export const claimTabActions = new ClaimTabActions();
