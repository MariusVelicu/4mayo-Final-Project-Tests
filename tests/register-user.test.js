const { spec } = require("pactum");
const { faker } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";
const validUser = {
  name: "Velicu Marius",
  email: faker.internet.email(),
  password: faker.internet.password(),
};
const invalidUser = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

describe("Register user tests suites", () => {
  it("Register valid user", async () => {
    await spec()
      .post(baseURL + "/users/register")
      .withBody(validUser)
      .expectStatus(201)
      .expectBodyContains("User account created successfully");
  });

  it("Register invalid user", async () => {
    await spec()
      .post(baseURL + "/users/register")
      .withBody(invalidUser)
      .expectStatus(400)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
