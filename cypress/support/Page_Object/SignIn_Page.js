class signInLocators
{

    createAccountEmail()
    {
        return cy.get('#email_create')
    }

    submitCreate()
    {
        return cy.get('#SubmitCreate > span')
    }

    emailAlreadyRegister()
    {
        return cy.get('#email')
    }

    passwordAlreadyRegister()
    {
        return cy.get('#passwd')
    }

    forgotPassword()
    {
        return cy.get('.lost_password > a')
    }

    submitLogin()
    {
        return cy.get('#SubmitLogin > span')
    }

    submitForgot()
    {
        return cy.get('.submit > .btn > span')
    }
}

export default signInLocators