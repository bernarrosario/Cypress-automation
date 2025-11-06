import { myInfoTabActions } from "../support/pages/actions/myInfoTabActions";

describe('OrangeHR automation', () => {
  context('My Info Tab Tests', function () {
    beforeEach(() => {
      cy.login();
    });
    it('Editing Employee Name', () => {
      myInfoTabActions.editEmployeeInfo();
    });
  });
});
