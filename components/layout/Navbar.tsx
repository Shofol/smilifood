import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto py-5">
      <Link href={"/"}>
        <Image src={"/logo.svg"} width={80} height={60} alt="logo" />
      </Link>
      <div className="flex gap-6 items-center text-dark">
        <Link
          href={"/"}
          className="hover:text-br-primary transition-colors duration-100"
        >
          Home
        </Link>
        <Link
          href={"/solutions"}
          className="hover:text-br-primary transition-colors duration-100"
        >
          Solutions
        </Link>
        <Link
          href={"/contact"}
          className="hover:text-br-primary transition-colors duration-100"
        >
          Contact
        </Link>
        <Link
          href={"/blog"}
          className="hover:text-br-primary transition-colors duration-100"
        >
          Blog
        </Link>
        <Link
          href={"/connexion"}
          className="bg-br-dark px-5 py-2 text-white rounded-md hover:bg-br-primary hover:text-br-dark transition-colors duration-300"
        >
          Connexion
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
