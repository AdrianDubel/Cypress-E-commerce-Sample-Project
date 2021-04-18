/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"

describe('Add product to card go to card and delete product from basket', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()
    const register = new RegisterLocators()

    it('Test - Add product to card go to card and delete product from basket', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        homepage.addProduct().click()
        product.closePopUp().click()
        homepage.shoppingCart().click()
        product.deleteProduct().click()
        register.Alert().should('be.visible').and('contain', 'Your shopping cart is empty')
        homepage.emptyCard().should('be.visible').and('have.text', "(empty)")
    })
})