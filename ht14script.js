class Vehicle {
    brand;
    yearOfGraduation;
   
}

class Car extends Vehicle {
    carClassification;
    engineType;
    carMileage;

    getWeel () {
        return 4;
    }

    getCarMileage () {
        return this.carMileage;
    }

}

class Bicycle extends Vehicle {
    bicycleClassification;
    isElectric;

    getWeel () {
        return 2;
    }

    pedal() {
        return "Rush-rush-rush"
    }
}