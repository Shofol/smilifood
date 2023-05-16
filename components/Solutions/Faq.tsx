"use client";

import React from "react";
import { faqsData } from "../../data/faqs";
import Disclousures from "../layout/Disclousures";

const Faq = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col justify-center px-5 lg:px-0 max-w-5xl mx-auto pb-24">
        <h3 className="text-3xl font-bold text-br-dark border-l-4 border-l-br-primary pl-5">
          Les questions anticipé | Smili Menu connecté
        </h3>
        <div className="mt-10 ">
          <Disclousures data={faqsData} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
