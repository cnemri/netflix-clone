import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const serverAuth = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) throw new Error("Not authenticated");
  const currentUser = await prismadb.user.findUnique({
    where: {
      email: user?.email || "",
    },
  });
  if (!currentUser) throw new Error("Not authenticated");
  return { currentUser };
};

export default serverAuth;
