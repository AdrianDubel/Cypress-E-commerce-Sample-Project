class HomePageLocators
{
    searchbox()
    {
        return cy.get('#search_query_top')
    }
    confirmSearch()
    {
        return cy.get('#searchbox > .btn')
    }

    logo()
    {
        return cy.get("[alt='My Store']")
    }

    signIn()
    {
        return cy.get('.login')
    }

    shoppingCart()
    {
        return cy.get('.shopping_cart')
    }

    womenCategory()
    {
        return cy.get(".sf-with-ul[title='Women']")
    }

    dressesCategory()
    {
        return cy.get(".sf-menu > li > [title='Dresses']")
    }

    tshirtsCategory()
    {
        return cy.get(".sf-menu > li > [title='T-shirts']")
    }

    addProduct()
    {
        return cy.contains("Add to cart").first()
    }
}

export default HomePageLocators
