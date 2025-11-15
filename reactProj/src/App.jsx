import React from "react";
import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState("");
  const [textar, setTextar] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(textar);

    const copyTask = [...task];
    copyTask.push({title,textar});
    setTask(copyTask);

    setTitle("");
    setTextar("");
  };

  const deleteNote=(i)=>{
    const copyTask = [...task];

    copyTask.splice(i,1);
    setTask(copyTask);
  }

  return (
    <div className="bg-black h-screen lg:flex ">
      <form
        onSubmit={formHandler}
        className="flex items-start lg:w-1/2 flex-col gap-4 p-10 "
      >
        <input
          value={title}
          type="text"
          placeholder="Title here"
          className="p-5 w-full rounded border-1 text-amber-50"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          value={textar}
          name=""
          id=""
          placeholder="The Notes here....."
          className="px-5 py-5 w-full rounded border-1 text-amber-50"
          onChange={(e) => {
            setTextar(e.target.value);
          }}
        ></textarea>
        <button className="bg-white rounded p-3 cursor-pointer">
          Add Note
        </button>
        {/* <img className="h-80" src="https://static.vecteezy.com/system/resources/previews/019/887/453/original/note-paper-file-free-png.png" alt="" /> */}
      </form>
      <div className="flex flex-col gap-5 lg:w-1/2 p-10 text-white">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 overflow-auto h-full">

          {task.map(function(e,i){
            return  <div key={i} className="relative h-62 w-42 bg-white rounded text-black px-4 py-5 flex flex-col justify-between">
              <div>
              <h3 className="font-bold text-xl py-">{e.title}</h3>
              <p className="leading-tight">{e.textar}</p>
              </div>
              <button onClick={()=>{deleteNote(i)}} className="bg-red-600 rounded text-white h-8 cursor-pointer">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
