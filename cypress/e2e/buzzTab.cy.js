import MainSite from "../support/pages/selectors/mainSite";
import PimTab from "../support/pages/selectors/pimTab";


describe('Cypress test automation', () => {
  const mainSite = new MainSite();
  const pimTab = new PimTab();

  context('OrangTest Main Site Happy path', function () {
    it('Visits BaseURL, Run Login Flow', () => {
      cy.login();
    });
  });

  context('PIM Tab Scenarios', function () {
    beforeEach(() => {
      cy.login();
      mainSite.getMainSitePersonalInfoBtn().click();
    });

    it('Visits PIM tab on Main Site', () => {
      pimTab.getPimTabEmployeeListBtn().should('be.visible');
    });
  });
});
