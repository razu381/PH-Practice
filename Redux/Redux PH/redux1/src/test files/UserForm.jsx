import React, { useReducer, useState } from "react";

function UserForm() {
  let [userData, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD":
          return action.payload;
      }
    },
    {
      name: "",
      email: "",
      password: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let email = e.target.email;
    let password = e.target.password;

    dispatch({
      type: "ADD",
      payload: {
        name,
        email,
        username,
      },
    });

    // Reset form
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        User Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
