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

    quantityPlus()
    {
        return cy.get('.btn.btn-default.button-plus.product_quantity_up')
    }

    addToCard()
    {
        return cy.get('.exclusive > span')
    }

}

export default ProductLocators