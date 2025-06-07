type normalUser = {
  name: string;
};

type adminUser = {
  name: string;
  role: string;
};

let getUser = (user: normalUser | adminUser): void => {
  if ("role" in user) {
    console.log(`User is an admin`);
  } else {
    console.log("Not an admin");
  }
};

console.log(getUser({ name: "Razu", role: "notadmin" }));
