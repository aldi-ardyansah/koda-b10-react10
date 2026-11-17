import { useRef, useState } from "react";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import data from "../data/data.json";

import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";

function Card() {
  const tasks = useRef(data.tasks);
  const [, setRender] = useState(0);

  const handleToggle = (id) => {
    tasks.current = tasks.current.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setRender((prev) => prev + 1);
  };

  return (
    <div className="m-auto w-full max-w-md rounded-4xl bg-amber-50/50 p-6 shadow-md">
      <div className="flex p-3 text-gray-800">
        <div className="flex gap-3">
          <IoIosArrowBack className="text-2xl text-yellow-500" />
          <span className="text-yellow-500">All iCloud</span>
        </div>
        <div className="ml-auto flex gap-3">
          <MdOutlineIosShare className="text-2xl text-yellow-500" />
          <HiOutlineDotsCircleHorizontal className="text-2xl text-yellow-500" />
        </div>
      </div>
      <h1 className="mb-4 mt-4 text-center text-2xl font-bold text-gray-800">Weekend To-Do Lists</h1>
      <div className="flex flex-col gap-3">
        {tasks.current.map((task) => (
          <div key={task.id} onClick={() => handleToggle(task.id)} className="flex cursor-pointer items-start gap-2 select-none">
            {task.completed ? (
              <RiCheckboxCircleFill className="mt-1 shrink-0 text-yellow-500" />
            ) : (
              <RiCheckboxBlankCircleLine className="mt-1 shrink-0 text-gray-400" />
            )}
            <div>
              <p className={`font-medium ${ task.completed ? "text-gray-400 line-through" : "text-gray-800"}`}>{task.title}</p>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex gap-20 justify-center p-3 text-gray-800">
        <FaListCheck className="text-2xl text-yellow-500" />
        <MdOutlineCameraAlt className="text-2xl text-yellow-500" />
        <MdAttachFile className="text-2xl text-yellow-500" />
        <HiOutlinePencilSquare className="text-2xl text-yellow-500" />
      </div>
    </div>
  );
}

export default Card;