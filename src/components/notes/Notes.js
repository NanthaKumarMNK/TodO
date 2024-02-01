// Notes.js
import React, { useEffect, useState } from "react";
import "../../assets/css/Notes.css";
import enter from "../../assets/icons/enter.png";
import NotesContent from "./NotesContent";
import usePocketContext from "../../hooks/usePocketContext";
import enter2 from "../../assets/icons/enter2.png";
import back from "../../assets/icons/back.png";

function Notes() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const { notes, setNotes, selected } = usePocketContext();

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    console.log(selectedGroup);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [selected, setNotes]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text.trim(),
      date: new Date().toLocaleDateString("en-In", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Notes">
      <div className="NotesTitle">
        <img src={back} alt="back" onClick={() => window.history.back()} />
        <div
          className="NotesTitleColor"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="NotesTitleText">{selectedTitle}</div>
      </div>
      <div className="NotesContent">
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <NotesContent key={index} note={note} />
          ))
        ) : null}
      </div>
      <div className="NotesInput">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        {text.trim() === "" ? (
          <img src={enter} alt="enter" onClick={handleSaveNotes} />
        ) : (
          <img src={enter2} alt="enter" onClick={handleSaveNotes} />
        )}
      </div>
    </div>
  );
}

export default Notes;
