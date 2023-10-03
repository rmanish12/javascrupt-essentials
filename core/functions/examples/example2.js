function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName()); // Fluffy

const { getName } = cat;
console.log(getName());     // Fluffy

// when a function is invoked as a constructor, "this" equals the newly contructed object

// as this.getName() is an arrow function, it does not create a separate this adn "this" inside the function corresponds to the constructor this