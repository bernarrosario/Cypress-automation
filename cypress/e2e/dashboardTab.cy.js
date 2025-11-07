import { dashboardTabActions } from "../support/pages/actions/dashboardTabActions";

describe('OrangeHR automation', () => {
  context('Dashboard Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Opens Dashboard config', () => {
      dashboardTabActions.openDashboardConfig();
    });
  });
});
