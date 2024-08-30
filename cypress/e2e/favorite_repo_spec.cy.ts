describe('Github Repo Searcher', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should search for a user, favorite a repo, and check if it appears in favorites', () => {
    const username = 'gamadv'
    cy.get('input[placeholder="Buscar usuário"]').type(`${username}{enter}`)

    cy.wait(2000)

    cy.url().should('include', `/${username}`)
    cy.get('h2 + p').should('contain.text', username)

    cy.get('ul li:first-child').within(() => {
      cy.get('button[aria-label="Favorite repo"]').click()
    })

    cy.contains('Favoritos').click()

    cy.get('ul').should('contain', 'Aula-Agenda')
  })
})
