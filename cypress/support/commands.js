import HomePageLocators from '../support/Page_Object/Home_Page'
import signInLocators from '../support/Page_Object/SignIn_Page'

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

Cypress.Commands.add("createEmailRegister", () => {

    const signIn = new signInLocators()

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let email = "user+test" + getRandomInt(1, 100) + getRandomInt(1, 100) + getRandomInt(1, 100) + "@example.com"
    signIn.createAccountEmail().type(email)
})
