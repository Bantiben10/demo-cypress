import Login  from "../PageObjectModel/Login.js"



describe('Log in of user', () => {
  it('Log in Successfully', () => {
    cy.login()
  })
})