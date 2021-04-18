/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import PaymentLocators from "../../../support/Page_Object/Payment_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Verify that the user can successfully buy more than one product that was added to his/her cart.', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()
    const payment = new PaymentLocators()

    it('Test buy more than one product', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        cy.contains('Faded Short Sleeve T-shirts').click()
        product.addToCard().click()
        homepage.logo().click()
        cy.get('#homefeatured').contains('Blouse').click({force: true})
        product.addToCard().click()
        product.proceedToCheckout().click()
        product.proceedToCheckout().click()
        payment.termsChecbox().check()
        product.proceedToCheckout().click()
        payment.cart().click()
        payment.confirmOrder().click()
        cy.get('.box').should('be.visible')
          .and('contain', 'Your order on My Store is complete.')   
    })
})