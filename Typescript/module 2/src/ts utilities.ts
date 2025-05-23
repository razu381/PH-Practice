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
