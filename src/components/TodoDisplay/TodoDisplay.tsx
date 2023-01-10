import React from "react";

interface TodoDisplayProps {
  todo: string;
}

const TodoDisplay = ({ todo }: TodoDisplayProps) => {
  return <span>{todo}</span>;
};

export default TodoDisplay;
