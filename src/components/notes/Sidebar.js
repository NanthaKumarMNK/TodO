import React, { useEffect, useState } from "react";
import "../../assets/css/Sidebar.css";
import CreateNotesPopup from "./CreateNotesPopup";
import NotesTitle from "./NotesTitle";

function Sidebar() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="Sidebar">
      <div className="SidebarTitle">Pocket Notes</div>
      <div className="SidebarCreateNotesBtn">
        <button onClick={handleClick}>
          <span id="add">+</span>
        </button>
      </div>
      <div className="SidebarNotesTitle">
        {titles.length > 0 ? (
          titles.map((title, index) => <NotesTitle key={index} title={title} />)
        ) : (
          <div className="SidebarNotesTitleEmpty">
            <p>No Notes Group Created</p>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="PopupOverlay">
          <CreateNotesPopup
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
