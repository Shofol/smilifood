"use client";

import Image from "next/image";
import React, { useState } from "react";
import Disclousures from "../layout/Disclousures";
import { featuresData } from "@/data/appFeaturesData";

const AppFeatures = () => {
  const [currentImage, setCurrentImage] = useState(featuresData[0].image);

  const handleCurrentImage = (index: number) => {
    setCurrentImage(featuresData[index].image);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto my-10 lg:my-24">
      <div className="flex-1 h-96 lg:h-auto lg:min-h-screen py-10 lg:mr-20">
        <div className="relative h-full flex">
          <Image
            src={currentImage}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            alt="woman cooking"
            className="rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0">
        <h3 className="text-3xl text-br-dark font-bold">
          Smili food le logiciel polyvalant
        </h3>
        <p className="text-br-ldark pt-2">
          Offrez une expérience de commande exceptionnelle pour
          <br /> vous et vos clients.
        </p>
        <div className="mt-10 border-l-4 pl-5 lg:pl-10 lg:ml-5 border-l-br-primary">
          <Disclousures action={handleCurrentImage} data={featuresData} />
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
