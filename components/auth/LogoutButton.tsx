"use client";
import React from "react";
import { signOut } from "next-auth/react";

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <button
      onClick={() => signOut()}
      className="text-center h-10 w-full bg-white"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
