import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Zoom } from "@material-ui/core";
import MoodIcon from "@material-ui/icons/Mood";

function Addnote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note...."
          rows="{isExpanded ? 3: 1} "
        />
        <Zoom in={true}>
          <button onClick={submitNote}>
            <AddCircleIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}
export default Addnote;
