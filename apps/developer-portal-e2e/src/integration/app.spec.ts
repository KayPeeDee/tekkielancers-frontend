import { getGreeting } from '../support/app.po';

describe('developer-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to developer-portal!');
  });
});
