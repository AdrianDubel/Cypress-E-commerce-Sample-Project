/// <reference types="cypress" />

import RegisterLocators from "../../../support/Page_Object/Register_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"

describe('Test - Add and delete new address in "My addresses" tab', () => {

    const registerLocators = new RegisterLocators()
    const myaccount = new MyAccountLocators()

    beforeEach(function() {

        cy.fixture("address").then(function(address){

            this.address=address

            cy.visit('/index.php')
            cy.login()
            myaccount.MyAddresses().click()
            cy.get('.main-page-indent > .btn > span').click()
            registerLocators.addressStreet().type(this.address.Address)
            registerLocators.city().type(this.address.City)
            registerLocators.stateDropDown().select(this.address.State)
            registerLocators.postcode().type(this.address.zip_code)
            registerLocators.mobilePhone().type(this.address.mobile_phone)
            registerLocators.addressAlias().clear().type(this.address.address_name)
            registerLocators.subbmitAddress().click()
        })
    })

    it('Update current address in "My addresses" tab',function (){

        
        cy.get('.last_item')
          .should('be.visible')
          .and('contain', 'New address')

        cy.get('.last_item').contains('Delete').click()
    })

    it('Delete address in "My addresses" tab', () => {

        cy.get('.last_item')
          .should('be.visible')
          .and('contain', 'New address')

        cy.get('.last_item').contains('Delete').click()
        cy.get('.last_item').should('not.contain.text', "New address")
    })
})