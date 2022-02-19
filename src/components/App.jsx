import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Addnote from "./Addnote";

function App() {
  const [notes, setTheseNotes] = useState([]);

  function createArea(NewNote) {
    setTheseNotes((prevNotes) => {
      return [...prevNotes, NewNote];
    });
  }
  function deleteNote(id) {
    setTheseNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <Addnote onAdd={createArea} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
