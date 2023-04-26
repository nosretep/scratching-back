
describe('roles spec', () => {

    it('mary fullcrud should see "Add new product" button', () => {
        cy.login('mary', 'admin')
        cy.visit('http://localhost:4200/products')
        cy.get('new-product-form').should('exist')
    })

    it('joe readonly should not see "Add new product" button', () => {
        cy.login('joe', 'admin')
        cy.visit('http://localhost:4200/products')
        cy.get('new-product-form').should('not.exist')
    })

})