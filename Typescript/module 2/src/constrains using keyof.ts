{
  //

  interface userType {
    name: string;
    age: number;
    skills: string[];
  }

  let getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  let user: userType = {
    name: "md shohidul islam",
    age: 20,
    skills: ["programming", "healthcare", "reading", "wp", "freelancing"],
  };

  console.log(getPropertyValue(user, "age"));

  //
}
