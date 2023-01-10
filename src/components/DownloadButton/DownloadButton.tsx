import { useState } from "react";

interface DownloadButtonProps {
  setTodo: (title: string) => void;
}

const DownloadButton = ({ setTodo }: DownloadButtonProps) => {
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
    </div>
  );
};

export default DownloadButton;

// 3. Spana wyświetlającego stan todo przenieś do nowego komponentu który ma się nazywać TodoDisplay.
// 4. Wyświetl komponent TodoDisplay w App.tsx. Tam też przekazuj stan todo z App.tsx do TodoDisplay.
// NIE PRZENOŚ FETCHA!!!
