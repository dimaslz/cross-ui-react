describe('Visual Regression Example', () => {
  it('should display the home page correctly', () => {
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('.Demos').compareSnapshot('home');
  });
});
