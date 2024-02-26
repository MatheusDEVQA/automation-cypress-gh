const ajv = require('ajv')()

describe('Validation schema json', ()=>{

    it('Validated json schema reponse', () =>{
        cy.request('GET', "https://fakestoreapi.com/products")
    })
    .then((response) =>{
        cy.fixture('schemaValidation').then((data) =>{
            const schema = data
        })

        const validate = ajv.compile(schema)
        const isSchemaValid = validate(response.body)
        expect(isSchemaValid).to.be.true
    })
})
