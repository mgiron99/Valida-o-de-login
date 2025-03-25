import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const {faker} = require('@faker-js/faker')

let token
let body
let id
Given ('Deve fazer login e cadastrar um produto', () => {
cy.carrinhoLogar(body)
})

When ('Deve adicionar o produto no carrinho', () => {
cy.carrinhoCadastrar(id, token)
})

Then ('Deve receber a mensagem cadastro realizado com sucesso', () => {
    cy.respostaLoginMessage(201, 'Cadastro realizado com sucesso')
})

