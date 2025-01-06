describe("Login", () => {
  const email = Cypress.env("USER_EMAIL");
  const password = Cypress.env("USER_PASSWORD");
  it("successfully logs in", () => {
    cy.guiLogin()
    cy.contains("a", "Create a new note").should("be.visible");
  });
});
