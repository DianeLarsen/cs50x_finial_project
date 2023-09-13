"use client";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import Link from "next/link";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-500 h-12 pt-1 text-white flex fixed w-full transition-all
    duration-200">
      <div className="flex justify-between items-center w-full md:px-12 px-2 relative">
        <h1 className="text-xl"><Link href="/" >Practice</Link></h1>
        <div className="md:hidden">
          {open ? (
            <ImCancelCircle
              className="text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <CgDetailsMore
              className="text-2xl"
              onClick={() => setOpen((prev) => !prev)}
            />
          )}
        </div>
        <ul className="gap-5 font-semibold md:flex hidden">
          <li>
            <Link href="/home">Home</Link>{" "}
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul
          className={`absolute top-[calc(100%+0vh)] w-full text-center leading-9 font-semibold md:hidden lg:hidden xl:hidden  ${
            open ? "left-0" : "left-[-100%]"
          } duration-700`}
        >
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
