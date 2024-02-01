import React from "react";
import "../../assets/css/NotesContent.css";

function NotesContent({ note }) {

  return (
    <div className="NotesContentNote">
      <div className="NotesContentDateTimeDetails">
        <div className="NotesContentDate">{note.date}</div>
        <div className="NotesContentTime">{note.time}</div>
      </div>
      <div className="NotesContentDetails">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NotesContent;
