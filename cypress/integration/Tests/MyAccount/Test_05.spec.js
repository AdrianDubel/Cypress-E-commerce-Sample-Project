/// <reference types="cypress" />

import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import ProductLocators from "../../../support/Page_Object/Product_Page"

describe('Create new wishlist add product and verify if list is updated with correct product', () => {

    const myaccount = new MyAccountLocators()
    const product = new ProductLocators()
    
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

        product.remove().click()
    })
})