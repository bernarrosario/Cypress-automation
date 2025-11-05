import { pimTabActions } from "../support/pages/actions/pimTabActions"; //need clarification on exports

describe('OrangeHR Automation', () => {

  context('PIM Tab', function () {
    beforeEach(() => {
      cy.login();
    });
    it('Create Employee', () => {
      pimTabActions.createEmployee();
    });
  });

});
