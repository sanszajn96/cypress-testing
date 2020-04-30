/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    
    it('My First Test Case', function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//pop-up's alerty i potwierdzenia

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert', (str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
}) 
cy.on('window:confirm', (str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


//otwieranie nowych stron na tej samej zakładce (cypress nie obsługuje stron otwartych w nowych zakładkach)

cy.get('#opentab').invoke('removeAttr','target').click()

//powrót do poprzedniej strony; nawigacja w przeglądarce
//najpierw trzeba sprawdzić czy udało się poprawnie otworzyć nową stronę

cy.url().should('include','rahulshettyacademy')

cy.go('back')  //wstecz






    })




})