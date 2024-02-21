describe('Testes de Checkbox', () => {
    beforeEach(() => {
      // Abre a URL antes de cada teste
      cy.visit('https://demoqa.com/radio-button');
    });
  
    it('Deve marcar e desmarcar os checkboxes', () => {
      // Verifica se o checkbox "Home" não está marcado inicialmente
      cy.get('#tree-node-home').should('not.be.checked');
  
      // Marca o checkbox "Home"
      cy.get('#tree-node-home').check().should('be.checked');
  
      // Desmarca o checkbox "Home"
      cy.get('#tree-node-home').uncheck().should('not.be.checked');
  
      // Verifica se o checkbox "Desktop" não está marcado inicialmente
      cy.get('#tree-node-desktop').should('not.be.checked');
  
      // Marca o checkbox "Desktop"
      cy.get('#tree-node-desktop').check().should('be.checked');
    });
  });
  