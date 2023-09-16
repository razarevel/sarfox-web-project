import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Navbar from "../Componets/Navbar";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
    <Navbar />
      <h1 className="text-6xl">Oops</h1>
      <p className="text-4xl">
        {isRouteErrorResponse(error)
          ? "this pages does not exit"
          : "An unexpected error ocurred."}
      </p>
    </>
  );
}
