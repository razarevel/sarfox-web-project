import { BsSearch } from "react-icons/bs";
import {useRef} from 'react';
import useGameQueryStore from "../store";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearch=useGameQueryStore(s => s.setSearch);
  return (
    <form 
    onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) setSearch(ref.current.value);
    }}
    className="px-8 py-4 space-x-5 flex item-center w-full rounded-full bg-slate-100 dark:bg-gray-800 dark:bg-opacity-75">
        <button className="opacity-80"><BsSearch /></button>
      <input
      ref={ref}
        type="text"
        className="  focus:outline-none   bg-transparent 
        placeholder:opacity-80
        "
        placeholder="Serch games..."
      />
    </form>
  );
};
export default SearchInput;
