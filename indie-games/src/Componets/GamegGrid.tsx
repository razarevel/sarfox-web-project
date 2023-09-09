import React from "react";
import useGame from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonLoading from "./SkeletionLoading";
import InfiniteScroll from "react-infinite-scroll-component";
export default function GameGrid() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          isLoading && skeletons.map((item) => <SkeletonLoading key={item} />)
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-4 md:mx-0 md:mr-4 lg:mr-8">
          {error && <p className="text-3xl text-red-500">{error.message}</p>}
          {isLoading && skeletons.map((item) => <SkeletonLoading key={item} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((page) => (
                <GameCard key={page.id} game={page} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
