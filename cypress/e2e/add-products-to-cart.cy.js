import BrasAndTanksPage from "../../pages/BrasAndTanksPage";
import CustomiseOrderPage from "../../pages/CustomiseOrderPage";
import MainMenuPage from "../../pages/MainMenuPage";
import SalePage from "../../pages/SalePage";

const baseURL="https://magento.softwaretestingboard.com/";

describe("Add product to cart test suite",()=>{
    before(()=>{
        cy.visit(baseURL);
    })
    it("Add product to cart",()=>{
        MainMenuPage.getSaleBtn().click();
        SalePage.getBrasAndTanks().click();
        BrasAndTanksPage.getItemFormPage(1).click();
        CustomiseOrderPage.getSize(4).click();
        CustomiseOrderPage.getColor(1).click();
        CustomiseOrderPage.getQty(5);
        CustomiseOrderPage.getAddProductToCartBtn().click();
        cy.contains('You added Breathe-Easy Tank to your shopping cart.').should('be.visible');
    });
})