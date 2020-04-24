/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    
    it('My First Test Case', function() {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
//checkboxy

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])      //('tagname[attribute="value"]) - zaznaczanie kilku

//okragłe przyciski zaznaczania

cy.get('[value="radio2"]').check().should('be.checked')

//statyczne menu rozwijane

cy.get('select').select('option2').should('have.value','option2')

//dynamiczne menu rozwijane i autouzupełnianie

cy.get('#autocomplete').type('pol')

cy.get('.ui-menu-item div').each(($el, index, $list) => {

    if($el.text()==="Poland")
    {
        $el.click()
    }
})

cy.get('#autocomplete').should('have.value','Poland')

//testowanie ukrywania i pokazywania elementów na stronie

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
})



})