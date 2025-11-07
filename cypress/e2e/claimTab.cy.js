import { claimTabActions } from "../support/pages/actions/claimTabActions";

describe('OrangeHR automation', () => {
  context('Claim Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Opens assign claim', () => {
      claimTabActions.openAssignClaim();
    });
  });
});
