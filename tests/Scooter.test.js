const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  const scooter1 = new Scooter("Manhattan", "JoeCo", 50, 100, false, true);

  test("The scooter's station is correct ", () => {
    expect(scooter1.station).toBe("Manhattan");
  });
  test("The scooter's user is correct ", () => {
    expect(scooter1.user).toBe("JoeCo");
  });
  test("The scooter's serial is correct ", () => {
    expect(scooter1.serial).toBe(50);
  });
  test("The scooter's charge is correct ", () => {
    expect(scooter1.charge).toBe(100);
  });
  test("The scooter's isBroken status is correct ", () => {
    expect(scooter1.isBroken).toBe(false);
  });
  test("The scooter's docked status is correct ", () => {
    expect(scooter1.docked).toBe(true);
  });
});

//Method tests
//rent method
describe("scooter method rent", () => {
  // tests here!
  const scooterA = new Scooter("Manhattan", "Steve", 1, 100, false, true);
  const scooterB = new Scooter("Manhattan", "Steve", 2, 10, false, true);
  const scooterC = new Scooter("Manhattan", "Steve", 2, 30, true, false);

  test("The rent method with charge and isBroken args both acceptable", () => {
    scooterA.rent();
    expect(scooterA.docked).toBe(false);
  });

  test("The rent method with charge NOTacceptable and isBroken acceptable", () => {
    expect(() => scooterB.rent()).toThrow(
      "Scooter low on battery, please charge"
    );
  });

  test("If params are not applicable", () => {
    expect(() => scooterC.rent()).toThrow(
      "Scooter is broken, please send a repair request"
    );
  });
});

//dock method
describe("scooter dock method", () => {
  //sample data
  const scooterD = new Scooter("Manhattan", "Steve", 1, 100, false, false);

  test("If no arg passed, throw error", () => {
    expect(() => scooterD.dock()).toThrow("Docking station required");
  });

  test("If station passed, set docked to true", () => {
    scooterD.dock("Manhattan");
    expect(scooterD.docked).toBe(true);
  });

  test("If station passed, set user to empty string", () => {
    scooterD.dock("Manhattan");
    expect(scooterD.user).toBe("");
  });
});

//recharge method
describe("Scooter recharge method", () => {
  //sample data
  const scooterE = new Scooter("Manhattan", "Steve", 1, 90, false, true);

  test("charge method waits >= 2secs and displays message to console charge complete", async () => {
    await scooterE.recharge(); // we need to wait for the charge!
    expect(scooterE.charge).toBe(100);
  });
});

//requestRepair method
describe("Scooter requestRepair method", () => {
  //sample data
  const scooterF = new Scooter("Manhattan", "Steve", 1, 90, true, true);

  test("Uses a set interval timer to log message of complete repair and set isBroken to false", async () => {
    await scooterF.requestRepair();
    expect(scooterF.isBroken).toBe(false);
  });
});
