describe('Api test OAuth2 Authentication', () => {
    it('Get Oauth2 token', () => {
        cy.request({
            method: 'POST',
            url: '',
            qs: {

            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                const param = response.body.split("&")
                accessToken = params[0].split("=")[1];
                cy.log("Generated token is:" + accessToken);
            })
    })
    it("OAuth2.0 request Get", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
            .then((response) => {

                expect(response.status).to.eq(200);
                expect(response.body[0].id).to.equal(201070920);

            })
    })
})