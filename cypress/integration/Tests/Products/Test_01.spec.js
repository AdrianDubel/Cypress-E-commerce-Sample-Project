/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Test add review to product and verify if is visible', () => {

    const homepage = new HomePageLocators()
    const product = new ProductLocators()

    it('Test add review to product and verify if is visible', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        cy.contains('Faded Short Sleeve T-shirts').click()
        cy.wait(200)
        //product.addReview().should('be.visible').click({force: true})
        cy.get('#new_comment_tab_btn > span').should('have.attr', 'href').then((href) => {
            cy.visit(href)
          })
        


    })
})