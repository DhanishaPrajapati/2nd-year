class vehicle{
    constructor(vehicleno,drivername,distance){
        this.vehicleno = vehicleno;
        this.drivername=drivername;
        this.distance=distance;

    }
     calculateFare() {
    return 0;
    }
    static displayPlatformName() {
    console.log(" UBER ");
    }
}
class Car extends vehicle {
    constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
    }
    calculateFare() {
    return this.distance * 15;
    }
}
class Bike extends vehicle {
    constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
    }
    calculateFare() {
    return this.distance * 8;
    }
}
vehicle.displayPlatformName();
let car = new Car("Volswagon", "DEE", 10);
let bike = new Bike("Yezdi", "JAZZ", 15);
console.log("Car Fare: ₹ " + car.calculateFare());
console.log("Bike Fare: ₹ " + bike.calculateFare());
