/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Verify that the user can successfully buy more than one product that was added to his/her cart.', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()
    const myaccount = new MyAccountLocators()

    it('Test buy more than one product', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        cy.contains('Faded Short Sleeve T-shirts').click()
        product.quantityPlus().click({force: true})
        product.addToCard().click()

        
    })
})