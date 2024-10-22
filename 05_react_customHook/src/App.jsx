import { useEffect, useState } from "react";
import axios from 'axios'; // Assuming axios is imported

function sum() { // hook, component
  const [a, setA] = useState([]);
  return a
}

sum()

function useTodos() {
  const [todos, setTodos] = useState([]);
  const {a} = sum()

  useEffect(() => {
    axios.get("") // Replace with actual API endpoint
      .then((res) => {
        setTodos(res.data.todos);
      });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();
  const {a} = sum()

  return (
    <div>
      {todos}
    </div>
  );
}

export default App;
