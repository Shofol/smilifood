import QrCode from "../../components/Home/QrCode";
import Hero from "@/components/OnlineOrder/Hero";
import SmiliFeatures from "@/components/OnlineOrder/SmiliFeatures";
import SalesFeatures from "@/components/OnlineOrder/SalesFeatures";
import Solution from "@/components/OnlineOrder/Solution";
import Faq from "@/components/ConnectedMenu/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to Fastfood Blog",
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
