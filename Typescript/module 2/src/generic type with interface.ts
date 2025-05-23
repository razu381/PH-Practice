interface Developer<T> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
}

interface SmartWatch {
  brand: string;
  model: string;
  display: string;
}

let developer: Developer<SmartWatch> = {
  name: "Razu",
  computer: {
    brand: "Lenevo",
    model: "Ideapad slim 3",
    releaseYear: 2020,
  },
  smartWatch: {
    brand: "Samsung",
    model: "Galaxy fit 3",
    display: "Emoled",
  },
};

interface RichDeveloper<T, X> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
  car: X;
}

interface Car {
  brand: string;
  model: string;
  price: number;
}

let RichDeveloper: RichDeveloper<SmartWatch, Car> = {
  name: "Zulkarnaine mahmud",
  computer: {
    brand: "Apple",
    model: "Mackbook M4",
    releaseYear: 2024,
  },
  smartWatch: {
    brand: "Apple",
    model: "Ultra 2",
    display: "OLED",
  },
  car: {
    brand: "Tesla",
    model: "Model3",
    price: 450000,
  },
};

console.log(developer);
console.log(RichDeveloper);
