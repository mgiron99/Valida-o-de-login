Feature: Validação de cadastro

Scenario: Validar cadastro de produto
Given Realizar login, obter o token e construir produto
When Deve cadastrar um produto novo
Then Deve cadastrar o produto com sucesso

Scenario: Validar cadastro de usuario
Given Deve gerar um usuario
When Deve cadastrar um usuario
Then Deve cadastra um usuario com sucesso

