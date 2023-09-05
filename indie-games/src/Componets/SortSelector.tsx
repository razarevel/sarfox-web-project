import { useState } from "react";
interface Props{
    onSelectSortOrder: (sortOrder:string)=>void;
    SortOrder:string;
}
export const SortSelector = ({onSelectSortOrder,SortOrder}:Props) => {
  const [showList, setShowList] = useState(false);
  const hidden =
    "z-10 hidden bg-slate-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 w-42 md:w-72";
  const show =
    "z-10  bg-white divide-y bg-slate-300 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-3 w-42 md:w-72 ";
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentOrder = sortOrder.find(order=> order.value===SortOrder);
  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="relative text-gray-400 dark:text-white bg-slate-100 hover:bg-slate-500  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-between items-center dark:bg-gray-600 dark:hover:bg-gray-700 w-42 md:w-72 "
        type="button"
      >
        Oder by: {currentOrder?.label || "Relevance"}
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
          {sortOrder.map((item) => (
            <li key={item.value}>
              <a
                onClick={() => {
                  setShowList(!showList);
                  onSelectSortOrder(item.value);
                }}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
