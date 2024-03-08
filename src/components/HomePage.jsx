import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center pt-10 text-3xl border-b-2 border-black">Press The Desired Button to Test The App</h1>
      <div className="flex justify-center p-8 space-x-14">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/textbox">Text Box App</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/taskmanager">Task Manager App</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
