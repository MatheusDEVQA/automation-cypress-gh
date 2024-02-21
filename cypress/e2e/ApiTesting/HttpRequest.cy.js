describe('HTTP Request Test', () => {

    it('Get call', ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })
})