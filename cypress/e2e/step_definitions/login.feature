Feature: Login 

Scenario: Validate Login
Given The user need to have a valid email and password
When I have to type the email and password in the system
Then I have a sucessful login

Scenario: Validate incorrect password
Given The user need to have a valid email and password
When The user have to type a incorrect password
Then The user will be notify about the incorrect password

Scenario: Validate invalid login
Given The user need to have a valid email and password
When The user have to type a invalid email
Then The user will be notify about the invalid email

Scenario: Validate blank password
Given The user need to have a valid email and password
When The user have forget to type the password
Then The user will be notify about blank password

Scenario: Validate wrong email 
Given The user need to have a valid email and password
When The user have type a invalid email
Then The user will be notify about invalid email