import { faker } from '@faker-js/faker'

describe('Api testing Post', () => {

    const requestBodyRandom = {

        name: Math.random().toString(5).substring(2),
        email: Math.random().toString(6).substring(2) + '@gmail.com',
        job: 'employer'

    }

    const requestBodyRandomFaker = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        job: faker.job

    }

    it('Approach - Codes json object', () => {
        const requestBody =
        {
            name: 'matheus',
            job: 'quality engineer'
        }
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        })
            .then((reponse) => {
                expect(reponse.status).to.eq(201)
                expect(reponse.body.name).to.eq(requestBody.name)
                expect(reponse.body.job).to.eq(requestBody.job)


            })
    })

    it('Approach using fixtures', () => {
        cy.fixture('user').then((data) => {
            const requestBody = data
        })

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body).has.property('job', requestBody.job)

            })
    })
})