import { BasePage } from "./BasePage"

class Login {

    constructor() {

        this.email = '#input-email'
        this.password = '#input-password'
       
    
    }

     Login() {
        cy.contains('My Account').click()
        cy.contains('Login').click()
        cy.get(this.email).type(Cypress.env('username'))
        cy.get(this.password).type(Cypress.env('password'))
        BasePage.submit()
        
    
    }  
    



}

export default new Login()

