import { faker } from '@faker-js/faker';

describe('product spec', () => {
    let product0, productName0: string;
    let product1, productName1: string;

    before(() => {
        productName0 = faker.commerce.productName();
        productName1 = faker.commerce.productName();
        cy.request('POST', 'http://localhost:3000/products', { name: productName0 }).then(
            (response) => {
                product0 = response.body;
            }
        )
        cy.request('POST', 'http://localhost:3000/products', { name: productName1 }).then(
            (response) => {
                product1 = response.body;
            }
        )
    })

    it('should have the products in the product list', () => {
        cy.visit('http://localhost:4200/')
        cy.get('body').should(($body) => {
            const text = $body.text()
            expect(text).to.include(productName0)
            expect(text).to.include(productName1)
        })
    })

    it('should create a new product and show it in the product list', () => {
        let newProductName = faker.commerce.productName();
        console.log(newProductName);
        cy.visit('http://localhost:4200/');
        cy.get('button').contains('Add new product').click();
        cy.get('input#name').type(newProductName);
        cy.get('button').contains('Submit').click();
        // cy.wait(5000);
        cy.get('ul.products li').first().should("include.text", newProductName);
    })

})