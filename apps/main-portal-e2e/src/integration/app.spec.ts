import { getGreeting } from '../support/app.po';

describe('main-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to main-portal!');
  });
});
