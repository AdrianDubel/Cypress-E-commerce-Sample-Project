/// <reference types="cypress" />

import RegisterLocators from "../../../support/Page_Object/Register_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"
import PaymentLocators from "../../../support/Page_Object/Payment_Page"

describe('Change diffrent addres for delivery from drop down', () => {

    const registerLocators = new RegisterLocators()
    const myaccount = new MyAccountLocators()
    const homepage = new HomePageLocators()
    const product = new ProductLocators()
    const payment = new PaymentLocators()

    it('Test - Change diffrent addres for delivery from drop down', () => {

        cy.visit('/index.php')
        cy.login()
        myaccount.MyAddresses().click()
        cy.get('.main-page-indent > .btn > span').click()
        registerLocators.addressStreet().type('street2')
        registerLocators.city().type('City2')
        registerLocators.stateDropDown().select('Florida')
        registerLocators.postcode().type('33456')
        registerLocators.mobilePhone().type('456789234')
        registerLocators.addressAlias().clear().type('SecondAddress')
        registerLocators.subbmitAddress().click()
        homepage.logo().click()
        homepage.addProduct().click()
        product.closePopUp().click()
        homepage.shoppingCart().click()
        payment.proceedNext().click()
        payment.addressDropDown().select('SecondAddress')
        cy.get('#address_delivery > .address_address1')
          .should('be.visible')
          .and('contain', 'street2')
          
        homepage.account().click()
        myaccount.MyAddresses().click()
        cy.get(".last_item [title='Delete'] > span").click({force:true})
    })
})