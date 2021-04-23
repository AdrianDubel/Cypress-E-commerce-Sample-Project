/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Verify that not log in users can add products to the wishlist', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()

    it('Verify that not log in users can add products to the wishlist', () => {

        cy.visit('/index.php')
        homepage.moreButton().click({force: true})
        product.addToWishlist().click()
        homepage.fancyBoxError().should('be.visible').and('contain', 'You must be logged in to manage your wishlist.')


    })
})