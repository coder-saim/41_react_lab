const TaskCard = ({ task, onUpdate, onDelete }) => {
    return (
      <div className="bg-white shadow-md rounded p-4 mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onUpdate(task)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

export default TaskCard;