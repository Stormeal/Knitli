/// <reference types="cypress" />
const baseUrl = "http://localhost:4200";

describe("Page Load", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("displays logo and company name in the header", () => {
    cy.title().should("eq", "Knitli - By crafters to crafters");
    cy.get(".logo")
      .should("have.attr", "alt")
      .then((alttext) => {
        expect(alttext.length).not.to.be.greaterThan(160);
      });
    cy.get(".logo-text-wrapper").should("contain", "Knitli");
  });
});

// describe("Header", () => {
//   beforeEach(() => {
//     cy.visit(baseUrl);
//   });
//   it("gets navigation bar", () => {
//     cy.get("header").should("have.class", "knitli-headers");
//     cy.get("[id^=knitli_menu]");
//   }),
//     it("checks each link in header", () => {
//       cy.get("div").should("have.class", "menu-wrapper");
//       cy.get("[id^=home");
//       cy.get("[id^=about");
//       cy.get("[id^=features");
//       cy.get("[id^=screenshots");
//       cy.get("[id^=team");
//       cy.get("[id^=news");
//       cy.get("[id^=contact");
//     });
// });
