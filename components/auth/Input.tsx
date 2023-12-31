"use client";
import React from "react";

type Props = {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
};

const Input = ({ id, onChange, value, label, type = "text" }: Props) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            text-white
            bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            "
        placeholder=" "
        onChange={onChange}
        value={value}
        type={type}
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
