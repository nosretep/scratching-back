import { faker } from '@faker-js/faker';

describe('product creator spec', () => {
    let product0: any, productName0: string;

    beforeEach(() => {
        cy.login('mary', 'admin')
    })

    before(() => {
        cy.login('mary', 'admin')

        productName0 = faker.commerce.productName();

        cy.request('POST', 'http://localhost:3000/api/products', { name: productName0 }).then(
            (response) => {
                product0 = response.body;
            }
        )
    })

    it('should have "mary" as the product user_id', () => {
        let user_id: number
        cy.request('GET', `http://localhost:3000/api/users?preferred_username=${"mary"}`)
            .then((response) => {
                // all/query returns an array
                user_id = response.body[0]['id']
                expect(product0).to.have.property('user_id', user_id)
            })
    })

})