"use client";

import Image from "next/image";
import { benefitsData } from "../../data/benefits";
import Disclousures from "../layout/Disclousures";

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl px-5 lg:px-10 xl:px-0 xl:mx-auto my-10 lg:my-24">
      <div className="flex-1 h-96 lg:h-auto lg:min-h-[40vh] xl:min-h-screen py-10 lg:mr-20">
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
        <h3 className="text-3xl text-br-dark font-bold">
          Increase your turnover while saving time
        </h3>
        <div className="mt-10 border-l-4 pl-5 lg:pl-10 lg:ml-5 border-l-br-primary">
          <Disclousures data={benefitsData} />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
