import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateNote = () => {
  // navigation history
  const navigate = useNavigate();
  // states for updating
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  // getting data from local storage
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setContent(localStorage.getItem("content"));
  }, []);

  // update fucntion
  const updateNote = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("please fill the inputs");
    } else {
      // updating request to the server
      axios
        .put(`http://localhost:3006/notes/${id}`, {
          title,
          content,
          id: id,
          date: new Date().toLocaleString(),
        })
        .then(() => {
          // redirection to reade page
          navigate("/readnote");
        });
    }
  };

  return (
    <div className="w-full flex  justify-center py-5" id="topMargin">
      <form className="flex-[0_0_40%] flex flex-col">
        <h1 className="font-bold text-center text-xl mb-2">Edit Note</h1>
        <div className="flex flex-col">
          <label className="text-xl mb-2" htmlFor="title">
            Title:
          </label>
          <input
            value={title}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Text..."
            className="p-2 h-[280px] placeholder:italic rounded-md focus:outline-none text-black resize-none  border-blue-500 border-2"
            id="note"
            name="note"
          />
        </div>
        <button
          onClick={updateNote}
          className="mt-4 py-2 rounded-md bg-green-600"
          type="submit"
        >
          UPDATE NOTE
        </button>
      </form>
    </div>
  );
};

export default UpdateNote;
