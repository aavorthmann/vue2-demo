describe('testing landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('submit github user and await response', () => {
    cy.intercept( 'GET', 'https://api.github.com/users/octocat', []).as('getOctocatData')
    cy.get('[data-cy="submitUser"]').click()
    cy.wait('@getOctocatData').should('not.equal', '')
  })

  it('check that the user and repo elements are visible', () => {
    cy.get('[data-cy="submitUser"]').click()
    cy.get('[data-cy="userInfo"]').should('be.visible')
    cy.get('[data-cy="repoList"]').should('be.visible')
  } )

  it('clear user input and ensure elements are not visible', () => {
    cy.get('[data-cy="userInput"]').clear()
    cy.get('[data-cy="userInput"]').should('have.value', '')
    cy.get('[data-cy="userInfo"]').should('not.be.visible')
    cy.get('[data-cy="repoList"]').should('not.be.visible')
  })

  it('add user input and submit', () => {
    cy.get('[data-cy="userInput"]').clear()
    cy.get('[data-cy="userInput"]').type('octocat')
    cy.get('[data-cy="userInput"]').should('have.value', 'octocat')
    cy.get('[data-cy="submitUser"]').click()
  })
  
  it('open Octocat modal, await data response, and close modal',  () => {
    cy.intercept( 'GET', 'https://raw.githubusercontent.com/octocat/hello-worId/master/README.md', []).as('getReadMe')
    cy.get('[data-cy="openOctocatModal"]').click()
    cy.wait('@getReadMe').should('not.equal', '')
    cy.get('[data-cy="closeOctocatModal"]').click()
  }) 
  
  it('get repo root files and load in external tabs', () => {
    cy.get('[data-cy="submitUser"]').click()
    // cy.get('[data-cy="repoName"]').click({ multiple: true })
  })
  
  it('click "About HeroDevs" button on home page', () => {
    cy.get('[data-cy="aboutButton"]').click()
    cy.url().should('include', '/about.html')
  })
})

describe('testing about page', () => {
  beforeEach(() => {
    cy.visit('/about.html')
  })
  it('load modal and ensure element is visible', () => {
    cy.get('[data-cy="modal"]').click()
    cy.get('[data-cy="modalContent"]').should('have.css', 'display', 'block')
    cy.get('[data-cy="closeModal"]').click()
    cy.get('[data-cy="modalContent"]').should('have.css', 'display', 'none')
  })
  
  it('returns home from about page', () => {
    cy.get('[data-cy="home"]').click()
    cy.url().should('include', '/')
  })
})
