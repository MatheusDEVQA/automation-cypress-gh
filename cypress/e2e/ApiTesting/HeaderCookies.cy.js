
describe('Api testing hearde and cookies', () => {

    let token

    before('Create acceess token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            hearders: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: 'Matheus',
                clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
            }
        })
        .then((response) => {
            token = response.body.accessToken
        })
    })

    it('Create new order', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            hearders: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: {
                "bookId": 1,
                    "customerName": "Matheus"
            }
        })
        .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)
        })
    })
    it('Fetching the orders', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            hearders:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            cookies:{
                'cookieName': 'mycookie'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
        })
    })
})