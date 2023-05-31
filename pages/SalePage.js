class SalePage{
    getBrasAndTanks()
    {
        return cy.get('div.categories-menu li:nth-child(4)').contains('Bras & Tanks');
    }
}

export default new SalePage();