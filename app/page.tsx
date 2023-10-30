import LogoutButton from "@/components/auth/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/ui/Navbar";

export default async function Home() {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    redirect("/auth");
  }
  return (
    <>
      <Navbar />
    </>
  );
}
