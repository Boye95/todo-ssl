import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
    
  };


  return (
    <div className="flex w-full justify-center">
      <form
        className="w-[90%] flex ring-2 ring-black ring-offset-2 rounded-sm overflow-hidden border focus-within:shadow-md focus-within:ring-offset-4 md:w-[20rem]"
        onSubmit={handleAddTodo}
      >
        <input
          type="text"
          className="outline-none p-1 w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="w-8 flex justify-center items-center text-white bg-black shadow-md"
        >
          <AiOutlinePlus color="inherit" />
        </button>
      </form>
    </div>
  );
}
