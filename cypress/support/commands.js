import HomePageLocators from '../support/Page_Object/Home_Page'
import signInLocators from './Page_Object/SignIn_Page'

Cypress.Commands.add("search", data => {

    const homePage = new HomePageLocators()
    homePage.searchbox().type(data)
    homePage.confirmSearch().click()
})

Cypress.Commands.add("register", user => {

    const homePage = new HomePageLocators()
    const signin = new signInLocators()

    homePage.signIn().click()
    signin.createAccountEmail().type(user.email)
    signin.submitCreate().click()
})
