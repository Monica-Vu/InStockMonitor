context('Mwave', () => {
    it('EVNNE Album In Stock', () => {
        cy.visit("https://shop.mwave.me/en/signed-cd.html")

        cy.get("section.center-section").should('include.text', 'EVNNE')

    })
})