describe('HTTP Request Test', () => {

    it('Get call', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200)
    })

    it('Post call', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body:
            {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        })
            .its('status')
            .should('equal', 201)
    })
})
