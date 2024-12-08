"use client";

import Image from "next/image";
import { salesFeaturesData } from "@/data/salesFeaturesData";
import Disclousures from "../layout/Disclousures";

const SalesFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-5 lg:mx-10 xl:mx-auto my-10 lg:my-24">
      <div className="flex-1 h-96 lg:min-h-[40vh] xl:min-h-screen py-10 lg:mr-20">
        <div className="relative h-full flex">
          <Image
            src={"/cooking.png"}
            fill
            style={{ objectFit: "cover" }}
            alt="woman cooking"
            className="rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-3xl"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0">
        <div className="mt-10 border-l-4 pl-5 lg:pl-10 lg:ml-5 border-l-br-primary">
          <Disclousures data={salesFeaturesData} />
        </div>
      </div>
    </div>
  );
};

export default SalesFeatures;
