import React from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <li className="mb-2">{todo.text}</li>;
};

export default TodoItem;
