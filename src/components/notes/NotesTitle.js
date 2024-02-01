import "../../assets/css/NotesTitle.css";
import usePocketContext from "../../hooks/usePocketContext";

function NotesTitle({ title }) {
  // console.log(title)
  const { selected, setSelected } = usePocketContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div
      onClick={handleTitleClick}
      className={`groupTitleLogo ${selected === title[0].name ? "highlightedTitle" : null
        }`}
    >
      <div className="titleLogo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="groupTitle">{newTitle}</div>
    </div>
  );
}

export default NotesTitle;
