
const {faker} = require('@faker-js/faker')


// DELETAR PRODUTOS

Cypress.Commands.add('deletarProduto', (id, token) => {
        
                    cy.request({
                        method: 'DELETE',
                        url: `http://localhost:3000/produtos/${id}`, 
                        failOnStatusCode: false,
                        headers: {
                            authorization: token
                        }
                      }).as("response")
                    })



// BUSCAR PRODUTO

Cypress.Commands.add('buscarLoginProdutoID', (token, body) => {
                        
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": 'fulano@qa.com',
            "password": 'teste'
        },
        failOnStatusCode: false
    }).then((response) => {
            token = response.body.authorization

        body = {
            "nome": faker.commerce.productName(),
            "preco": faker.commerce.price({ min: 1, max: 1000000, dec: 0 }),
            "descricao": faker.commerce.productDescription(),
            "quantidade": Math.floor(Math.random() * 100000)
        };

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            body: body,
            failOnStatusCode: false,
            headers: {
                authorization: token
            }
        }).then(response => {
        cy.wrap(response.body._id).as('id')
       });
    }).as("response");
})
    
Cypress.Commands.add('buscarProduto', (id) => {
    cy.get('@id').then((id) => {
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/produtos/${id}`, 
            failOnStatusCode: false,
          })
        }).as("response")
        })
                       
Cypress.Commands.add('respostaBuscar', (status, nome) => {
        
    cy.get('@response').then(response =>{
        expect(response.status).to.equal(status)
        expect(response.body).to.have.property(nome)
    })
})


// LOGIN


Cypress.Commands.add('Credenciais', (email, password) => {
    cy.request({
     method: 'POST',
     url: 'http://localhost:3000/login',
     body: {
         "email": email,
         "password": password
     }, failOnStatusCode: false
    }).as('response')
    })
Cypress.Commands.add('respostaLoginMessage', (status, message) => {
        
    cy.get('@response').then(response =>{
        expect(response.status).to.equal(status)
        expect(response.body.message).to.equal(message)
    })
})

Cypress.Commands.add('respostaLoginEmail', (status, message) => {
        
    cy.get('@response').then(response =>{
        expect(response.status).to.equal(status)
        expect(response.body.email).to.equal(message)
    })
})

Cypress.Commands.add('respostaLoginPassword', (status, message) => {
        
    cy.get('@response').then(response =>{
        expect(response.status).to.equal(status)
        expect(response.body.password).to.equal(message)
    })
})