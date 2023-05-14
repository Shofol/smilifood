import React from "react";
import QrCode from "../../components/Home/QrCode";
import Hero from "@/components/Blog/Hero";
import SmiliFeatures from "@/components/Blog/SmiliFeatures";
import SalesFeatures from "@/components/Blog/SalesFeatures";
import Solution from "@/components/Blog/Solution";
import Faq from "@/components/Solutions/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to SmiliFood Blog",
};

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
