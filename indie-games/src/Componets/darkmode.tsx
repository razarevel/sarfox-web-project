import { useState } from "react";
export default function DarkMode() {
  if (!document.documentElement.classList.contains("dark")) {
    if (!localStorage.getItem("theme")) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("theme", "dark");
        return;
      }
      localStorage.setItem("theme", "light");
    }
  } else {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      return;
    }
    else {
      if(localStorage.getItem('theme')=='dark') document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }
  const checklocalStore =
    localStorage.getItem("theme") === "light"
      ? false
      : (localStorage.getItem("theme") === "dark") === true;
  const [isDark, setIsDark] = useState(checklocalStore);
  const handleClick = () => {
    if (localStorage.getItem("theme") == "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };
  // Button

  const [isChecked, setIsChecked] = useState(isDark);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleClick();
  };
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div><span className="ml-1 hidden sm:block">Dark Mode</span>
      </label>
    </>
  );
}
