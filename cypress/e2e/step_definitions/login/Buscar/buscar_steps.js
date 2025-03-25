import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Buscar from "./buscar_appDrive"

const buscar = new Buscar
const {faker} = require('@faker-js/faker')

let token 
let body
let usuario
let id

Given('Criar um produto novo e capturar o ID', () => {
    cy.buscarLoginProdutoID(token, body)
})

When('Buscar o produto novo pelo ID', () => {
    cy.buscarProduto(id)
})

Then('Ter a busca realizada com sucesso status e nome', () => {
   cy.respostaBuscar(200, 'nome')
})