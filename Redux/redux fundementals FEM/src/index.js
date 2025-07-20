console.log("HI");
import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// Example of useReducer pattern (similar to Redux reducer)
// This is how a reducer function works:

// 1. Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// 2. Define initial state
const initialState = { count: 0 };

// 3. Define reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

// 4. Simulate dispatch calls (in React, you'd use useReducer hook)
console.log('=== useReducer Example ===');
let state = initialState;
console.log('Initial state:', state);

// Simulate dispatching actions
state = counterReducer(state, { type: INCREMENT });
console.log('After INCREMENT:', state);

state = counterReducer(state, { type: INCREMENT });
console.log('After INCREMENT:', state);

state = counterReducer(state, { type: DECREMENT });
console.log('After DECREMENT:', state);

state = counterReducer(state, { type: RESET });
console.log('After RESET:', state);

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => `<b>${string}</b>`;

let all = (string) => embolden(repeatThreeTimes(makeLouder(string)));

console.log(all("HI"));

console.log(compose(embolden, repeatThreeTimes, makeLouder)("HI"));
