import MainSite from "../support/pages/selectors/mainSite";
import LeaveTab from "../support/pages/selectors/leaveTab";


describe('Cypress test automation', () => {
  const mainSite = new MainSite();
  const leaveTab = new LeaveTab();

  context('OrangTest Main Site Happy path', function () {
    it('Visits BaseURL, Run Login Flow', () => {
      cy.login();
    });
  });

  context('Leave Tab Scenarios', function () {
    beforeEach(() => {
      cy.login();
      mainSite.getMainSiteLeaveBtn().click();
    });

    it('Visits Leave tab on Main Site', () => {
      leaveTab.getLeaveTabApplyBtn().should('be.visible');
    });
  });
});
