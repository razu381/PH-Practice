function createArray(str: string): string[] {
  return str.split("");
}

//console.log(createArray("Hello world"));

const createArrayWithGeneric = <T>(param: T): T[] => {
  return [param];
};

console.log(createArrayWithGeneric<string>("Hello world"));
console.log(
  createArrayWithGeneric<{ id: number; name: string }>({
    id: 2323232,
    name: "shohidul islam Razu",
  })
);

const createArrayWithtuple = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

console.log(createArrayWithtuple<string, number>("Hi", 34));
