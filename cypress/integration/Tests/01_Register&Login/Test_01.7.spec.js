/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Provide less than 5 characters in "password" field and verify if error is displated', () => {

    const homepage = new HomePageLocators()
    const registerpage = new RegisterLocators()
    const signIn = new signInLocators()

    it('Test - Provide less than 5 characters in "password" field and verify if error is displated', () => {

        cy.visit('/index.php')
        homepage.signIn().click()
        cy.createEmailRegister()
        signIn.submitCreate().click()
        registerpage.titleMr().check()
        registerpage.FirstName().type('user')
        registerpage.LastName().type('UserSecond')
        registerpage.password().type('1234')
        registerpage.addressStreet().type('Sample 12/2')
        registerpage.city().type('chicago')
        registerpage.stateDropDown().select('Alabama')
        registerpage.postcode().type('33500')
        registerpage.mobilePhone().type('555666777')
        registerpage.submitRegister().click()

        registerpage.Alert()
                    .should('be.visible')
                    .and("contain", "passwd is invalid")
    })
})