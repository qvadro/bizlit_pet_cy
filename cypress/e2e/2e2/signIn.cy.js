/// <reference types="cypress" />

describe('verify sign in', () => {
  beforeEach(() => {
    cy.visit('https://bizlit.com.ua/uk/index.php?route=account/login');
  });

  // Pa$$word!
  it('verify successful login', () => {
    cy.get('#login-email').type('qvadropromotion@gmail.com');
    cy.get('#login-pass').type('Pa$$word!');
    cy.get('#content > div > div > div:nth-child(2) > form > input').click();
    cy.url().should('include', '/account');
  });
});
