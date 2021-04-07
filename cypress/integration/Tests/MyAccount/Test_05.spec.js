/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Create new wishlist add product and verify if list is updated with correct product', () => {

    const homePage = new HomePageLocators()
    const signin = new signInLocators()
    const myaccount = new MyAccountLocators()
    const registerPage = new RegisterLocators()

    it('Test update wishlist', () => {

        cy.visit('/index.php')
        cy.login()
        myaccount.WishList().click()
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    
        let wishlist = "random"  + "wishlist" + getRandomInt(1, 100) + getRandomInt(1, 100)
        myaccount.WishListName().type(wishlist)
        myaccount.SaveWishlist().click()

        cy.get('[style="width:200px;"]')
          .should('be.visible')
          .and('contain', 'randomwishlist')

        cy.get('.icon-remove').click()

    })
})