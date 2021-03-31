/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test login with correct data', () => {
    
    const homepage = new HomePageLocators()
    const signIn = new signInLocators()

    it('Verfiy if login with correct data', () => {

        cy.visit('/index.php')
        cy.login()
        cy.url().should('contain', 'my-account')
        cy.get('.page-heading')
          .should('be.visible')
          .and('contain', 'My account')
    })
})