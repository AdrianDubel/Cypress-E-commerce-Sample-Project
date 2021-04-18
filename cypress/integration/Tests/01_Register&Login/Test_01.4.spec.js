/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test login with incorrect data', () => {

    beforeEach(() => {

        cy.visit('/index.php')
        homepage.signIn().click()
    })

    const homepage = new HomePageLocators()
    const signIn = new signInLocators()

    it('Verify error message if login with incorrect username', () => {

        let bad_username = "fakeusername@mail.com"
        let password = Cypress.env('password')

        signIn.emailAlreadyRegister().type(bad_username, {log: false})
        signIn.passwordAlreadyRegister().type(password, {log: false})
        signIn.submitLogin().click()

        cy.get('#center_column > :nth-child(2)')
          .should('be.visible')
          .and('contain', "Authentication failed") 
    })

    it('Verify error message if login with incorrect password', () => {

        let user_email = Cypress.env('username')
        let wrong_password = "wrongpass"

        signIn.emailAlreadyRegister().type(user_email, {log: false})
        signIn.passwordAlreadyRegister().type(wrong_password, {log: false})
        signIn.submitLogin().click()
        
        cy.get('#center_column > :nth-child(2)')
          .should('be.visible')
          .and('contain', "Authentication failed")
    })
})