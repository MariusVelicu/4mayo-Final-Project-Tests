class CustomiseOrderPage {
  getSize(index) {
    return cy.get(
      'div[class="swatch-attribute size"] div[class="swatch-attribute-options clearfix"] div:nth-child(' +
        index +
        ")"
    );
  }

  getColor(index) {
    return cy.get(
      'div[class="swatch-attribute color"] div[class="swatch-attribute-options clearfix"] div:nth-child(' +
        index +
        ")"
    );
  }

  getQty(number) {
    return cy.get("#qty").clear().type(number);
  }

  getAddProductToCartBtn() {
    return cy.get("#product-addtocart-button");
  }
}

export default new CustomiseOrderPage();
