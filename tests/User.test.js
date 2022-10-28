const User = require("../src/User");

// User tests here
describe("The User class", () => {
  //sample data
  const user1 = new User("JoeCo", "password123", "29");

  // test username
  test("The User's username is correct ", () => {
    expect(user1.username).toBe("JoeCo");
  });

  // test password
  test("The User's password is correct ", () => {
    expect(user1.password).toBe("password123");
  });
  // test age
  test("The User's age is correct ", () => {
    expect(user1.age).toBe("29");
  });
});
