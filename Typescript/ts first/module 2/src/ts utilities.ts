interface User {
  name: string;
  age: number;
  email?: string;
  phone: string;
}

type NameAge = Pick<User, "name" | "age">;
type ContactInfo = Omit<User, "name" | "age">;
type UserRequired = Required<User>;
type UserOptional = Partial<User>;
type UserReadOnly = Readonly<User>;
//we can't change readonly values.so any object
//created with this type will be read UserReadOnly

const emptyObj: Record<string, unknown> = {};


