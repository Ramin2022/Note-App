import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateNote = () => {
  // navigation history
  const navigate = useNavigate();
  // states of the notes
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //The note function for saving notes
  const saveNote = (e) => {
    e.preventDefault();
    // formt validation
    if (title === "" && content === "") {
      alert("Please fill the form inputs!");
    } else {
      // API request from Json server
      axios
        .post("http://localhost:3006/notes", {
          title,
          content,
          id: nanoid(),
          date: new Date().toLocaleString(),
        })
        .then(() => {
          navigate("/readnote");
        });
    }
  };

  return (
    <div className="w-full flex justify-center py-5" id="topMargin">
      <form className="flex-[0_0_40%] flex flex-col">
        <h1 className="font-bold text-center text-xl mb-2">Create Note</h1>
        <div className="flex flex-col">
          <label className="text-xl mb-2" htmlFor="title">
            Title:
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="p-2 placeholder:italic rounded-md focus:outline-none text-black  border-blue-500 border-2"
            id="title"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl my-2" htmlFor="note">
            Note:
          </label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Text..."
            className="p-2 h-[280px] placeholder:italic rounded-md focus:outline-none text-black resize-none  border-blue-500 border-2"
            id="note"
            name="note"
          />
        </div>
        <button
          onClick={saveNote}
          className="mt-4 py-2 rounded-md bg-green-600"
          type="submit"
        >
          SAVE NOTE
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
