import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdRadioButtonUnchecked } from "react-icons/md";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { toggleComplete, updateTodo, deleteTodo } from "../app/todoSlice";

export default function Task({ todo }) {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const [newText, setNewText] = useState(todo.text);

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (e, {id, newText}) => {
    e.preventDefault();
    if (newText) {
      dispatch(updateTodo({id, newText}));
      setEdit(!edit);
    }
  };

  return (
    <div className="flex relative w-full justify-center">
      {todo.completed && (
        <div className="uppercase text-[12px] font-semibold px-1 rounded-sm text-white bg-green-500 absolute -top-3 left-2 z-20">
          done
        </div>
      )}

      {edit ? (
        <form
          action=""
          className="w-[90%] md:w-[20rem] flex ring-2 ring-black ring-offset-2 rounded-sm overflow-hidden border focus-within:shadow-md focus-within:ring-offset-4"
          onSubmit={(e) => {
            handleUpdateTodo(e, {id: todo.id, newText});
          }}
        >
          <input
            type="text"
            className="w-full outline-none p-1"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="w-11 flex justify-center items-center text-white bg-black shadow-md"
          >
            <BsSend color="inherit" />
          </button>
        </form>
      ) : (
        <div
          className={`w-[90%] md:w-[20rem] p-1 flex justify-between items-center ring-2 ring-black ring-offset-2 rounded-sm overflow-hidden border focus-within:shadow-md focus-within:ring-offset-4 
        ${todo.completed && "ring-green-500 text-white bg-green-600"}
        `}
        >
          <span className="">{todo.text}</span>
          <div className="flex items-center gap-2">
            <button
              className=""
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <BiEdit size={20} />
            </button>
            <button className="" onClick={() => handleDeleteTodo(todo.id)}>
              <AiOutlineDelete size={20} />
            </button>
            <button
              className="text-green-500"
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.completed ? (
                <IoCheckmarkCircle size={20} color="inherit" />
              ) : (
                <MdRadioButtonUnchecked size={20} color="black" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
