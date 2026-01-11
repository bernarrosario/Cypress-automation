import { performanceTabActions } from "../support/pages/actions/performanceTabActions";

describe('OrangeHR automation', () => {
  context('Performance Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Opens KPIs configuration', () => {
      performanceTabActions.openConfigureKpis();
    });
  });
});
