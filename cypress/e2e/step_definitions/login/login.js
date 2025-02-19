import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let credenciais
// login ralizado com sucesso
Given('The user need to have a valid email and password', () => {
 credenciais
})

When('I have to type the email and password in the system', () => {
  cy.credenciais('fulano@qa.com', 'teste')
})

Then('I have a sucessful login', () => {
    cy.Respostas(200, 'Login realizado com sucesso')
})

// senha errada
Given('The user need to have a valid email and password', () => {
    credenciais
  })
When('The user have to type a incorrect password', () => {
  cy.credenciais('fulano@qa.com', 'teste1')
})

Then('The user will be notify about the incorrect password', () => {
  cy.Respostas(401, 'Email e/ou senha inválidos')
  })

  // email não validado sem @
Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have to type a invalid email', () => {
  cy.credenciais('fulanoqa.com', 'teste')
})

Then('The user will be notify about the invalid email', () => {
  cy.get('@response').then(response => {
    expect(response.status).to.equal(400)
    expect(response.body.email).to.equal('email deve ser um email válido')
  })
})

// senha em branco
Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have forget to type the password', () => {
  cy.credenciais('fulano@qa', '')
})

Then('The user will be notify about blank password', () => {
  cy.get("@response").then(response => {
    expect(response.status).to.equal(400)
    expect(response.body.password).to.equal('password não pode ficar em branco')
  })
})

//email errado
Given('The user need to have a valid email and password', () => {
  credenciais
})
When('The user have type a invalid email', () => {
  cy.credenciais('fulan@qa.com', 'teste')
})

Then('The user will be notify about invalid email', () => {
  cy.Respostas(401, 'Email e/ou senha inválidos' )
})

