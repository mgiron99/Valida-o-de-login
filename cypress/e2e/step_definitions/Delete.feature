Feature: Deletar produto

Scenario: Deletar produto com sucesso

Given Logar e criar um produto
When Deletar o produto criado
Then Deve deletar o produto com sucesso
