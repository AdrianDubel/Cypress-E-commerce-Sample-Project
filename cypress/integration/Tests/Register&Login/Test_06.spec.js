/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test that not filling the mandatory fields and clicking the submit button will lead to validation error', () => {

    const homepage = new HomePageLocators()
    const registerpage = new RegisterLocators()
    const signIn = new signInLocators()

    it('Verify that not filling the mandatory fields and clicking the submit button will lead to validation error', () => {

        cy.visit('/index.php')
        homepage.signIn().click()
        cy.createEmailRegister()
        signIn.submitCreate().click()
        registerpage.titleMr().check()
        registerpage.LastName().type('UserSecond')
        registerpage.password().type('123456')
        registerpage.addressStreet().type('Sample 12/2')
        registerpage.city().type('chicago')
        registerpage.stateDropDown().select('Alabama')
        registerpage.postcode().type('33500')
        registerpage.mobilePhone().type('555666777')
        registerpage.submitRegister().click()

        registerpage.Alert()
                    .should('be.visible')
                    .and('contain', 'firstname is required.')
    })  
})