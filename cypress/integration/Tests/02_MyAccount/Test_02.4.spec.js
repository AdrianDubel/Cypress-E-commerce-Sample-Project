/// <reference types="cypress" />

import HomePageLocators from "../../../support/Page_Object/Home_Page"
import MyAccountLocators from "../../../support/Page_Object/MyAccount_Page"
import RegisterLocators from "../../../support/Page_Object/Register_Page"
import signInLocators from "../../../support/Page_Object/SignIn_Page"

describe('Test - change email', () => {

    const homePage = new HomePageLocators()
    const signin = new signInLocators()
    const myaccount = new MyAccountLocators()
    const registerPage = new RegisterLocators()

    beforeEach(() =>{
        
        cy.visit('/index.php')
    })

    it('Test - change email', () => {

        cy.readFile('cypress/fixtures/user_data.json').then(function(user_data) {

            let user_email = user_data.email
            let password = user_data.password
            
            homePage.signIn().click()
            signin.emailAlreadyRegister().type(user_email, {log:false})
            signin.passwordAlreadyRegister().type(password, {log: false})
            signin.submitLogin().click()
            myaccount.PersonalInfo().click()
    
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
        
            let email = "random" + getRandomInt(1, 100) + getRandomInt(1, 100) + getRandomInt(1, 100) + "@ee.co"
            signin.emailAlreadyRegister().clear().type(email)
            cy.writeFile('cypress/fixtures/user_data.json', {email: email, password: password})
            signin.oldPass().type(password)
            signin.saveUpdate().click()
            registerPage.Alert()
            .should('be.visible').and('contain', " Your personal information has been successfully updated.")
        }) 
    })

    it('Test - change password', () => {
        
        cy.readFile('cypress/fixtures/user_data.json').then(function(user_data) {

            let user_email = user_data.email
            let password = user_data.password
            
            homePage.signIn().click()
            signin.emailAlreadyRegister().type(user_email, {log:false})
            signin.passwordAlreadyRegister().type(password, {log: false})
            signin.submitLogin().click()
            myaccount.PersonalInfo().click()
    
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
        
            let pass = "pas" + getRandomInt(1, 100) + getRandomInt(1, 100) + getRandomInt(1, 100)
            signin.oldPass().clear().type(password)
            signin.passwordAlreadyRegister().clear().type(pass)
            signin.passConfirm().type(pass)
            cy.writeFile('cypress/fixtures/user_data.json', {email: user_email, password: pass})
            signin.saveUpdate().click()
            registerPage.Alert()
                        .should('be.visible')
                        .and('contain', ' Your personal information has been successfully updated.')
        })

    })
})