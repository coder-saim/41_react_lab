import React, { useState } from "react";
import TaskCard from "./TaskCard";


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const [updatedTaskTitle, setUpdatedTaskTitle] = useState('');
  const [updatedTaskDescription, setUpdatedTaskDescription] = useState('');

  const addTask = () => {
    const newTask = {
      id: Math.floor((Math.random() * 1000) + 1),
      title: newTaskTitle,
      description: newTaskDescription,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  const updateTask = (existingTask) => {
    setUpdatedTaskTitle(existingTask.title);
    setUpdatedTaskDescription(existingTask.description);
    setEditTask(existingTask);
  };

  const saveTask = (id, updatedTaskTitle, updatedTaskDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: updatedTaskTitle,
            description: updatedTaskDescription,
          }
        : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
    setUpdatedTaskTitle("");
    setUpdatedTaskDescription("");
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold pt-8 pb-2 mb-8 border-b-2 border-black">
        Task Manager App
      </h1>
      {!editTask && (
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="border border-gray-400 rounded-md p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Task Description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="border border-gray-400 rounded-md p-2 mr-2"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Task
          </button>
        </div>
      )}

      {editTask && (
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Updated Task Title"
            value={updatedTaskTitle}
            onChange={(e) => setUpdatedTaskTitle(e.target.value)}
            className="border border-gray-400 rounded-md p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Updated Task Description"
            value={updatedTaskDescription}
            onChange={(e) => setUpdatedTaskDescription(e.target.value)}
            className="border border-gray-400 rounded-md p-2 mr-2"
          />
          <button
            onClick={() =>
              saveTask(editTask.id, updatedTaskTitle, updatedTaskDescription)
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Task
          </button>
        </div>
      )}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={updateTask}
          onDelete={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskManager;
