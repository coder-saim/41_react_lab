import React, { useState } from "react";

const TextBox = () => {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, value: "" }]);

  const handleAddTextBox = () => {
    const newTextBoxes = [
      ...textBoxes,
      { id: textBoxes.length + 1, value: "" },
    ];
    setTextBoxes(newTextBoxes);
  };

  const handleDeleteTextBox = (id) => {
    const updatedTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(updatedTextBoxes);
  };

  const handleTextBoxChange = (id, value) => {
    const updatedTextBoxes = textBoxes.map((textBox) =>
      textBox.id === id ? { ...textBox, value: value } : textBox
    );
    setTextBoxes(updatedTextBoxes);
  };

  const calculateSum = () => {
    let sum = 0;
    textBoxes.forEach((textBox) => {
      sum += parseInt(textBox.value) || 0;
    });
    return sum;
  };

  return (
    <div className="container mx-auto p-4 text-center ">
      <h1 className="text-2xl font-bold pt-8 pb-2 mb-8 border-b-2 border-black">
        Text Box Counter App
      </h1>
      {textBoxes.map((textBox) => (
        <div key={textBox.id} className="mb-4">
          <input
            type="text"
            value={textBox.value}
            onChange={(e) => handleTextBoxChange(textBox.id, e.target.value)}
            className="border border-gray-400 rounded-md p-2 mr-2"
          />
          <button
            onClick={() => handleDeleteTextBox(textBox.id)}
            className="bg-red-500 font-bold text-white px-3 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={handleAddTextBox}
        className="bg-blue-500 font-bold text-white px-3 py-2 rounded"
      >
        Add
      </button>
      <div className="mt-4">Sum: {calculateSum()}</div>
    </div>
  );
}

export default TextBox;
