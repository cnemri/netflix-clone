import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";
import Image from "next/image";
import ProfileSelector from "@/components/profiles/ProfileSelector";

type Props = {};

const Profiles = async (props: Props) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    redirect("/auth");
  }
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&apos;s watching?
        </h1>
        <ProfileSelector name={user.name} />
      </div>
    </div>
  );
};

export default Profiles;
