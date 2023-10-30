"use client";

import Input from "@/components/auth/Input";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = {};

const AuthPage = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const [variant, setVariant] = React.useState("login");
  const toggleVariant = React.useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  const login = React.useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profiles",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = React.useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

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
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Sign In" : "Register"}
            </button>
            <div
              onClick={() => {
                signIn("google", { callbackUrl: "/profiles", redirect: true });
              }}
              className="flex flex-row gap-4 items-center mt-8 justify-center"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => {
                  signIn("github", {
                    callbackUrl: "/profiles",
                    redirect: true,
                  });
                }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>
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
