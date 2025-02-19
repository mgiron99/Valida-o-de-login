Cypress.Commands.add('credenciais', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
          "email": email,
          "password": password
        }, failOnStatusCode: false
      }).as("response")
})

Cypress.Commands.add('Informacoes', (email, password) => {
    let credenciais = {
        "email": email,
       "password": password
    }
})

Cypress.Commands.add('Respostas', (status, message) => {
    cy.get("@response").then(response => {
        expect(response.status).to.equal(status)
        expect(response.body.message).to.equal(message)
    })
})

