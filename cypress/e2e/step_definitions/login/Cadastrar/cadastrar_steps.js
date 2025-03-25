import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const {faker} = require('@faker-js/faker')


let token  
let body
let usuario
let id
let newBody
Given ('Realizar login, obter o token e construir produto', () => {
    cy.logarCapToken(token)

})

When ('Deve cadastrar um produto novo', () => {
    cy.cadastrar_Produtos(newBody, token)

})

Then ('Deve cadastrar o produto com sucesso', () => {
    cy.respostaLoginMessage(201, 'Cadastro realizado com sucesso')
    })



    // USUARIO
Given('Deve gerar um usuario', () => {
    cy.Logar()
})

When('Deve cadastrar um usuario', () => {
    cy.cadastrarUsuario(usuario)
})

Then('Deve cadastra um usuario com sucesso', () => {
    cy.respostaLoginMessage(201, 'Cadastro realizado com sucesso')
})