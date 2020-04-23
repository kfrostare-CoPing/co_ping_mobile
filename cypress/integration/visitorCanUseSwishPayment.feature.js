describe("Visitor can", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/pongs/**",
      response: "fixture:completed_request_details.json"
    });
    cy.route({
      method: "POST",
      url: "**/auth/**",
      response: "fixture:user_login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:user_login.json"
    });
    cy.visit("/");
    cy.window().then(window => {
      window.store.dispatch({
        type: "AUTHENTICATE",
        payload: { authenticated: true, userId: 1, communityStatus: "accepted" }
      });
    });
    cy.get("#request-button").click();
  });

  it("see total cost on their pong", () => {
    cy.get("#total-cost").should("contain", "25,80 sek").pause()
    cy.get("#swish-button").click();
    cy.get("#swish-message").should("contain", "Paid");
  });
});
