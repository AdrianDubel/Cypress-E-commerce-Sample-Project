/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test login with correct data', () => {
    
    const homepage = new HomePageLocators()
    const signIn = new signInLocators()

    it('Verfiy if login with correct data', () => {

        let user_email = Cypress.env('username')
        let password = Cypress.env('password')

        cy.visit('/index.php')
        homepage.signIn().click()
        signIn.emailAlreadyRegister().type(user_email, {log: false})
        signIn.passwordAlreadyRegister().type(password, {log: false})
        signIn.submitLogin().click()

        cy.url().should('contain', 'my-account')
        cy.get('.page-heading')
          .should('be.visible')
          .and('contain', 'My account')
    })
})