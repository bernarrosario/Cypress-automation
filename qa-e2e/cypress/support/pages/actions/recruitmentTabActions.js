import MainSite from "../selectors/mainSiteSelector";
import RecruitmentTab from "../selectors/recruitmentTabSelector";

class RecruitmentTabActions {
  constructor(mainSite = new MainSite(), recruitmentTab = new RecruitmentTab()) {
    this.mainSite = mainSite;
    this.recruitmentTab = recruitmentTab;
  }

  openAddCandidateForm() {
    this.mainSite.getMainSiteRecruitmentBtn().click();
    this.recruitmentTab.getRecruitmentTabCandidatesBtn().click();
    this.recruitmentTab.getRecruitmentTabAddCandidateBtn().click();
  }

  fillCandidateName(firstName, middleName, lastName) {
    this.recruitmentTab.getRecruitmentTabAddCandidateFirstNameTextBox().clear().type(firstName);
    this.recruitmentTab.getRecruitmentTabAddCandidateMiddleNameTextBox().clear().type(middleName);
    this.recruitmentTab.getRecruitmentTabAddCandidateLastNameTextBox().clear().type(lastName);
  }

  creatingCandidate({
    firstName = "ATest Name",
    middleName = "B Middle Name",
    lastName = "C Last Name",
  } = {}) {
    this.openAddCandidateForm();
    this.fillCandidateName(firstName, middleName, lastName);
  }
}

export default RecruitmentTabActions;
export const recruitmentTabActions = new RecruitmentTabActions();
