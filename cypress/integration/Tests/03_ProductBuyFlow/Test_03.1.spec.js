/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Add product to card and verify if have been added properly', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()

    it('Test - Add product to card and verify if have been added properly', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        homepage.addProduct().click()
        product.closePopUp().click()
        homepage.emptyCard().should('not.be.visible')
        homepage.shoppingCart().click()
        product.productName().should('be.visible').and('contain', "Faded Short Sleeve T-shirts")
    })
})