"use client";
import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (movieId: string) => {
  const { data, error, isLoading } = useSwr(`/api/movies/${movieId}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useMovie;
