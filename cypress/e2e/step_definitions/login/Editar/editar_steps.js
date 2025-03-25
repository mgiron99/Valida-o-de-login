import {Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const {faker} = require('@faker-js/faker')
let token 
let body
let id
let newBody
Given('Realizar login e capturar o token', () => {
    cy.Logar()
})


When('Realizar a edição do produto', () => {
    cy.editarProduto(newBody, id, token)
})

Then('Efetuar edição com sucesso', () => {
    cy.respostaLoginMessage(200, 'Registro alterado com sucesso')
    })