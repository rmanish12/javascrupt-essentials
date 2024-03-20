class House {
  constructor(builder) {
    this.bedrooms = builder.bedrooms;
    this.bathrooms = builder.bathrooms;
    this.kitchen = builder.kitchen;
    this.garages = builder.garages;
  }
}

class HouseBuilder {
  constructor() {
    this.bedrooms = 0;
    this.bathrooms = 0;
    this.kitchen = 0;
    this.garages = 0;
  }

  setBedrooms(bedrooms) {
    this.bedrooms = bedrooms;
    return this;
  }

  setBathrooms(bathrooms) {
    this.bathrooms = bathrooms;
    return this;
  }

  setKitchen(kitchen) {
    this.kitchen = kitchen;
    return this;
  }

  setGarages(garages) {
    this.garages = garages;
    return this;
  }

  build() {
    return new House(this)
  }
};

const house1 = new HouseBuilder()
  .setBedrooms(3)
  .setBathrooms(3)
  .setKitchen(1)
  .setGarages(2)
  .build();

const house2 = new HouseBuilder()
  .setBedrooms(2)
  .setBathrooms(1)
  .setKitchen(1)
  .build();

console.log(house1)
console.log(house2)

// USE-CASE
// If object creation is a complex process and the developer wants to be flexible and create different variations of object