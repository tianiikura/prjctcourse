class Vehicle {
    constructor(brand, yearOfGraduation) {
        this.brand = brand;
        this.yearOfGraduation = yearOfGraduation;
    }
   
}

class Car extends Vehicle {
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