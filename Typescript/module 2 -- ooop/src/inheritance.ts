{
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numOfHours: number) {
      return `${this.name} should get ${numOfHours} hours of sleep`;
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(NumOfClasses: number) {
      return `${this.name} should take ${NumOfClasses} classes today`;
    }
  }

  let student1 = new Student("shohidul islam razu", 23, "Noakhali");
  let teacher1 = new Teacher(
    "Tanjia afrose turin",
    35,
    "Lalmatia,dhaka",
    "Lecturer"
  );

  console.log(student1);
  console.log(teacher1.takeClass(3));
}
