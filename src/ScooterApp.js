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

    //an array of objects to be
    this.registeredUsers = [];
  }

  static scooterSessions = [];

  //methods
  register(user) {
    //find the object with username as key
    let registeredUser = this.registeredUsers.find((obj) => {
      if (Object.keys(obj).includes(user.username)) {
        return obj;
      }
    });
    //if object found then user already registered
    if (registeredUser) {
      throw new Error("Already registered");
    } else if (user.age < 17) {
      throw new Error("Too young too register");
    } else {
      //if not registered already - register
      let userKey = user.username;
      this.registeredUsers.push({ [userKey]: user });
      console.log("user " + userKey + " has been registered");
    }
  }

  logIn(username, password) {
    //find the object with username as key
    let user = this.registeredUsers.find((obj) => {
      if (Object.keys(obj).includes(username)) {
        return obj;
      }
    });

    if (typeof user !== "undefined") {
      //if object found then reassign the object as the user object so we can work with
      user = user[username];

      //check if username and password match
      if (user.username === username && user.password === password) {
        user.loggedIn = true;
        this.registeredUsers[username] = user;
        console.log("login successful");
      } else {
        throw new Error("Username or password was incorrect");
      }
    } else {
      throw new Error("Username or password was incorrect");
    }
  }

  addScooter(location, scooter) {
    scooter.station = location;
    //need to dynamically assign with square brackets
    this.stations[location].push(scooter);
  }

  removeScooter(scooterToRemove) {
    serialNum = scooterToRemove.serial;
    location = scooterToRemove.location;
  }
}

module.exports = ScooterApp;
// && password == this.password
