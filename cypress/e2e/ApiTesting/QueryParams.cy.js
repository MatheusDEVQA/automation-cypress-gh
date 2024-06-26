describe('API testtin with param', () =>{
    it('Passing parameters', () =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                page: 2
            }
                   
        })
        .then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data).has.length(6)
            expect(response.body.data[2]).have.property('id', 9)
            expect(response.body.data[0]).has.property('first_name','Michael')
        })
    })
})