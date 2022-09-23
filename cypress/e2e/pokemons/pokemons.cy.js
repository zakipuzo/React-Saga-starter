describe("test Pokemons app", () => {
  beforeEach(() => {
 
    cy.visit("http://localhost:5173");
  });

  it("displays app name ", () => {
 
    cy.get("#app_name").should("have.text", "Pokemons");
  });

  it("loads new pokemons on scroll to the bottom", () => {

    let countOfElements = 0;
    cy.get(".pokemon").then(($elements) => {
      countOfElements = $elements.length;
    });
    cy.scrollTo("bottom");
    cy.wait(2000) 
    cy.get(".pokemon").then(($elements) => { 
      expect(countOfElements).not.equal($elements.length) 
    });
  });
  it("it shows pokemon modal with data", () => {
 
    cy.get(".pokemon").then(($elements) => {
      $elements[0].click();
      cy.wait(2000);
      cy.get("#modal_pokemon_name").should('not.be.empty')
    });
    
  });
});
