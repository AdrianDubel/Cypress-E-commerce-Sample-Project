/// <reference types="cypress" />

import RegisterLocators from "../../../support/Page_Object/Register_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import HomePageLocators from "../../../support/Page_Object/Home_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"
import PaymentLocators from "../../../support/Page_Object/Payment_Page"

describe('Click "reorder" and verify if the same product is choose', () => {

    const registerLocators = new RegisterLocators()
    const myaccount = new MyAccountLocators()
    const homepage = new HomePageLocators()
    const product_page = new ProductLocators()
    const payment = new PaymentLocators()

    it('Click "reorder" and verify if the same product is choose', () => {

        cy.visit('/')
        cy.login()
        myaccount.OrderHistory().click()
        cy.get('.first_item > .history_link').click()
        cy.get(':nth-child(3) > .footable-row-detail-value > .link-button').click()
        cy.get('.cart_description > .product-name > a').then((product) =>{

            const product_name = product.text()

            product_page.proceedToCheckout().click()
            product_page.proceedToCheckout().click()
            payment.termsChecbox().check()
            product_page.proceedToCheckout().click()
            payment.cart().click()
            payment.confirmOrder().click()
            payment.backToOrders().click()
            cy.get('.first_item > .history_link').click()
            cy.get(':nth-child(3) > .footable-row-detail-value > .link-button').click()
            cy.get('.cart_description > .product-name > a').then((product2) =>{

                const second_product = product2.text()

                expect(product_name).eq(second_product)
            })
        })
    })
})