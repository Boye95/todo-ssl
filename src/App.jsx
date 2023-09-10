import { useState } from "react";
import AddTask from "./components/addtask";
import Taskslist from "./components/taskslist";

function App() {
  return (
    <div className="font-space p-3 py-11 flex flex-col items-center gap-5 bg-gray-300 w-full border-1 mx-auto md:w-[40rem] md:shadow-sm md:rounded-md">
      <h3 className="text-3xl font-bold ">TODO-SSL</h3>
      <div className="w-full flex justify-center">
        <AddTask />
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <h4 className="text-2xl font-bold  ">Your Tasks</h4>
        <Taskslist />
      </div>
    </div>
  );
}

export default App;
