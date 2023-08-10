"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/pinterest.png";
import man from "@/public/avatar.png";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="flex gap-3 p-6 items-center">
      <Image
        src={logo}
        alt={""}
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button className="bg-black rounded-full p-2 px-4 text-white ">
        Home
      </button>
      <button className=" p-2 px-4   font-semibold ">Create</button>
      <div className=" bg-[#e9e9e9] p-3 items-center gap-3 rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiSearch className="text-[25px] text-gray-500 md:hidden" />
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      {session?.user ? (
        <Image
          src={session?.user?.image}
          alt={"user-image"}
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button className=" p-2 px-4   font-semibold " onClick={() => signIn()}>
          Login
        </button>
      )}
    </div>
  );
}
