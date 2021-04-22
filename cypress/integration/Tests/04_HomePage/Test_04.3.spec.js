/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"

describe('Verify that the comapny logo is clearly visible', () => {

    const homepage = new HomePageLocators()

    it('Verify that the comapny logo is clearly visible', () => {

        cy.visit('/index.php')
        cy.get('#header').find('.logo').should('be.visible')
    })
})