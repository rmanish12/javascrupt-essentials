// the call() method of Function instances calls this function with a given "this" value and arguments provided individually

function product(arg1) {
  console.log(this.name + " " + this.price + " " + arg1);
};

const obj1 = {
  name: "Potato",
  price: 50
};

const obj2 = {
  name: "Onion",
  price: 100
};

product.call(obj1, 9000);
product.call(obj2, 10000)

// the apply() method works the same way as call, the only difference is that arguments are provided as array

product.apply(obj1, [8000]);

// the bind() function creates a new function, binded to the "this" value provided, which can later be called with different arguments

const newProduct1 = product.bind(obj1);

newProduct1(5000);
newProduct1(4000);