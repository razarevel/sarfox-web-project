import { useState } from "react";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
export const PlatformSelector = () => {
  const setplatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatform();
  const [showList, setShowList] = useState(false);
  const [showListName, setShowListName] = useState("Platforms");
  const hidden =
    "z-10 hidden bg-slate-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700";
  const show =
    "z-10  bg-white divide-y bg-slate-300 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-3 ";
  if (error) return null;
  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="relative text-gray-400 dark:text-white bg-slate-100 hover:bg-slate-500  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-between items-center dark:bg-gray-600 dark:hover:bg-gray-700 w-36 "
        type="button"
      >
        {showListName}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div id="dropdown" className={showList ? show : hidden}>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {data?.results.map((plateform) => (
            <li key={plateform.id}>
              <a
                onClick={() => {
                  setplatformId(plateform.id);
                  setShowList(!showList);
                  setShowListName(plateform.name);
                }}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {plateform.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
