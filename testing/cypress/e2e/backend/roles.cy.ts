import { faker } from '@faker-js/faker';

describe('product spec', () => {
    it('mary fullcrud should be able to create a product', () => {
        let productName = faker.commerce.productName();
        cy.login('mary', 'admin')
        cy.request('POST', 'http://localhost:3000/api/products', { name: productName }).then(
            (response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', productName)
            }
        )
    })

    it('joe readonly should not be able to create a product', () => {
        let productName = faker.commerce.productName();
        cy.login('joe', 'admin')
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/products',
            body: { name: productName },
            failOnStatusCode: false
        }).then(
            (response) => {
                expect(response.status).to.eq(403)
                expect(response.body).to.not.have.property('name', productName)
                expect(response.body.message).to.contain('Forbidden resource')
            }
        )
    })

})