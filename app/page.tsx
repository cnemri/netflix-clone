import LogoutButton from "@/components/auth/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    redirect("/auth");
  }
  return (
    <div>
      <div className="text-4xl text-green-400">Netflix Clone</div>
      {user && <p className="text-white">Logged in as {user.name}</p>}
      <LogoutButton />
    </div>
  );
}
