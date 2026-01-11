import { myInfoTabActions } from "../support/pages/actions/myInfoTabActions";

describe('OrangeHR automation', () => {
  context('My Info Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    after(() => {
      cy.logout();
    });
    it('Editing Employee Name', () => {
      myInfoTabActions.editEmployeeInfo();
    });
  });
});
