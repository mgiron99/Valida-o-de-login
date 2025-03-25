Feature: Buscar produto

Scenario: Criar um produto e puxar ele no sistema
Given Criar um produto novo e capturar o ID
When Buscar o produto novo pelo ID
Then Ter a busca realizada com sucesso status e nome