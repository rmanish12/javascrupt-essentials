// with factory pattern, we can use a factory function to create many objects with same properties
// a factory function can be any function that returns an object

const createUser = ({ firstName, lastName })  => ({
  firstName,
  lastName,
  createdAt: Date.now(),
  fullName: `${firstName} ${lastName}`
});

const user1 = createUser({ firstName: 'Tom', lastName: 'Jerry' });
const user2 = createUser({ firstName: 'Jeremy', lastName: 'Hiddleton' });

console.log(user1);
console.log(user2);

// ADVANTAGE
// helps in following DRY principle
// useful when we want to create multiple objects with same properties, without repeating code
// a factory function can easily return customized object depending on the current environment, or user-specific config

// DISADVANTAGE
// In JS, it is not exactly a pattern but just a function that lets us create objects without using new keyword.