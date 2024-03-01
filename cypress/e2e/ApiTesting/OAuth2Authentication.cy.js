describe('Api test OAuth2 Authentication', () =>{
    it('Get Oauth2 token', () =>{
        cy.request({
            method: 'POST',
            url: '',
            qs: {

            }
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            const param = response.body.split("&")
            accessToken=params[0].split("=")[1];
            cy.log("Generated token is:"+accessToken);
        })
    } )
})