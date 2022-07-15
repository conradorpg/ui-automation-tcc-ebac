/// <reference types="cypress" />
import ProductPage from '../../support/pages/product.page'

describe('Funcionalidade página de produtos', () => {
  beforeEach(() => {
    cy.visit('/produtos')
  })

  it('Adicionar produtos ao carrinho', () => {
    let produto1 = 'Aether Gym Pant'
    let tamanho1 = '33'
    let cor1 = 'Green'
    let quantidade1 = 3
    // 
    cy.product(produto1, cor1, tamanho1, quantidade1)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade1)
    cy.get('.woocommerce-message').should('contain', quantidade1 + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    ProductPage.returnBuyPage()
  

  
    let produto2 = 'Aero Daily Fitness Tee'
    let tamanho2 = 'XS'
    let cor2 = 'Brown'
    let quantidade2 = 2
    let carrinho2 = quantidade1 + quantidade2
    // 
    cy.product(produto2, cor2, tamanho2, quantidade2)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', carrinho2)
    cy.get('.woocommerce-message').should('contain', quantidade2 + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    ProductPage.returnBuyPage()
  

  
    let produto3 = 'Ajax Full-Zip Sweatshirt'
    let tamanho3 = 'XS'
    let cor3 = 'Red'
    let quantidade3 = 3
    let carrinho3 = carrinho2 + quantidade3
    // 
    cy.product(produto3, cor3, tamanho3, quantidade3)

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', carrinho3)
    cy.get('.woocommerce-message').should('contain', quantidade3 + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
  })

})