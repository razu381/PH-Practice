interface satyaNadella {
  car: string;
  bike: string;
  jet: string;
}

type checkStaya<T> = T extends satyaNadella ? true : false;

type hasShip = checkStaya<"ship">;

console.log(hasShip);
