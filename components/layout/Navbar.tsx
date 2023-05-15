"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const pathName = usePathname();

  return (
    <div className="fixed left-0 top-0 w-full bg-white z-30">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-6 px-5 lg:px-0">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={200} height={60} alt="logo" />
        </Link>
        <div>
          <button
            className="lg:hidden"
            onClick={() => {
              setShowMobileNavbar(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#456F72"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "flex-col lg:flex-row gap-6 items-center text-dark absolute left-0 top-0 bg-white z-20 w-full lg:w-auto py-10 lg:py-0 lg:relative " +
            (showMobileNavbar ? "flex" : "hidden lg:flex")
          }
        >
          <div className="flex justify-end w-full mr-10 lg:hidden">
            <button
              onClick={() => {
                setShowMobileNavbar(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#456F72"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {routes.map((route) => {
            return (
              <Link
                onClick={() => {
                  setShowMobileNavbar(false);
                }}
                key={route.title}
                href={route.href}
                className={
                  "hover:text-br-primary transition-colors duration-100 " +
                  (pathName === route.href
                    ? "text-br-primary "
                    : "text-br-secondary ")
                }
              >
                {route.title}
              </Link>
            );
          })}
          <Link
            href={"/connexion"}
            className="bg-br-secondary px-12 py-2 text-white rounded-md hover:bg-br-primary transition-colors duration-300"
          >
            Essayer
          </Link>
        </div>
      </div>
    </div>
  );
};

const routes: Route[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Connexion",
    href: "/connexion",
  },
];

interface Route {
  title: string;
  href: string;
}

export default Navbar;
