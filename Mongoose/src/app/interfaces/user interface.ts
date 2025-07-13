import { Model, Types } from "mongoose";
import { Interface } from "readline";

export interface ADDRESS {
  city: string;
  street: string;
  district: string;
}

export interface IUSER {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: "user" | "adimin";
  address: {
    type: ADDRESS;
  };
}

export interface UserInstaceMethod {
  hashPassword(password: string): string;
}

export interface userStaticMethod extends Model<IUSER> {
  hashPassword(password: string): string;
}
