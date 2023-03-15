import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Reading Notes Component
const ReadNote = () => {
  // For Navigaitn history 
  const navigate = useNavigate();
  // state for saving requested notes from API
  const [notes, setNotes] = useState([]);

  // initial request from API
  useEffect(() => {
    axios.get("http://localhost:3006/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);


  // fucntion for updating notes and saving to local storage
  const updateNoteHandler = (note) => {
    localStorage.setItem("id", note.id);
    localStorage.setItem("title", note.title);
    localStorage.setItem("content", note.content);
    localStorage.setItem("date", note.date);
    // redirecting to the update page
    navigate("/updatenote");
  };

  // function for refresing reade note page after deletion
  const getNotes = () => {
    axios.get("http://localhost:3006/notes").then((response) => {
      setNotes(response.data);
    });
  };

  // fucntion for deleting notes
  const deleteNotes = (id) => {
    axios.delete(`http://localhost:3006/notes/${id}`).then(() => {
      // above function described!
      getNotes();
    });
  };


  // this sorting is for sorting the notes newly created.
  const orderedNotes = notes
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedNotes = orderedNotes.map((note) => {
    return (
      <div key={note.id} className="border rounded-sm p-4 w-[60%] mt-4">
        <div className="flex justify-end mb-2">
          <button
            onClick={() => deleteNotes(note.id)}
            className="mr-4 hover:bg-red-700 p-1 ease-in duration-100 rounded-lg bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => updateNoteHandler(note)}
            className="mr-4 p-1 hover:bg-green-700 ease-in duration-100 rounded-lg bg-green-500"
          >
            Edite
          </button>
        </div>
        <h1 className="text-3xl mb-2">{note.title}</h1>
        <small>{note.date}</small>
        <p className="text-xl text break-words text-justify mt-2">
          {note.content}
        </p>
      </div>
    );
  });

  return (
    <section id="topMargin" className="py-4 px-10 flex flex-col items-center">
      {renderedNotes}
    </section>
  );
};

export default ReadNote;
