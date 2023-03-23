describe('Login Marketplace Ralali', () => {
    it('Login Marketplace with valid credentials', () => {
        cy.visit('/')
        cy.get('.Statistics__WrapperButton-rnjxqw-6 > .Button__StyledButton-sc-1l9x0nw-0').scrollIntoView() 
        cy.get('.Statistics__WrapperButton-rnjxqw-6 > .Button__StyledButton-sc-1l9x0nw-0').click()
        cy.get('.RegisterForm__HeaderSection-sc-1ofjgrt-1 > .Typography__RegularH6-j4gzfj-11 > .RegisterForm__StyledLinkText-sc-1ofjgrt-8').click()
        cy.get('[data-testid="input-username"]').type('testdesy11@gmail.com')
        cy.get('[data-testid="input-password"]').type('Desy@123')
        cy.get('[data-testid="button-submit"]').click()
        cy.contains('Test Desy')
    })
  })