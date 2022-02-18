class LoginPage {

    elements = {
        visitUrl: () => cy.visit('/'),
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3'),
        urlLoggedIn: () => cy.url()
    }

    navigatesTo(){
        this.elements.visitUrl();
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    verifyUserLoggedIn() {
        let _loggedInPath = '/inventory.html'
        this.elements.urlLoggedIn().should('contain', _loggedInPath)
    }

    /*verifyUserLockedOutMessage() {
        let _message = 'Epic sadface: Sorry, this user has been locked out.'
        this.elements.errorMessage().should('have.text', _message)
    }*/

}

module.exports = new LoginPage();