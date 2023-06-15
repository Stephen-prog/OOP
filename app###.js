// Prototypal Inheritance
// Person constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Uzo', 'Steve');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phoneNum, membership) {
  Person.call(this, firstName, lastName);

  this.phoneNum = phoneNum;
  this.membership = membership;
}

// Inherit thr Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Jude', 'Bellingham', '213-393-9282', 'Premium');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} Welcome to our Company`;
}

console.log(customer1.greeting());