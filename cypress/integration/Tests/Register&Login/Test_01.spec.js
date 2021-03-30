/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Register new user', () => {

    const homepage = new HomePageLocators()
    const registerpage = new RegisterLocators()
    const signIn = new signInLocators()

    it('Test if can register new user', () => {

        cy.visit('/index.php')
        homepage.signIn().click()
        cy.createEmailRegister()
        signIn.submitCreate().click()
        registerpage.titleMr().check()
        registerpage.FirstName().type('user')
        registerpage.LastName().type('UserSecond')
        registerpage.password().type('123456')
        registerpage.addressStreet().type('Sample 12/2')
        registerpage.city().type('chicago')
        registerpage.stateDropDown().select('Alabama')
        registerpage.postcode().type('33500')
        registerpage.mobilePhone().type('555666777')
        registerpage.submitRegister().click()

        cy.url().should('contain', 'my-account')
        cy.get('.page-heading').should('be.visible').and('contain', 'My account')      
    })
})