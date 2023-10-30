"use client";
import React from "react";
import MovieList from "./MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

type Props = {};

const MoviesSection = (props: Props) => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  return (
    <div className="pb-40">
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="My List" data={favorites} />
    </div>
  );
};

export default MoviesSection;
