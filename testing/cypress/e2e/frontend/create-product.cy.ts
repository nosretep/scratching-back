import { faker } from '@faker-js/faker';

describe('product spec', () => {

    let product0, productName0: string;
    let product1, productName1: string;

    before(() => {
        cy.login('mary', 'admin')

        productName0 = faker.commerce.productName();
        productName1 = faker.commerce.productName();
        cy.request('POST', 'http://localhost:4200/api/products', { name: productName0 }).then(
            (response) => {
                product0 = response.body;
            }
        )
        cy.request('POST', 'http://localhost:4200/api/products', { name: productName1 }).then(
            (response) => {
                product1 = response.body;
            }
        )
    })

    beforeEach(() => {
        cy.login('mary', 'admin')
    })

    it('should have the products in the product list', () => {
        cy.visit('http://localhost:4200/products')
        cy.get('body').should(($body) => {
            const text = $body.text()
            expect(text).to.include(productName0)
            expect(text).to.include(productName1)
        })
    })

    it('should create a new product and show it in the product list', () => {
        let newProductName = faker.commerce.productName();
        cy.visit('http://localhost:4200/products');
        cy.get('button').contains('Add new product').click();
        cy.get('input#name').type(newProductName);
        cy.get('button').contains('Submit').click();
        // cy.wait(5000);
        cy.get('ul.products li').first().should("include.text", newProductName);
    })

})