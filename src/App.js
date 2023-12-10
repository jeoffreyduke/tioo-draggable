import { useState } from "react";
import "./App.css";
import "./styles.css";
import Dragzone from "./components/Dragzone";
import Dropzone from "./components/Dropzone";

function App() {
  const [dragItems, setDragItems] = useState([]);

  const handleDrop = (id) => {
    const existingClone = dragItems.find((item) => item.id === id);

    if (!existingClone) {
      setDragItems([...dragItems, { id: id + "-clone-" + Date.now() }]);
    }
  };

  return (
    <div>
      <header className="text-center mx-auto my-2 mb-2">
        For Chris from Tioo by Jeoffrey Duke. Had fun building this!
      </header>

      <div className="container mx-auto my-10 flex">
        <div className="dragzone mt-10 border-2 border-gray-400 p-6 rounded">
          <Dragzone id="draggableText" content="Text" />
          <Dragzone id="draggableImage" content="Image" />
        </div>

        <Dropzone onDrop={handleDrop} dragItems={dragItems} />
      </div>
    </div>
  );
}

export default App;
