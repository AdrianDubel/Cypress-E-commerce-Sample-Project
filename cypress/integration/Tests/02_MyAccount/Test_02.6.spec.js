/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Add product to wishlist and verify if is visible in "My wishlist" tab', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()
    const myaccount = new MyAccountLocators()

    it('Test if product is visible in "My wishlist" tab', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        cy.contains('Faded Short Sleeve T-shirts').click()
        product.addToWishlist().click()
        product.fancyBox().should('be.visible').click()
        homepage.account().click()
        myaccount.WishList().click()
        cy.get('[style="width:200px;"] > a').click()

        cy.get('#s_title').should('be.visible').and('contain', 'Faded Short Sleeve T-shirts')
        cy.get('.bold').should('contain', '1')

        product.remove().first().click()
    })
})