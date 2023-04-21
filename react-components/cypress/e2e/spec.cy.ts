/// <reference types="cypress" />

describe('Checking everything ', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('checks Main page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'Main').click();
    cy.url().should('include', '/');
    cy.get('header').contains('a', 'Main');
  });

  it('checks Form page link works', () => {
    cy.visit('/form');

    cy.get('header').contains('a', 'Create card').click();
    cy.url().should('include', '/form');
    cy.get('header').contains('a', 'Create card');
  });

  it('checks About page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('header').contains('a', 'About');
  });

  it('should render h1 tag with correct text', () => {
    cy.visit('/about');
    const text = 'We know all about lorem';
    cy.get('h1').contains(text);
  });

  it('should render h2 tag with correct text', () => {
    cy.visit('/form');
    const text = 'Form for creating a new card';
    cy.get('h2').contains(text);
  });

  it('should render h3 tag with correct text', () => {
    cy.visit('/form');
    const text = 'React Components © 2023 Designed by Aleksander Rudenko';
    cy.get('h3').contains(text);
  });

  it('should shown 8 cards by default value search', () => {
    cy.visit('/');
    cy.get('[aria-label="cards"]').should('have.length', 8);
  });

  it('should display the card details when loaded', () => {
    cy.visit('/');

    cy.get('[data-testid="cardsWrapper"]').should('exist');
    cy.get('li:first').click();
    cy.get('[data-testid="cardModal"]').should('exist');

    cy.get('[aria-label="modalImage"]').should('exist');
    cy.get('[aria-label="modalNickname"]').should('exist');
    cy.get('[aria-label="modalName"]').should('exist');
    cy.get('[aria-label="modalAge"]').should('exist');
    cy.get('[aria-label="modalRelationship"]').should('exist');
    cy.get('[aria-label="modalPhotos"]').should('exist');
    cy.get('[aria-label="modalCollections"]').should('exist');
    cy.get('[aria-label="modalCreate"]').should('exist');
  });

  it('should close the modal when the close button is clicked', () => {
    cy.visit('/');

    cy.get('[data-testid="cardsWrapper"]').should('exist');
    cy.get('li:first').click();
    cy.get('[data-testid="cardModal"]').should('exist');
    cy.get('[data-testid="modal-overlay"]').should('exist');
    cy.get('[aria-label="close"]').click();
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
  });

  it('should set search input value and dispatch search action on submit', () => {
    cy.visit('/');
    const searchTerm = 'dark blue';
    cy.get('[aria-label="Search..."]').type(searchTerm);
    cy.get('[aria-label="Search by site"]').click();
    cy.get('[aria-label="cards"]').should('have.length', 8);
  });

  it('should show message when nothing was found', () => {
    cy.visit('/');
    const searchInvalidValue = 'asdawdd';
    cy.get('[aria-label="Search..."]').type(searchInvalidValue);
    cy.get('[aria-label="Search by site"]').click();
    cy.get('[aria-label="cards"]').should('not.exist');
    cy.get('[aria-label="notFoundCards"]').contains('It looks like nothing was found...');
  });

  it('should display an error message if the name field is not filled in', () => {
    cy.visit('/form');
    cy.get('[data-testid=name-input]').should('not.exist');
    cy.get('[type=submit]').click();
    cy.get('[data-testid=name-input]').should('be.visible');
    cy.get('[data-testid=name-input]').contains('Required field.');
  });

  it('should submit the form when all fields are filled in and check the finished card', () => {
    cy.visit('/form');

    cy.get('[aria-label="name"]').type('Alex Rud');
    cy.get('[aria-label="date"]').type('1990-01-01');
    cy.get('[aria-label="eye"]').select('blue');
    cy.get('[aria-label="age"]').type('30');
    cy.get('[aria-label="messengers0"]').check();
    cy.get('[aria-label="messengers1"]').check();
    cy.get('[aria-label="gender0"]').check();
    cy.get('[type=file]').selectFile('cypress/fixtures/test-image.jpg');
    cy.get('[type=submit]').click();
    cy.get('[data-testid="success-message"]').should('be.visible');
    cy.get('[aria-label="cards"]').should('be.visible');

    cy.wait(3000);

    cy.get('[aria-label="cardForm"]').should('have.length', 1);
    cy.get('[aria-label="spanName"]').should('have.text', 'Alex Rud');
    cy.get('[aria-label="spanBirthday"]').should('have.text', '01/01/1990');
    cy.get('[aria-label="spanAge"]').should('have.text', '30');
    cy.get('[aria-label="spanEyeColor"]').should('have.text', 'blue');
    cy.get('[aria-label="spanMessenger"]').should('have.length', 2);
    cy.get('[aria-label="spanGender"]').should('have.text', 'Male');
    cy.get('[aria-label="spanImage"]')
      .should('have.attr', 'src')
      .then((dataUrl) => {
        cy.get('[aria-label="spanImage"]').should('have.attr', 'src', dataUrl);
      });
    cy.get('[aria-label="spanImage"]').should('have.attr', 'alt').should('include', 'Alex Rud');
  });

  it('displays Error 404 message', () => {
    cy.visit('/randompath');
    cy.contains('Error 404').should('be.visible');
  });

  it('Some kind of crutch', () => {
    expect(true).to.equal(true);
  });
});
