/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"

describe('Place order and verify if is visible in "Order history and details" ', () => {

    const homepage = new HomePageLocators()
    const myaccount = new MyAccountLocators()

    it('Verify if order is visible in "Order history and details"  in my account section', () => {

        cy.visit('/index.php')
        cy.login()
        myaccount.OrderHistory().click()

        cy.get('#order-list > tbody').find('tr').then(listing => {

            const listingCount = Cypress.$(listing).length
            
        homepage.logo().click()
        cy.placeOrder()
        homepage.account().click()
        myaccount.OrderHistory().click()

        cy.get('#order-list > tbody').find('tr').then(listing2 => {

            const listingCountAfter = Cypress.$(listing2).length
            
            expect(listingCount).not.eq(listingCountAfter)
        })
    })
    })
})