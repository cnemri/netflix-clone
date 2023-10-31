import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/ui/Navbar";
import Billboard from "@/components/ui/Billboard";
import MoviesSection from "@/components/movie/MoviesSection";
import InfoModal from "@/components/movie/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import InfoModalClientWrapper from "@/components/movie/InfoModalClientWrapper";

export default async function Home() {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <InfoModalClientWrapper />
      <Navbar />
      <Billboard />
      <MoviesSection />
    </>
  );
}
