import { performanceTabActions } from "../support/pages/actions/performanceTabActions";

describe('OrangeHR automation', () => {
  context('Performance Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    it('Opens KPIs configuration', () => {
      performanceTabActions.openConfigureKpis();
    });
  });
});
