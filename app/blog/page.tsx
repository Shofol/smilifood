"use client";

import React from "react";
import QrCode from "../../components/Home/QrCode";
import Hero from "@/components/Blog/Hero";
import SmiliFeatures from "@/components/Blog/SmiliFeatures";
import SalesFeatures from "@/components/Blog/SalesFeatures";
import Solution from "@/components/Blog/Solution";
import Faq from "@/components/Solutions/Faq";

const Page = () => {
  return (
    <div>
      <Hero />
      <SmiliFeatures />
      <SalesFeatures />
      <Solution />
      <QrCode />
      <Faq />
    </div>
  );
};

export default Page;
