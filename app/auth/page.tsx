"use client";

import Input from "@/components/auth/Input";
import Image from "next/image";
import React from "react";

type Props = {};

const AuthPage = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [variant, setVariant] = React.useState("login");
  const toggleVariant = React.useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-black h-full w-full lg:bg-black/70">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="netflix-logo"
            width={120}
            height={80}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md  rounded-md full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            {variant === "login" && (
              <p className="text-neutral-500 mt-12 text-sm">
                First time using Netflix?{" "}
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={toggleVariant}
                >
                  Create an account
                </span>
              </p>
            )}
            {variant === "register" && (
              <p className="text-neutral-500 mt-12 text-sm">
                Already have an account?{" "}
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={toggleVariant}
                >
                  Sign in now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
