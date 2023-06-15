// Object.create
const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastname){
    this.lastName = newLastname;
  }
}

const kate = Object.create(personPrototypes);
kate.firstName = 'Kate';
kate.lastName = 'Abdo';
kate.age = 21;

kate.getsMarried('Stevens');

console.log(kate.greeting());

const dan = Object.create(personPrototypes, {
  firstName: {value: 'Dan'},
  lastName: {value: 'Kemps'},
  age: {value: 42}
})

console.log(dan);

console.log(dan.greeting());