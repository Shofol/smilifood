import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="bg-black absolute left-0 top-0 w-full h-full opacity-50 z-10"></div>
      <div className="relative py-48 z-10 text-white max-w-4xl pl-28">
        <h1 className="text-6xl font-bold pl-4 mb-4 border-l-4 border-l-br-primary">
          Smili commande en ligne
        </h1>
        <p className="text-xl text-justify pr-36">
          Ne perdez plus de temp à décrocher au téléphone et augmentez vos
          ventes
        </p>
      </div>
      <Image
        src={"/heroBg.png"}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
