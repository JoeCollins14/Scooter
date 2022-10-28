const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here

// register user
describe("The sccooterApp register method", () => {
  //sample data
  const newScooterApp = new ScooterApp();
  const userA = new User("Bob", "Bobbyyy1", 33);
  const userB = new User("Tash", "Mydogisbest", 16);

  newScooterApp.register(userA);

  test("Check if user is already registered", () => {
    expect(() => newScooterApp.register(userA)).toThrow("Already registered");
  });

  test("Check if user is older than 17", () => {
    expect(() => newScooterApp.register(userB)).toThrow(
      "Too young to register"
    );
  });
});

// // log in
// describe("Login scooter method", () => {
//   //sample data
//   const newScooterApp2 = new ScooterApp();
//   const userJoe = new User("JoeJoe", "WasAMan", 33);
//   newScooterApp2.register(userJoe);

//   test("User check of in registeredUsers array false", () => {
//     expect(() =>
//       newScooterApp2.logIn(userJoe.username, userJoe.password)
//     ).toThrow("Username or password incorrect");
//   });
// });

// add scooter

// remove scooter
