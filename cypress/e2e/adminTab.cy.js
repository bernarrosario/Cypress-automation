import { adminTabActions } from "../support/pages/actions/adminTabActions";


describe('OrangeHR Automation', () => {
  context('Creating a user', function () {
    it('Creating User', () => {//before/all
      cy.login();
      adminTabActions.createUser();
    });

    it('Deleting User', () => {
      //after/all
      cy.login();
      adminTabActions.deleteUser();
    });
  });


  context('Create, Edit and Delete Job Title', function (){
    it('Creating Job Title', ()  => {
      cy.login();
      adminTabActions.createRole();
    });

    it('Editing Job Title', ()  => {
      cy.login();
      adminTabActions.editRole();
    });

    it('Deleting Job Title', ()  => {
      cy.login();
      adminTabActions.deleteRole();
   });
   });
  });
  