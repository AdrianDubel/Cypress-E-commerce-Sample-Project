/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"

describe('Test search product function', () => {

    const homepage = new HomePageLocators()

    it('Test search product function', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        homepage.searchbox().type('printed dress')
        homepage.confirmSearch().click()

       cy.get('.product-container').its('length').then((count) =>{

        cy.get('.product_list.grid.row')
          .find('.product-container')
          .should('have.length', count)
          .and('contain', "Printed Dress")
        })
    })
})