import { useState } from "react";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, addTask, removeTask } from "../redux/slices/taskSlice.js";

export default function List() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addTask({
      title: title.trim(),
      description: description.trim(),
    }));

    setTitle("");
    setDescription("");
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <form onSubmit={handleAdd} className="mb-5 flex flex-col gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="rounded-lg border border-gray-300 p-2 outline-none"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="rounded-lg border border-gray-300 p-2 outline-none"
        />
        <button type="submit" className="rounded-lg bg-yellow-500 p-2 font-medium text-white">
          Add Task
        </button>
      </form>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-2">
            <div onClick={() => handleToggle(task.id)} className="flex flex-1 cursor-pointer items-start gap-2 select-none">
              {task.completed ? (
                <RiCheckboxCircleFill className="mt-1 shrink-0 text-yellow-500" />
              ) : (
                <RiCheckboxBlankCircleLine className="mt-1 shrink-0 text-gray-400" />
              )}
              <div>
                <p className={`font-medium ${task.completed ? "text-gray-400 line-through" : "text-gray-800"}`}>{task.title}</p>
                <p className="text-sm text-gray-500">{task.description}</p>
              </div>
            </div>
            <button onClick={() => handleRemove(task.id)} className="text-sm text-red-500">
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}