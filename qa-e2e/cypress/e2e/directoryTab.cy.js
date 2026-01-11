import { directoryTabActions } from "../support/pages/actions/directoryTabActions";

describe('OrangeHR automation', () => {
  context('Directory Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Opens directory filters', () => {
      directoryTabActions.openDirectoryFilters();
    });
  });
});
