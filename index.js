let store = {
  passengers: [],
  drivers: [],
  trips: []
};
///////driver class
let driverId = 0;
class Driver {

  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips
  }

  passengers() {
    return this.trips().map(trip => trip.passenger())
  }
}

//////passenger class
let passengerId = 0;
class Passenger {

  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips;
  }

  drivers() {
    return this.trips().map(trip => trip.driver());
  }

}

////trip class
let tripId = 0;
class Trip {

  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

}
