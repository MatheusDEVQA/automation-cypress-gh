describe('Parsing JSON Response', () =>{
    
    it('PArsing json response', () =>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].title).to.eq('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
        })
    })

    it('Parsing json and forEach', ( ) =>{
        let priceTotal
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit : 3}
        })
        .then((response) =>{
            expect(response.status).to.eq(200)

            response.body.forEach(element => {
                priceTotal = element.price + priceTotal
            })
            expect(priceTotal).to.eq(188.24)
        })
    })


})