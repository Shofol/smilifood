import Hero from "@/components/Solutions/Hero";
import QrCode from "@/components/Home/QrCode";
import Advantages from "@/components/Solutions/Advantages";
import Benefits from "@/components/Solutions/Benefits";
import Discover from "@/components/Solutions/Discover";
import Faq from "@/components/Solutions/Faq";
import How from "@/components/Solutions/How";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solution",
  description: "Welcome to Fastfood Solutions",
};

const Page = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Advantages />
      <How />
      <QrCode />
      <Faq />
      <Discover />
    </div>
  );
};

export default Page;
