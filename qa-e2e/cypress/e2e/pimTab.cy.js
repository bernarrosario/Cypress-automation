import { pimTabActions } from "../support/pages/actions/pimTabActions"; //need clarification on exports

Cypress.on('uncaught:exception', (err) => {
  if (err?.message?.includes("reading 'response'")) {
    return false;
  }
});

describe('OrangeHR Automations PIM Tab', () => {

  context('PIM Tab Actions', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Creating Employee', () => {
      pimTabActions.createEmployee();
    });
  });

});
