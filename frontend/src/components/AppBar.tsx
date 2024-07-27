import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2 sm:py-5 ">
      <div
        className="font-bold flex flex-col justify-center
      sm:text-xl"
      >
        Medium
      </div>
      <div
        className="flex items-center gap-1
      "
      >
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "block")}
          to={"/publish"}
        >
          <button
            type="button"
            className=" bg-green-600 text-white h-fit  w-fit text-[14px] rounded-md py-1 px-2 "
          >
            publish
          </button>
        </NavLink>

        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            A
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
