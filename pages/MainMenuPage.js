class MainMenuPage {
  getRegisterBtn() {
    return cy
      .get(
        'a[href="https://magento.softwaretestingboard.com/customer/account/create/"]'
      )
      .contains("Create an Account");
  }

  getSearchBar()
  {
    return cy.get('#search');
  }

  getSaleBtn()
  {
    return cy.get('a[href="https://magento.softwaretestingboard.com/sale.html"]');
  }
}

export default new MainMenuPage();
