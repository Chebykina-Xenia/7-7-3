describe("API tests petstore.swagger", () => {
  it("User creation", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: 1,
        username: "Ivan",
        firstName: "Ivanov",
        lastName: "Ivanovich",
        email: "ivan.com",
        assword: "123I",
        phone: "11-11-11",
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("User update", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Inan",
      username: "Ivan",
      body: {
        id: 1,
        username: "Ivan",
        firstName: "Ivanov",
        lastName: "Chebykin",
        email: "ivan.com",
        assword: "123I",
        phone: "11-11-11",
        userStatus: 0,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("User delete", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: 2,
        username: "Lena",
        firstName: "Ivanov",
        lastName: "Alexeevna",
        email: "lena.com",
        assword: "123L",
        phone: "12-12-12",
        userStatus: 0,
      },
    });

    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Lena",
      username: "Lena",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
