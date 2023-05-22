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
  const userC = new User("Tina", "cinema123", 56);
  const userD = new User("Clive", "clive44", 26);
  const userE = new User("George", "Foreman", 44);

  newScooterApp.register(userA);

  test("Check if user is already registered", () => {
    expect(() => newScooterApp.register(userA)).toThrow("Already registered");
  });

  test("Check if user is older than 17", () => {
    expect(() => newScooterApp.register(userB)).toThrow(
      "Too young too register"
    );
  });

  test("check that user gets registered", () => {
    newScooterApp.register(userC);
    expect(newScooterApp.registeredUsers.includes(userC));
  });

  test("User when registered is added to registered users array", () => {
    newScooterApp.register(userD);
  });

  test("has the correct name, password and age", () => {
    expect(userE.username).toBe("George");
    expect(userE.password).toBe("Foreman");
    expect(userE.age).toBe(44);
  });

  test("is not logged in when created", () => {
    expect(userE.loggedIn).toBeFalsy();
  });
  test("has 0 account change when created", () => {
    expect(userE.accountChange).toBe(0);
  });

  test("user is in the registerusers object and their password matches", () => {
    newScooterApp.register(userE);
    newScooterApp.logIn("George", "Foreman");
    expect(userE.loggedIn).toBe(true);
  });
});

//login method
describe("The logIn method", () => {
  const ScooterApp2 = new ScooterApp();
  const userGeorge = new User("George", "Foreman", 44);

  test("user is in the registerUsers object and their password matches", () => {
    ScooterApp2.register(userGeorge);
    ScooterApp2.logIn("George", "Foreman");
    expect(userGeorge.loggedIn).toBe(true);
  });
});

describe("The addScooter method", () => {
  //sample data
  const ScooterApp3 = new ScooterApp();
  const myLovelyNewScooter = new Scooter(
    "Manhattan",
    "SpongeBob",
    50,
    100,
    false,
    true
  );

  //call the method
  ScooterApp3.addScooter("Queens", myLovelyNewScooter);

  test("Scooter station is set to location arg", () => {
    expect(myLovelyNewScooter.station).toBe("Queens");
  });

  test("Scooter added to stations array for that location", () => {
    expect(ScooterApp3.stations.Queens.includes(myLovelyNewScooter)).toBe(true);
  });
});
