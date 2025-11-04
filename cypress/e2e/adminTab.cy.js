import { adminTabActions } from "../support/pages/actions/adminTabActions";


describe('OrangeHR Automation', () => {
  context('Creating and Deleting user', function () {
    beforeEach(() => {
      cy.login();
    });

    it('Creating User', () => {//before/all
      adminTabActions.createUser();
    });

    it('Deleting User', () => {
      //after/all
      adminTabActions.deleteUser();
    });
  });

  context('Create, Edit and Delete Job Title', function (){
    beforeEach(() => {
      cy.login();
    });

    it('Creating Job Title', ()  => {
      adminTabActions.createRole();
    });

    it('Editing Job Title', ()  => {
      adminTabActions.editRole();
    });

    it('Deleting Job Title', ()  => {
      adminTabActions.deleteRole();
    });
  });

  context('Create, Edit and Delete Pay Grades', function (){
    beforeEach(() => {
      cy.login();
    });

    it('Creating Pay Grade', ()  => {
      adminTabActions.createPaygrade();
    });

    it('Editing Pay Grade', ()  => {
      adminTabActions.editPaygrade();
    });

    it('Deleting Pay Grade', ()  => {
      adminTabActions.deletePaygrade();
    });
  });
});
