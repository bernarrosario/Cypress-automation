class BuzzTab {
  //locators are not working in this tab
  getBuzzTabPostTextBox() {
    return cy.get('#Buzz\ Newsfeed > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-create-post-header-text > form > div > textarea');
  }

  getBuzzTabPostBtn() {
    return cy.get('#Buzz\ Newsfeed > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-create-post-header-text > form > div > div > button');
  }
}

export default BuzzTab;
