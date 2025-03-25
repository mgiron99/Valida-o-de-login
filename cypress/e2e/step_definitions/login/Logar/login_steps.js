import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let credenciais

Given('The user need to have a valid email and password', () => {
 credenciais
})

When('I have to type the email and password in the system', () => {
  cy.Credenciais('fulano@qa.com', 'teste')
})

Then('I have a sucessful login', () => {
    cy.respostaLoginMessage(200, 'Login realizado com sucesso')
})


Given('The user need to have a valid email and password', () => {
    credenciais
  })
When('The user have to type a incorrect password', () => {
  cy.Credenciais('fulano@qa.com', 'teste1')
})

Then('The user will be notify about the incorrect password', () => {
  cy.respostaLoginMessage(401, 'Email e/ou senha inválidos')
  })

  
Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have to type a invalid email', () => {
  cy.Credenciais('fulanoqa.com', 'teste')
})

Then('The user will be notify about the invalid email', () => {
  cy.respostaLoginEmail(400, 'email deve ser um email válido')
})


Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have forget to type the password', () => {
  cy.Credenciais('fulano@qa', '')
})

Then('The user will be notify about blank password', () => {
  cy.respostaLoginPassword(400, 'password não pode ficar em branco')
  })


Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have type a invalid email', () => {
  cy.Credenciais('fulan@qa.com', 'teste')
})

Then('The user will be notify about invalid email', () => {
  cy.respostaLoginMessage(401, 'Email e/ou senha inválidos')
})

