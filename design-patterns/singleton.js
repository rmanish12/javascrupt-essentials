let instance;

class Counter {

  counter = 0;
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1 === counter2);

counter1.increment();
counter1.increment();

console.log(counter2.getCount())

const singleton = Object.freeze(new Counter());

module.exports = singleton;