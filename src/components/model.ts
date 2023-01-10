export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// type Actions =
//   | {
//       type: "add";
//       payload: string;
//     }
//   | {
//       type: "remove";
//       payload: number;
//     }
//   | {
//       type: "done";
//       payload: number;
//     };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "add": return [...state, {id: Date.now(), todo: action.payload, isDone: false}]
//   }
// };

// import { useReducer } from "react";

// const Reducer = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return <div />;
// };
