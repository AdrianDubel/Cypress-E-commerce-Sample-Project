/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Register with exist email', () => {

    const homepage = new HomePageLocators()
    const signIn = new signInLocators()

    it('Test if error message have been displayed', () => {

        let user_email = Cypress.env('username')

        cy.visit('/index.php')
        homepage.signIn().click()
        signIn.createAccountEmail().type(user_email)
        signIn.submitCreate().click()

        cy.get('#create_account_error')
          .should('be.visible')
          .and('contain', "An account using this email address has already been registered. Please enter a valid password or request a new one.")
    })
})