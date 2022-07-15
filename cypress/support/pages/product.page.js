class ProductPage {
  returnBuyPage() {
    cy.get('#primary-menu > .menu-item-629 > a').click()
  }
}

export default new ProductPage()