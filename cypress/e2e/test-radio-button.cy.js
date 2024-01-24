describe('Testes de Checkbox', () => {
    beforeEach(() => {
      // Abre a URL antes de cada teste
      cy.visit('https://demoqa.com/radio-button');
    });
  
    it('Deve marcar e desmarcar os radios buttons', () => {

        cy.get('#impressiveRadio').click()

        cy.get('span.text-success').contains('Impressive')
    })

})