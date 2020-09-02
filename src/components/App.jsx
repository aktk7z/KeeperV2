import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== noteId);
    });
  };
  return (
    <div>
      <Header />
      <CreateArea addHandler={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteHandler={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
