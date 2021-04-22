/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Add product to card and verify if on main page card section is updated properly', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()

    it('Verify if on main page card section is updated properly', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        homepage.addProduct().click()
        product.closePopUp().click()
        cy.get('.ajax_cart_quantity').first().should('contain','1')
        cy.get('.ajax_cart_product_txt').first().should('contain', 'Product')
        cy.get('.cart_block').then(($el)=> {

            cy.wrap($el).invoke('show')
            cy.get('.product-atributes').should('be.visible').and('contain', "Orange")
            cy.get('.product-name').should('be.visible').and('contain', "Faded Shor...")
        })        
    })
})