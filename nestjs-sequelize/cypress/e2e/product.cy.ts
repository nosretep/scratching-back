import { faker } from '@faker-js/faker';

describe('product spec', () => {
  let product0, productName0, part0, partName0;
  let product1, productName1, part1, partName1;

  before(() => {
    productName0 = faker.commerce.productName();
    partName0 = faker.commerce.productMaterial();
    productName1 = faker.commerce.productName();
    partName1 = faker.commerce.productMaterial();
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
    cy.request('POST', 'http://localhost:3000/parts', { name: partName0 }).then(
      (response) => {
        part0 = response.body;
      }
    )
    cy.request('POST', 'http://localhost:3000/parts', { name: partName1 }).then(
      (response) => {
        part1 = response.body;
      }
    )
  })

  it('should have created the product and part in before', () => {
    expect(product0).to.have.property('name', productName0) // true
    expect(part0).to.have.property('name', partName0) // true
    expect(product1).to.have.property('name', productName1) // true
    expect(part1).to.have.property('name', partName1) // true
  })

  it('should associate part to product and then retrieve parts from parts', () => {
    cy.request('PUT', `http://localhost:3000/products/${product0.id}/parts/${part0.id}`)
    cy.request('PUT', `http://localhost:3000/products/${product0.id}/parts/${part1.id}`)
    cy.request('GET', `http://localhost:3000/parts?product_id=${product0.id}`)
      .then(
        (response) => {
          let actualPart0 = response.body[0];
          let actualPart1 = response.body[1];
          expect(actualPart0["id"]).to.eq(part0.id)
          expect(actualPart1["id"]).to.eq(part1.id)
        }
      )
  })

  it('should error when creating product without "name"', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/products',
      body: { name: '' },
      failOnStatusCode: false
    }).then(
      (response) => {
        expect(response.status).to.eq(400)
        expect(response.body.message[0]).to.contain("name should not be empty")
      }
    )
  })

})