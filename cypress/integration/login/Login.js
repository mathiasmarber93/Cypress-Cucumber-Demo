import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const LoginPage = require('../Pages/LoginPage')

Given('A user enters to the login page', () => {
    LoginPage.navigatesTo()
})

When('A user enters the username {string} and password {string}', (username, password) => {
    LoginPage.typeUsername(username)
    LoginPage.typePassword(password1)
})

When('A user enters incorrect credentials', (dataTable) => {
    dataTable.hashes().forEach(row => {
        LoginPage.typeUsername(row.username)
        LoginPage.typePassword(row.password)
    })
})

And('A user click on the login button', () => {
    LoginPage.clickLogin()
})

Then('A user will be logged in', () => {
    LoginPage.verifyUserLoggedIn()
})

Then('The error message {string} is displayed', (message) => {
    LoginPage.elements.errorMessage().should('have.text', message)
})