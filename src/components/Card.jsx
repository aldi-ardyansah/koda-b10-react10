import List from "./List.jsx";

import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function Card() {
  return (
    <div className="m-auto w-full max-w-md rounded-4xl bg-amber-50 p-6 shadow-md">
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
      <h1 className="mb-4 mt-4 text-2xl font-bold text-gray-800">Weekend To-Do Lists</h1>
      <List />
      <div className="mt-10 flex gap-20 justify-center p-3 text-gray-800">
        <FaListCheck className="text-2xl text-yellow-500" />
        <FiCamera className="text-2xl text-yellow-500" />
        <MdAttachFile className="text-2xl text-yellow-500" />
        <HiOutlinePencilSquare className="text-2xl text-yellow-500" />
      </div>
    </div>
  );
}