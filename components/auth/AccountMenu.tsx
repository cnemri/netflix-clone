"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  visible?: boolean;
};

const AccountMenu = ({ visible }: Props) => {
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div
          onClick={() => router.push("/profiles")}
          className="px-3 group/item flex flex-row gap-3 items-center w-full"
        >
          <img
            src="/images/default-blue.png"
            alt="profile-avatar"
            className="w-8 rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
        <hr className="bg-gray-800 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
