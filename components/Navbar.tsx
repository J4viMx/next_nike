"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src="/images/header-logo.svg"
            alt="Logo header"
            width={130}
            height={29}
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image
            src="/icons/hamburger.svg"
            alt="Icon hamburger"
            width={25}
            height={25}
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <div
          className={`w-full h-screen bg-coral-red absolute z-40 top-0 left-0 flex justify-center items-center transition-all ${
            openMenu ? "block" : "hidden"
          }`}
        >
          <p
            className="absolute top-10 right-10 text-white cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            X
          </p>
          <ul className="flex-1 flex flex-col justify-center items-center gap-16">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
