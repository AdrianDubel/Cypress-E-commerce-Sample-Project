/// <reference types="cypress" />

import HomePageLocators from '../../support/Page_Object/Home_Page'

describe('test', () => {

    const locators = new HomePageLocators()

    it('test', () => {

        cy.visit('/index.php')

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    
        let email = "user+test" + getRandomInt(1, 100) + getRandomInt(1, 100) + getRandomInt(1, 100) + "@example.com"
        
        cy.register({ email: email})
    
        
        
        
        
    })  
})