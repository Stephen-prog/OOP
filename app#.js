// Constructors And the 'this' Keyword
// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const Dave = new Person('Dave', 18);
// const Stan = new Person('Stan' ,24);

// console.log(Stan.age);

const uzo = new Person('uzo', '10-4-2001')
console.log(uzo.calAge());