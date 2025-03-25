/// <reference types ="cypress" />

const {faker} = require('@faker-js/faker')

Cypress.Commands.add('logarCapToken', () => {
    cy.request({
        method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": 'fulano@qa.com',
                "password": 'teste'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.wrap(response.body.authorization).as('token')   
    })
    
    })

Cypress.Commands.add('cadastrar_Produtos', (token) => { 
    
    const newBody = {
        nome: faker.commerce.productName(),
        preco:faker.commerce.price({ min: 1, max: 1000000, dec: 0 }),
        descricao: faker.commerce.productDescription(),
        quantidade: Math.floor(Math.random() * 100000)
    };
cy.get('@token').then((token)=> {
    cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            body: newBody, 
            failOnStatusCode: false,
            headers: {
                authorization: token
            }
          }).as("response") 
        })
        })
        
        Cypress.Commands.add('Logar', () => {

            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/login',
                body: {
                "email": 'fulano@qa.com',
                "password": 'teste'
            },
            failOnStatusCode: false
        })
            })

            Cypress.Commands.add('cadastrarUsuario', () => {
                const usuario = {
                    "nome": faker.person.fullName(),
                    "email": faker.internet.email(),
                    "password": faker.internet.password(),
                    "administrador": "true"
                };

                cy.request({
                    method: 'POST',
                    url: 'http://localhost:3000/usuarios',
                    body: usuario, 
                    failOnStatusCode: false,
                  }).as("response")
                })



        

