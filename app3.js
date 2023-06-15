// ES6 classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  certified() {
    return `Dr.${this.firstName} ${this.lastName} PhD`
  }
  
  static divNumbers(x, y) {
    return x / y;
  }
}

const dani = new Person('Dani', 'Rivera', '10-10-1990');

console.log(dani.certified());

console.log(Person.divNumbers(8,2));