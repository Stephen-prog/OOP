// Sub Classes
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
   return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName,lastName);

    this.phone = phone;
    this.membership = membership; 
  }

  static getMembershipCost() {
    return 1000;
  }
}

const dave = new Customer('Dave', 'Santan', '232-526-7162', 'Premuium');

console.log(dave.greeting());

console.log(Customer.getMembershipCost());