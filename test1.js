/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    
    it('My First Test Case', function() {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //nawigacja do adresu url - cy.visit
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like FindElement of selenium
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)  //cypress obsługuje tylko selektory css
//Parent child chaining
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4) //aliasing to reused locators
cy.get(':nth-child(3) > .product-action > button').click()
cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click().then(function()
{
    console.log('sf')
})
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg=$el.find('h4.product-name').text() //resolve for text command
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})

//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand').then(function(logoelement) //cypress nie potrafi rozwiązać komend nie należących do niego - rozwiązuje się je za pomocą .then
{
    cy.log(logoelement.text())  // .text is not cypress command
})
const logo=cy.get('.brand')

    }   )





    }   )