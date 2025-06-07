class animal {
  name: string;
  breed: string;
  sound: string;

  constructor(name: string, breed: string, sound: string) {
    this.name = name;
    this.breed = breed;
    this.sound = sound;
  }

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

let dog = new animal("tommy", "german shepherd", "ghew ghew");

console.log(dog.makeSound());
