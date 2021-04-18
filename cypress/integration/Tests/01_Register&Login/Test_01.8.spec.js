/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test "Forgot your password?" functionality', () => {

    beforeEach(() => {

        cy.visit('/index.php')
        homepage.signIn().click()
        signIn.forgotPassword().click()
    })

    const homepage = new HomePageLocators()
    const registerpage = new RegisterLocators()
    const signIn = new signInLocators()

    it('Test "Forgot your password?" already register email', () => {

        let user_forgot = Cypress.env('userForgotPass')

        registerpage.email().type(user_forgot)
        signIn.submitForgot().click()
        registerpage.Alert()
                    .should('be.visible')
                    .and('contain', 'A confirmation email has been sent to your address: forgotpass@fo.com')
    })

    it('Test "Forgot your password?" for not register account', () => {

        let not_register_user = 'notregister@fake.com'

        registerpage.email().type(not_register_user)
        signIn.submitForgot().click()
        registerpage.Alert()
                    .should('be.visible')
                    .and('contain', 'There is no account registered for this email address.')
    })
})