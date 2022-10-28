const User = require("./User");
const Scooter = require("./Scooter");
const userC = new User("George", "homehomesweethome", 56);
class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: [],
    };

    this.registeredUsers = {
      username: this.username,
      password: this.password,
      age: this.age,
      loggedIn: false,
      accountChange: 0,
    };
  }

  static scooterSessions = [];

  //methods
  register(user) {
    if (Object.values(this.registeredUsers).includes(user.username)) {
      throw new Error("Already registered");
    } else if (user.age < 17) {
      throw new Error("Too young to register");
    } else {
      Object.keys(this.registeredUsers).push(user);
      console.log("User has been registered");
    }
  }

  // logIn(username, password) {
  //   if (this.registeredUsers.includes(username, password)) {
  //   }
  // }
}

module.exports = ScooterApp;
