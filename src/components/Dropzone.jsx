import React from "react";
import "../styles.css";

const Dropzone = ({ onDrop, dragItems }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    onDrop(data);
  };

  return (
    <div
      className="dropzone mt-10 border-2 border-dashed border-gray-400 p-6 rounded"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {dragItems.map((item) => (
        <div key={item.id} className="draggable-clone">
          {item.id.includes("draggableText") ? (
            <div className="draggable border border-black rounded">Text</div>
          ) : (
            item.id.includes("draggableImage") && (
              <div className="draggable border border-black rounded">Image</div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropzone;
