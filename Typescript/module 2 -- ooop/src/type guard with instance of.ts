{
  //
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      return `I am making a sound now`;
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    bark() {
      return `I am barking ghew ghew`;
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    meow() {
      return "I am meowing now";
    }
  }

  let pokeAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      console.log(animal.bark());
    } else if (animal instanceof Cat) {
      console.log(animal.meow());
    }
  };

  let dog1 = new Dog("German shephard tommy", "dog");
  let cat1 = new Cat("Mixed breed from sajek valley", "cat");

  pokeAnimal(dog1);
  pokeAnimal(cat1);

  //
}
