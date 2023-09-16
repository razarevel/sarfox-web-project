import { useState} from "react";
interface Prop {
  children: string;
}
export default function ExpandableText({ children }: Prop) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if(!children) return null;
  if (children.length <= length) return <p>{children}</p>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <p>
      {summary}{" "}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-4 px-3 py-1.5 bg-slate-300 dark:bg-yellow-400 text-black rounded-full"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </p>
  );
}
