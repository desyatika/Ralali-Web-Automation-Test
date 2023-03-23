describe('Register Marketplace Ralali', () => {
    it('Register Marketplace with valid credentials', () => {
        cy.visit('/')
        cy.get('.Statistics__WrapperButton-rnjxqw-6 > .Button__StyledButton-sc-1l9x0nw-0').scrollIntoView() 
        cy.get('.Statistics__WrapperButton-rnjxqw-6 > .Button__StyledButton-sc-1l9x0nw-0').click()
        cy.get('[data-testid="card-Individu"]').click()
        cy.get('[data-testid="input-fullname"]').type('Test Ralali Desy')
        cy.get('[data-testid="input-username"]').type('087860442425')
        cy.get('[data-testid="checkbox-agreement"] > span').click()
        cy.get('[data-testid="button-submit"]').click()
        cy.get('[data-testid="channel-whatsapp"]').click()
        cy.get('.Typography__BoldH2-j4gzfj-2')
    })
  })