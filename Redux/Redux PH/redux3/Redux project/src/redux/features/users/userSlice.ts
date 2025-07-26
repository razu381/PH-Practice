import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  email: string;
  age: number;
}

let initialState: IUser[] = [
  {
    name: "razu",
    email: "sirazu52@gmail.com",
    age: 23,
  },
  {
    name: "rahim",
    email: "romanrahim@gmail.com",
    age: 23,
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      let newUsers = state.filter((user) => action.payload != user.email);
      return newUsers;
    },
  },
});

export const getUsers = (state: RootState) => {
  return state.users;
};

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
