import { useState } from "react";

const DownloadButton = () => {
  const [todo, setTodo] = useState<string>("");

  const fetchTodos = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${Math.floor(
        Math.random() * 10 + 1
      )}`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setTodo(data.title);
      });
  };

  return (
    <div>
      <button onClick={fetchTodos}>Download todo</button>
      <span>{todo}</span>
    </div>
  );
};

export default DownloadButton;
