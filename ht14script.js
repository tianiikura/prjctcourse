class Vehicle {
    brand;
    yearOfGraduation;

    constructor(brand, yearOfGraduation) {
        this.brand = brand;
        this.yearOfGraduation = yearOfGraduation;
    }
   
}

class Car extends Vehicle {
    carClassification;
    engineType;
    carMileage;

    constructor (brand, yearOfGraduation, carClassification, engineType, carMileage) {
        super(brand, yearOfGraduation);
        this.carClassification = carClassification;
        this.engineType = engineType;
        this.carMileage = carMileage;
    }

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

    constructor (brand, yearOfGraduation, bicycleClassification, isElectric) {
        super(brand, yearOfGraduation);
        this.bicycleClassification = bicycleClassification;
        this.isElectric = isElectric;
    }

    getWeel () {
        return 2;
    }

    pedal() {
        return "Rush-rush-rush"
    }
}