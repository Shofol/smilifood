"use client";

import Image from "next/image";
import { useState } from "react";
import Disclousures from "../layout/Disclousures";
import { featuresData } from "@/data/appFeaturesData";

const AppFeatures = () => {
  const [currentImage, setCurrentImage] = useState(featuresData[0].image);

  const handleCurrentImage = (index: number) => {
    setCurrentImage(featuresData[index].image);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl px-5 lg:px-10 xl:px-0 xl:mx-auto my-10 lg:my-24">
      <div className="flex-1 h-96 lg:min-h-[60vh] xl:min-h-screen py-10 lg:mr-20">
        <div className="relative h-full flex">
          {featuresData.map((feature) => {
            return (
              <Image
                key={feature.heading}
                src={feature.image}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                alt={feature.heading}
                className={
                  "transition-opacity duration-300 rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl " +
                  (currentImage === feature.image ? "opacity-100" : "opacity-0")
                }
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0">
        <h3 className="text-3xl text-br-dark font-bold">
          Fastfood the versatile software
        </h3>
        <p className="text-br-ldark pt-2">
          Deliver an exceptional ordering experience for
        </p>
        <div className="mt-10 border-l-4 pl-5 lg:pl-10 lg:ml-5 border-l-br-primary">
          <Disclousures action={handleCurrentImage} data={featuresData} />
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
