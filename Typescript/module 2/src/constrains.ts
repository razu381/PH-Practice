interface studentType {
  id: number;
  name: string;
  email: string;
  devType: string;
}

let addCourseToStudent = <T extends studentType>(student: T) => {
  return {
    ...student,
    course: "Introduction to data structure & algorithms",
  };
};

let student1: studentType = {
  id: 1234,
  name: "Razu",
  email: "mdshohidul.razu@gmail.com",
  devType: "Frontend dev",
};

let student2: studentType = {
  id: 1345,
  name: "Rahim ",
  email: "rahim.rafsan@gmail.com",
  devType: "Backend dev",
};

console.log(addCourseToStudent(student1));
console.log(addCourseToStudent(student2));
