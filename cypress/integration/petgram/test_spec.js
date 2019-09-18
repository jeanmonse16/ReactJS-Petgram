/* global describe, it, cy */

describe("Petgram", function (){
    it("Para ver si la app funciona", function (){
      cy.visit("/")
    })

    it("navegamos a una categoria y obtenemos un elemento html", function(){
        cy.visit("/pet/1")
        cy.get("article")
    })

    it("si podemos ir al home con la navbar", function(){
        cy.visit("/pet/1")
        cy.get("nav a").first().click()
        cy.url().should("include", "/")
    })
    it("los usuarios no registrados ven los formularios de registro de usuario al intentar ir a favs", function(){
        cy.visit("/favs")
        cy.get("form").should("have.length", 2)
    })
})