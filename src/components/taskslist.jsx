import { useState } from "react";

import { useSelector } from "react-redux";
import Task from "./task";

export default function Taskslist() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="flex flex-col gap-5 w-[90%] md:w-[20rem]">
      {todos?.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
