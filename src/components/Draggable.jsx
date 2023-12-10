import React from "react";
import "../styles.css";

const Draggable = ({ id, content }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
  };

  return (
    <div
      className="draggable border border-black rounded"
      draggable
      onDragStart={handleDragStart}
    >
      {content}
    </div>
  );
};

export default Draggable;
