type person1 = {
  name: string;
  address: string;
  salary?: number; //we can use question mark to make a property optional
};

type personWithJob = person1 & { role: string };

let person1: person1 = {
  name: "shohidulislam",
  address: "NOakhali",
};

let person3: personWithJob = {
  name: "Rahim",
  address: "khalashi bari",
  salary: 40,
  role: "junior web developer",
};

interface person2 {
  name: string;
  address: string;
  salary: number;
}

interface personWithRole extends person2 {
  role: string;
}

let person2: personWithRole = {
  name: "islam Razu",
  address: "Dhaka",
  salary: 25,
  role: "SDE-I",
};

console.log(person2);
