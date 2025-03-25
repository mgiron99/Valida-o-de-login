Feature: Validar carrinho

Scenario: Validar adicionar produto no carrinho

Given Deve fazer login e cadastrar um produto
When Deve adicionar o produto no carrinho
Then Deve receber a mensagem cadastro realizado com sucesso