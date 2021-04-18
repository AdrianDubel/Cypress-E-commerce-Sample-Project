/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import PaymentLocators from "../../../support/Page_Object/Payment_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"

describe('Test - update billing address', () => {

    const payment = new PaymentLocators()
    const homepage = new HomePageLocators()
    const registerLocators = new RegisterLocators()

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let street = "street" + getRandomInt(1, 100) + getRandomInt(1, 100) + getRandomInt(1, 100)

    it('Test if user can update billing address', () => {

        cy.visit('/index.php')
        cy.login()
        homepage.logo().click()
        cy.contains('Add to cart').first().click()
        payment.proceedToCheckout().click()
        payment.proceedNext().click()
        cy.get('#address_invoice > .address_update > .button > span').click()
        registerLocators.addressStreet().clear().type(street)
        registerLocators.subbmitAddress().click()

        cy.get('#address_invoice > .address_address1')
          .should('be.visible')
          .and('contain', street)
    })
})