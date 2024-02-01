import React, { useState } from "react";
import "../../assets/css/CreateNotesPopup.css";
import ColorButton from "./ColorBbutton";

function CreateNotesPopup({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="popup">
      <div className="popupTitle">Create New Group</div>
      <div className="popupInput">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="popupColorInput">
        <span>Choose Colour</span>
        <div className="popupColorInputColor">
          <ColorButton OnClick={handleColor} bgColor={bgColor} colorInput="rgb(179, 139, 250)" Class='popupColorInputColor1' />
          <ColorButton OnClick={handleColor} bgColor={bgColor} colorInput="rgb(255, 121, 242)" Class='popupColorInputColor2' />
          <ColorButton OnClick={handleColor} bgColor={bgColor} colorInput="rgb(67, 230, 252)" Class='popupColorInputColor3' />
          <ColorButton OnClick={handleColor} bgColor={bgColor} colorInput="rgb(241, 149, 118)" Class='popupColorInputColor4' />
          <ColorButton OnClick={handleColor} bgColor={bgColor} colorInput="rgb(102, 145, 255)" Class='popupColorInputColor5' />
        </div>
      </div>
      <div className="popupClose">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNotesPopup;
