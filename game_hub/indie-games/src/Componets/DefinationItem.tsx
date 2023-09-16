import { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
export default function DefinationItem({ term, children }: Props) {
  return (
    <>
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-xl font-semibold text-gray-600">{term}</h1>
          <div className="flex flex-col space-y-3">{children}</div>
        </div>
      
    </>
  );
}
