export default function SkeletonLoading() {
  return (
    <>
      <div className="flex flex-col p-4 pb-6 space-y-6 bg-slate-200
       dark:bg-gray-800 rounded-lg overflow-hidden duration-150 
        hover:scale-105 cursor-pointer ">
            <div className="w-full h-[200px] bg-slate-100 dark:bg-gray-700 rounded-lg"></div>
            <div className="w-full h-10 bg-slate-100 dark:bg-gray-700 rounded-lg"></div>
            <div className="w-full h-10 bg-slate-100 dark:bg-gray-700 rounded-lg"></div>
        </div>
    </>
  );
}
