/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{  
    it('My First Test Case', function() {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Miłość w czasach zarazy",
            "isbn":"bcggsss",
            "aisle": "22s7",
            "author": "Gabriel García Márquez"
    }).then(function(response)
    {
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
    })

})
})