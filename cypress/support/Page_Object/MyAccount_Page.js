class MyAccountLocators
{
    SignOut()
    {
        return cy.get('.logout')
    }

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

    BackToAccount()
    {
        return cy.get('.footer_links > li:nth-of-type(1) span')
    }

    Home()
    {
        return cy.get(".btn[href='http://automationpractice.com/'] > span")
    }

    UpdateAddress()
    {
        return cy.get("[title='Update'] > span")
    }

    DeleteAddress()
    {
        return cy.get("[title='Delete'] > span")
    }

    AddNewAddress()
    {
        return cy.get("[title='Add an address'] > span")
    }

    BackToAddresses()
    {
        return cy.get("//span[contains(.,'Back to your addresses')]")
    }

    SaveWishlist()
    {
        return cy.get('#submitWishlist > span')
    }

    WishListDelete()
    {
        return cy.get('.wishlist_delete')
    }

    WishListName()
    {
        return cy.get('#name')
    }
}

export default MyAccountLocators