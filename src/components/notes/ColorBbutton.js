function ColorButton({ onClick, bgColor, colorInput, Class }) {
  return (
    <div
      className={`${Class} ${bgColor === colorInput ? "highlight" : ""}`}
      onClick={onClick}
    ></div>
  );
}

export default ColorButton;