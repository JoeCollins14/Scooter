class Scooter {
  // scooter code here
  constructor(station, user, serial, charge, isBroken, docked) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.charge = charge;
    this.isBroken = isBroken;
    this.docked = docked;
  }
  //check if sccoter available and charged/not needing repair
  rent() {
    if (this.isBroken == false && this.charge > 20) {
      this.docked = false;
      console.log("Enjoy the ride");
    } else if (this.charge <= 20) {
      throw new Error("Scooter low on battery, please charge");
    } else {
      throw new Error("Scooter is broken, please send a repair request");
    }
  }
  //sets docking station
  dock(station) {
    if (station == null) {
      throw new Error("Docking station required");
    } else {
      this.station = station;
      this.docked = true;
      this.user = "";
    }
  }

  //recharge scooter's charge to 100
  async recharge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  async requestRepair() {
    console.log("Starting repair");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.isBroken = false;

    console.log("Repair complete");
  }
}

module.exports = Scooter;
