import MainMenuPage from "../../pages/MainMenuPage";

const baseURL="https://magento.softwaretestingboard.com/";
const product='tees';

describe("Search product test suite",()=>{
    before(()=>{
        cy.visit(baseURL);
    })
    it("Search product",()=>{
        MainMenuPage.getSearchBar().type(`${product}{enter}`);
        cy.contains('3 Items').should('be.visible');
    });
})