class BrasAndTanksPage{
    getItemFormPage(index)
    {
        return cy.get(`div[class="products wrapper grid products-grid"] li:nth-child(${index})`);
    }
}

export default new BrasAndTanksPage();