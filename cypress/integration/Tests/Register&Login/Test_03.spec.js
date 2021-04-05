/// <reference types="cypress" />

describe('Test login with correct data', () => {
    
    it('Verfiy if login with correct data', () => {

        cy.visit('/index.php')
        cy.login()
        cy.url().should('contain', 'my-account')
        cy.get('.page-heading')
          .should('be.visible')
          .and('contain', 'My account')
    })
})