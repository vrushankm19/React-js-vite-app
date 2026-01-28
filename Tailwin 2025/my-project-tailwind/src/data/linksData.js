import TodoApp from "../component/react-todo-with-localstorage/TodoApp";
import TodoListWithContextAPI from "../component/react-todo-with-context-api/TodoListWithContextAPI.jsx";
import HookPrecticeTodoListWithContextAPI from "../component/hook-prectice-todo-list-with-context-api/HookPrecticeTodoListWithContextAPI.jsx";
import ReduxUsingMakeCounter from "../component/redux-using-make-counter/ReduxUsingMakeCounter.jsx";
import ReduxUsingMakeTodoList from "../component/redux-using-make-todo-list/ReduxUsingMakeTodoList.jsx";
import ReduxAsyncThunkTodoList from "../component/redux-async-thunk-todo-list/ReduxAsyncThunkTodoList.jsx";

const linksData = [
  {
    id: 1,
    path: "/todo",
    component: TodoApp,
    title: "React Todo with Localstorage",
    date: "15-12-2025",
    description:
      "Maine ye Todo List application React JS ka use karke banayi hai jisme user todo add, edit aur delete kar sakta hai. Is project me localStorage ka use kiya gaya hai taaki data page refresh hone par bhi safe rahe. State management ke liye useState aur side effects handle karne ke liye useEffect ka use kiya gaya hai. Saath hi, React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
  {
    id: 2,
    path: "/todo-list-context-api-with-api",
    component: TodoListWithContextAPI,
    title: "React Todo with Context API and API Integration",
    date: "15-12-2025",
    description:
      "Is project me maine React Context API ka use karke ek Todo List application banayi hai. Isme user todo add, edit aur delete kar sakta hai. Data ko localStorage me store kiya gaya hai taaki page refresh hone par bhi data safe rahe. Context API ke through state management ko simplify kiya gaya hai, jisse components ke beech data sharing asaan ho jati hai. Is project me bhi React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
  {
    id: 3,
    path: "/hook-prectice-todo-list-with-context-api/:fname?/:lname?",
    component: HookPrecticeTodoListWithContextAPI,
    title: "Prectice Todo List with Context API and Hooks",
    date: "29-12-2025",
    description:
      "Is project me maine React Hooks aur Context API ka use karke ek Todo List application banayi hai. Isme user todo add, edit aur delete kar sakta hai. Data ko localStorage me store kiya gaya hai taaki page refresh hone par bhi data safe rahe. Context API ke through state management ko simplify kiya gaya hai, jisse components ke beech data sharing asaan ho jati hai. Is project me bhi React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
  {
    id: 4,
    path: "/redux-using-make-counter",
    component: ReduxUsingMakeCounter,
    title: "Redux Using Make Counter",
    date: "05-06-2026",
    description:
      "Is project me maine Redux ka use karke ek simple counter application banayi hai. use local storage for store data. Isme user counter ko increment aur decrement kar sakta hai. Redux ke through state management ko centralize kiya gaya hai, jisse application ka state predictable aur manageable ban jata hai. Is project me bhi React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
  {
    id: 5,
    path: "/redux-using-make-todo-list",
    component: ReduxUsingMakeTodoList,
    title: "Redux Using Make Todo List",
    date: "06-06-2026",
    description:
      "Is project me maine Redux ka use karke ek simple Todo List application banayi hai. use local storage for store data. Isme user todo add, edit aur delete kar sakta hai. Redux ke through state management ko centralize kiya gaya hai, jisse application ka state predictable aur manageable ban jata hai. Is project me bhi React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
  {
    id: 6,
    path: "/redux-async-thunk-todo-list",
    component: ReduxAsyncThunkTodoList,
    title: "Redux Async Thunk Todo List",
    date: "12-01-2026",
    description:
      "Is project me maine Redux Toolkit aur Redux Thunk ka use karke ek advanced Todo List application banayi hai. Isme user todo add, edit aur delete kar sakta hai. Redux Thunk ke through asynchronous actions ko handle kiya gaya hai, jisse API calls aur side effects ko manage karna asaan ho jata hai. Is project me bhi React Router ka use karke multiple pages ka navigation implement kiya gaya hai.",
  },
];

export default linksData;
