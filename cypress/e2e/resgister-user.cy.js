import MainMenuPage from "../../pages/MainMenuPage";
import RegisterPage from "../../pages/RegisterPage";
const { faker } = require("@faker-js/faker");

const baseURL="https://magento.softwaretestingboard.com/";
const firstName=faker.person.firstName();
const lastName=faker.person.lastName();
const mail=faker.internet.email();
const password=faker.internet.password();

describe("Register user test suite",()=>{
    before(()=>{
        cy.visit(baseURL);
    })
    it("Register user",()=>{
        MainMenuPage.getRegisterBtn().click();
        RegisterPage.getFirstName().type(firstName);
        RegisterPage.getLastName().type(lastName);
        RegisterPage.getEmail().type(mail);
        RegisterPage.getPassword().type(password);
        RegisterPage.getConfirmPassword().type(password);
        RegisterPage.getSubmitBtn().click();
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    });
})