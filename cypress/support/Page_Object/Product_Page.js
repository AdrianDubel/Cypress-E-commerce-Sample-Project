class ProductLocators
{
    addToWishlist()
    {
        return cy.get('#wishlist_button')
    }

    fancyBox()
    {
        return cy.get('.fancybox-item')
    }

    remove()
    {
        return cy.get('.icon-remove')
    }

    quantityInput()
    {
        return cy.get('.cart_quantity_input')
    }

    addToCard()
    {
        return cy.get('.exclusive > span')
    }

    proceedToCheckout()
    {
        return cy.get('.cart_navigation > .button > span')
    }

    addReview()
    {
        return cy.get('#new_comment_tab_btn > span')
    }

}

export default ProductLocators