import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-br-graybg">
      <div className="px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-br-dark max-w-7xl mx-auto pt-16 pb-10">
        <div className="flex flex-col">
          <div className="order-2 lg:order-1">
            <h3 className="text-4xl font-semibold mt-5 lg:mt-0 lg:mb-5">
              Solutions
            </h3>
            <ul className="mb-10">
              <li className="mt-1">
                <Link href={"/"}>Smili Menu connecté</Link>
              </li>
              <li className="mt-1">
                <Link href={"/"}>Smili Commande en ligne</Link>
              </li>
              <li className="mt-1">
                <Link href={"/"}>Smili réservation en ligne</Link>
              </li>
              <li className="mt-1">
                <Link href={"/"}>Smili Menu connecté +</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="order-1 lg:order-2">
            <Image src={"/logo.svg"} width={80} height={60} alt="logo" />
          </Link>
        </div>

        <div>
          <h3 className="text-4xl font-semibold mb-5">Notre réseau</h3>
          <ul className="mb-10">
            <li className="mt-1">
              <Link href={"/"}>Devenir partenaire</Link>
            </li>
            <li className="mt-1">
              <Link href={"/"}>Recrutement</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white newsletter flex flex-col max-h-min px-10 pt-5 pb-10 rounded-md">
            <h3 className="text-4xl font-semibold">Newsletter</h3>
            <p className="">
              Inscrivez-vous à notre newsletter et recevez mensuellement des
              articles sur les bars et restaurants
            </p>
            <div className="mt-4 flex">
              <input
                type="text rounded"
                className="rounded-md bg-transparent border-white border-2 pl-2"
              />
              <button className="px-4 py-1 bg-br-lgray rounded-md ml-2">
                S’inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
