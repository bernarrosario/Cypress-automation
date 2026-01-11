class MainSite {
  getMainSearchTextBox() {
    return cy.get('.oxd-main-menu-search');
  }

  getMainSiteAdminBtn() {
    return cy.get(':nth-child(1) > .oxd-main-menu-item');
  }

  getMainSitePimBtn() {
    return cy.get(':nth-child(2) > .oxd-main-menu-item');
  }
  
  getMainSiteLeaveBtn() {
    return cy.get(':nth-child(3) > .oxd-main-menu-item');
  }
  
  getMainSiteTimeBtn() {
    return cy.get(':nth-child(4) > .oxd-main-menu-item');
  }

  getMainSiteRecruitmentBtn() {
    return cy.get(':nth-child(5) > .oxd-main-menu-item');
  }

  getMainSiteMyInfoBtn() {
    return cy.get(':nth-child(6) > .oxd-main-menu-item');
  }
  
  getMainSitePerformanceBtn() {
    return cy.get(':nth-child(7) > .oxd-main-menu-item');
  }

  getMainSiteDashboardBtn() {
    return cy.get(':nth-child(8) > .oxd-main-menu-item');
  }

  getMainSiteDirectoryBtn() {
    return cy.get(':nth-child(9) > .oxd-main-menu-item');
  }

  getMainSiteMaintenanceBtn() {
    return cy.get(':nth-child(10) > .oxd-main-menu-item');
  }
  
  getMainSiteClaimBtn() {
    return cy.get(':nth-child(11) > .oxd-main-menu-item');
  }

  getMainSiteBuzzBtn() {
    return cy.get(':nth-child(12) > .oxd-main-menu-item');
  }

  getMainSiteMenuArrowBtn() {
    return cy.get('.oxd-main-menu-search > .oxd-icon-button');
  }
}

export default MainSite;
