import MainSite from "../selectors/mainSiteSelector";
import LeaveTab from "../selectors/leaveTabSelector";

class LeaveTabActions {
  constructor(mainSite = new MainSite(), leaveTab = new LeaveTab()) {
    this.mainSite = mainSite;
    this.leaveTab = leaveTab;
  }

  assignLeave() {
    this.mainSite.getMainSiteLeaveBtn().click();
    this.leaveTab.getLeaveTabMoreBtn().click();
    this.leaveTab.getLeaveTabAssigneLeaveBtn().click();
    this.leaveTab.getLeaveTabAssigneLeaveEmployeeNameSearshBox().clear().type('Timothy Lewis Amiano');
  }
}

export default LeaveTabActions;
export const leaveTabActions = new LeaveTabActions();
