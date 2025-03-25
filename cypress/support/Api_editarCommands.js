/// <reference types ="cypress" />

const {faker} = require('@faker-js/faker')

// EDITAR PRODUTOS

Cypress.Commands.add('Logar', () => {
    const body = {
        "nome": faker.commerce.productName(),
        "preco": faker.commerce.price({ min: 1, max: 1000000, dec: 0 }),
        "descricao": faker.commerce.productDescription(),
        "quantidade": Math.floor(Math.random() * 100000)
}
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": 'fulano@qa.com',
            "password": 'teste'
        }, failOnStatusCode: false
    }).then((request)=> {
        cy.wrap(request.body.authorization).as('token')
    }).then(()=> {
        cy.get('@token').then((token) =>{
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/produtos',
                body: body,
                failOnStatusCode: false,
                headers: {
                    authorization: token
                }
            }).then((response)=> {
            cy.wrap(response.body._id).as('id')
            })
        })
    })
})

Cypress.Commands.add('editarProduto', (newBody) => {
    const body = {
        "nome": faker.commerce.productName(),
        "preco": faker.commerce.price({ min: 1, max: 1000000, dec: 0 }),
        "descricao": faker.commerce.productDescription(),
        "quantidade": Math.floor(Math.random() * 100000)
}
cy.wrap(body).as('newBody')
    cy.get('@token').then((token) =>{
    cy.get('@id').then((id)=> {
    cy.get('@newBody').then((newBody)=> {


                cy.request({
                    method: 'PUT',
                    url: `http://localhost:3000/produtos/${id}`,
                    body: newBody, 
                    failOnStatusCode: false,
                    headers: {
                        authorization: token
                    }
                })
            })
            }).as("response")
            })
        })