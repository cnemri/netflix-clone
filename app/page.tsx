import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/ui/Navbar";
import Billboard from "@/components/ui/Billboard";
import MovieList from "@/components/movie/MovieList";
import useMovieList from "@/hooks/useMovieList";

export default async function Home() {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" />
      </div>
    </>
  );
}
