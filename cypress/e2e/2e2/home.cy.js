/// <reference types="cypress" />

describe('verify home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('verify `welcome` title', () => {
    cy.contains('.text', 'Друзі, ми працюємо').should('exist');
  });

  it('verify logo in the header', () => {
    cy.get('.logo').click();
    cy.url().should('equal', 'https://bizlit.com.ua/');
  });

  it('verify header', () => {
    cy.contains('a', 'Про нас')
      .should('have.attr', 'href')
      .and('include', 'uk/about-us.html');

    cy.contains('a', 'Оплата')
      .should('have.attr', 'href')
      .and('include', 'uk/oplata-dostavka.html');

    cy.contains('a', 'Часті питання')
      .should('have.attr', 'href')
      .and('include', 'uk/chastye-voprosy.html');

    cy.contains('a', 'Контакти')
      .should('have.attr', 'href')
      .and('include', 'uk/index.php?route=information/contact');
  });

  it('verify Personal Area', () => {
    cy.get('#header > .private.abs').should('exist').click();
    cy.contains('a', 'Увійти').should('exist');
    cy.contains('a', 'Зареєструватися').should('exist');
  });

  it('verify navigation bar', () => {
    cy.contains('a', 'Акції').should('exist');
    cy.contains('a', 'Бестселери').should('exist');
    cy.contains('a', 'Новинки').should('exist');
    cy.contains('a', 'Автори').should('exist');
    cy.contains('a', 'Видавництва').should('exist');
  });

  it('verify book category names', () => {
    cy.get('.h3').should('contain.text', 'Новинки');
    cy.get('.h3').should('contain.text', 'Бестселери');
    cy.get('.h3').should('contain.text', 'Незабаром у продажу');
    cy.get('.h3').should('contain.text', 'Дитяча література');
    cy.get('.h3').should('contain.text', 'Зроблено в Україні');
    cy.get('.h3').should('contain.text', 'Популярные товары');
    cy.get('.h3').should('contain.text', 'Зроблено в Україні');
    cy.get('.h3').should('contain.text', 'Останні відгуки');
    cy.get('.h3').should('contain.text', 'Ласкаво просимо в наш магазин');
  });

  it('verify information about the benefits', () => {
    cy.get('#content > div.main-adv.kh').should(
      'contain.text',
      'Дешевше не знайдеш'
    );
    cy.get('#content > div.main-adv.kh').should(
      'contain.text',
      'Тільки оригінальні книги'
    );
    cy.get('#content > div.main-adv.kh').should(
      'contain.text',
      'Безкоштовна доставка від 1000 грн'
    );
  });

  it('verify social media icons in the footer', () => {
    cy.get('.footer-info > ul > li.fb > a')
      .should('have.attr', 'href')
      .and('include', 'facebook.com/bizlitbooks');

    cy.get('.footer-info > ul > li.ig > a')
      .should('have.attr', 'href')
      .and('include', 'instagram.com/bizlitbooks');
    //1
    cy.get('.footer-info > ul > li.tm > a')
      .should('have.attr', 'href')
      .and('include', 't.me/bizlitbook');
  });
});
