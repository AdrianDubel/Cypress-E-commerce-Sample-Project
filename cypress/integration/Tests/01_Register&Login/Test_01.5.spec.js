/// <reference types="cypress" />

import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import HomePageLocators from "../../../support/Page_Object/Home_Page"

describe('Test logout', () => {

    const myaccount = new MyAccountLocators()
    const homePage = new HomePageLocators()

    it('Verify if properly logout', () => {

        cy.visit('/index.php')
        cy.login()
        myaccount.SignOut().click()
        
        cy.url().should('contain', 'back=my-account')
        homePage.signIn().should('be.visible').and('contain', 'Sign in')
    })  
})