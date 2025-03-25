const {faker} = require('@faker-js/faker')

Cypress.Commands.add('carrinhoLogar', () => {
    
cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    body: {
        "email": 'fulano@qa.com',
        "password": 'teste'
    }, failOnStatusCode: false
}).then((response) => {
    cy.wrap(response.body.authorization).as('token')
}).then(()=> {
   cy.get('@token').then((token)=> {   
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/carrinhos/cancelar-compra',
        failOnStatusCode: false,
        headers: {
            authorization: token
        }
    })
})
})
    const body = {
        nome: faker.commerce.productName(),
        preco:faker.commerce.price({ min: 1, max: 1000000, dec: 0 }),
        descricao: faker.commerce.productDescription(),
        quantidade: Math.floor(Math.random() * 100000)
};

cy.get('@token').then((token) =>{
cy.request({
    method: 'POST',
    url: 'http://localhost:3000/produtos',
    body: body,
    failOnStatusCode: false,
    headers: {
        authorization: token
    }
})
}).then((response)=> {
    cy.wrap(response.body._id).as('id')
})
    
    })

    Cypress.Commands.add('carrinhoCadastrar', () => {
        cy.get('@token').then((token)=> {
        cy.get('@id').then((id)=>{
 
            
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/carrinhos',
            body:{ "produtos": [{
                "idProduto": id,
                "quantidade": 1
    }]
        }, failOnStatusCode: false,
        headers: {
            authorization: token
        }
        })
    })
    }) .as('response')
    })