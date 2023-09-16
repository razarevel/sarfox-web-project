import ReviewsContext from "./ReviewCompo/ReviewsContext";
import ReviewsHeading from "./ReviewCompo/ReviewsHeading";

export default function Reviews() {
  return (
    <>
      <div id="reviews"
        className="w-full flex flex-col items-center justify-center bg-slate-50 z-40 relative
      space-y-10 px-2 md:px-6 py-16"
      >
        {/* Heading */}
        <ReviewsHeading />
        {/* Context */}
        <ReviewsContext />
      </div>
    </>
  );
}
