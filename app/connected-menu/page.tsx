import Hero from "@/components/ConnectedMenu/Hero";
import QrCode from "@/components/Home/QrCode";
import Advantages from "@/components/ConnectedMenu/Advantages";
import Benefits from "@/components/ConnectedMenu/Benefits";
import Discover from "@/components/ConnectedMenu/Discover";
import Faq from "@/components/ConnectedMenu/Faq";
import How from "@/components/ConnectedMenu/How";
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
