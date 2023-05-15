import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-br-graybg">
      <div className="max-w-7xl mx-auto">
        <div className="px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-br-dark pt-16 pb-10">
          <div className="flex flex-col justify-start items-start ">
            <Link href={"/"}>
              <Image src={"/logo.png"} width={250} height={60} alt="logo" />
            </Link>
            <p className="pt-6 pl-2 text-br-secondary">
              Economisez du temp et de l’argent <br /> avec votre logiciel Smili
              food
            </p>
          </div>

          <div className="flex flex-col">
            <ul className="mb-10 text-br-secondary text-xl">
              <li className="mb-4">
                <Link className="hover:text-br-primary" href={"/"}>
                  Solutions
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:text-br-primary" href={"/"}>
                  Ressources
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:text-br-primary" href={"/"}>
                  L’équipe
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/instagram.svg"}
                  alt={"instagram logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/facebook.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link className="hover:opacity-80" href="/">
                <Image
                  src={"/linkedin.svg"}
                  alt={"linkedin logo"}
                  width={24}
                  height={24}
                />
              </Link>

              <Link className="hover:opacity-80" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#456F72"
                  stroke="#456F72"
                  stroke-Width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-lg bg-br-gray text-br-secondary flex flex-col max-h-min px-10 pt-5 pb-10 rounded-md">
            <h3 className="text-4xl font-semibold">Newsletter</h3>
            <p className="pt-2">
              Inscrivez-vous à notre newsletter et recevez mensuellement des
              articles sur les bars et restaurants
            </p>
            <div className="mt-4 flex">
              <input
                type="text rounded"
                className="rounded-md bg-white border-white border-2 pl-2"
              />
              <button className="px-4 py-1 bg-br-primary text-white rounded-md ml-2 hover:opacity-80">
                S’inscrire
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-br-lgreen h-px"></div>

        <div className="flex justify-between text-br-lgreen pt-2 pb-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} SmiliFood, Tous les droits sont
            réservés
          </p>
          <Link href={"/"}>Mentions légales</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
