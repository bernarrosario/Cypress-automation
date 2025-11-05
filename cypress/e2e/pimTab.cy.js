import { pimTabActions } from "../support/pages/actions/pimTabActions"; //need clarification on exports

describe('OrangeHR Automations PIM Tab', () => {

  context('PIM Tab Actions', function () {
    beforeEach(() => {
      cy.login();
    });
    it('Creating Employee', () => {
      pimTabActions.createEmployee();
    });
  });

});
