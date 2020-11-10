// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!


class Creature {
  name;
  age;
  food;
  job;
  gender;

  constructor(name, age, food, job, gender) {
    this.gender = gender;
    this.job = job;
    this.name = name;
    this.age = age;
    this.food = food;
  }
}


class Person extends Creature {
  children;
  spouse;

  constructor(name, age, food, job, gender, children, spouse) {
    super(name, age, food, job, gender)
    this.children = children;
    this.spouse = spouse;
  }
}


class Horse extends Creature {
  color;

  constructor(name, age, food, job, gender, color) {
    super(name, age, food, job, gender)
    this.color = color;
  }
}

const person = new Person('Abdulkareem', 35, 'Dates', 'Construction worker', 'Male', 3, 'has a wife')

const horse = new Horse('Adel', 15, 'Grass', 'Transport', 'Male', 'Brown')

console.log(person, horse)
