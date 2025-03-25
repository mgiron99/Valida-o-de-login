import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const {faker} = require('@faker-js/faker')
let token 
let body
let newBody
let id

Given('Logar e criar um produto', () => {
cy.login_criar(body, token)
})

When('Deletar o produto criado', () => {
    cy.deletarProduto(id, token)
})

Then('Deve deletar o produto com sucesso', () => {
    cy.respostaLoginMessage(200, 'Registro excluído com sucesso')
    })