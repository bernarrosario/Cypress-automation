import RecruitmentTabActions, { recruitmentTabActions } from "../support/pages/actions/recruitmentTabActions";
import MainSite from "../support/pages/selectors/mainSiteSelector";
import PimTab from "../support/pages/selectors/pimTabSelector";

describe('OrangeHR automation', () => {
  const mainSite = new MainSite();
  const pimTab = new PimTab();

  context('Recruitmet Tab Tests', function () {
      beforeEach(() => {
      cy.login();
      });
    it('Creating a Candidate', () => {
      recruitmentTabActions.creatingCandidate();
    });
  });
});
