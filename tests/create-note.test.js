const { spec } = require("pactum");
const { faker, base } = require("@faker-js/faker");

const baseURL = "https://practice.expandtesting.com/notes/api";
const validUser = {
  name: "Velicu Marius",
  email: faker.internet.email(),
  password: faker.internet.password(),
};
const userCreds = {
  email: validUser.email,
  password: validUser.password,
};
const noteBody = {
  title: "New Title",
  description: "New Description",
  category: "Home",
};

describe("Create a note tests suites", () => {
  let token = "";
  it("Register user", async () => {
    await spec()
      .post(baseURL + "/users/register")
      .withBody(validUser)
      .expectStatus(201)
      .expectBodyContains("User account created successfully");
  });
  it("Login user", async () => {
    const resp = await spec()
      .post(baseURL + "/users/login")
      .withBody(userCreds)
      .expectStatus(200)
      .expectBodyContains("Login successful");
    token = resp.body.data.token;
  });
  it("Create a note", async () => {
    await spec()
      .post(baseURL + "/notes")
      .withHeaders("x-auth-token", token)
      .withBody(noteBody)
      .expectStatus(200)
      .expectBodyContains("Note successfully created");
  });
});
