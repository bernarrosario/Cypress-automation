import MainSite from "../support/pages/selectors/mainSiteSelector";
import LeaveTab from "../support/pages/selectors/leaveTabSelector";
import { leaveTabActions } from "../support/pages/actions/leaveTabActions";

describe('OrangeHR Leave Tab', () => {
  const mainSite = new MainSite();
  const leaveTab = new LeaveTab();

  context('Assigning Leave', function () {
    beforeEach(() =>{
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Assigning Leave', () => {
      leaveTabActions.assignLeave();
    });
  });
});
