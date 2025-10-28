import MainSite from "../support/pages/selectors/mainSite";


describe('Cypress test automation', () => {
  const mainSite = new MainSite();

  context('OrangTest Main Site Happy path', function () {
    it('Visits BaseURL, Run Login Flow', () => {
      cy.login();
    });
  });

  context('Admin Tab Scenarios', function () {
    beforeEach(() => {
      cy.login();
    });

    it('Visits Admin tab on Main Site', () => {
      mainSite.getMainSiteAdminBtn().click();
      mainSite.getMainSiteMenuArrowBtn().click();
    });
  });
});
