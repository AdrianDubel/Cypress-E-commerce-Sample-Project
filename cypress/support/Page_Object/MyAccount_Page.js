class MyAccountLocators
{
    OrderHistory()
    {
        return cy.get("[title='Orders'] > span")
    }

    CreditSlip()
    {
        return cy.get("[title='Credit slips'] > span")
    }

    MyAddresses()
    {
        return cy.get("[title='Addresses'] > span")
    }

    PersonalInfo()
    {
        return cy.get("[title='Information'] > span")
    }

    WishList()
    {
        return cy.get("[title='My wishlists'] > span")
    }
}