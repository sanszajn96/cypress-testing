/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
describe('My First Test Suite', function() 
{
    
        before(function() {
          // runs once before all tests in the block
          cy.fixture('example').then(function(data)
          {
this.data=data
          })
        })

it('My First Test Case', function() {
  
const homePage=new HomePage()
const productPage=new ProductPage()
            cy.visit(Cypress.env('url')+"/angularpractice")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')

        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()
        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName
        this.data.productName.forEach(function(element) {

            cy.selectProduct(element)
        });
        productPage.checkOutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

          const amount=$el.text()
          var res= amount.split(" ")
          res= res[1].trim()
          sum= Number(sum)+Number(res)
        }).then(function()
        {
          cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
          const amount=element.text()
          var res= amount.split(" ")
          var total= res[1].trim()
          expect(Number(total)).to.equal(Number(sum))
        })
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type("Poland")
        cy.get('.suggestions > ul > li > a').click()
        cy.wait(1000)
        cy.get('.checkbox').click({force:true})
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(function(element)
        {
          const actualText=element.text()
          expect(actualText.includes("Success")).to.be.true
        })
      
      })







})









