import AppFeatures from "@/components/Home/AppFeatures";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import QrCode from "@/components/Home/QrCode";
import Support from "@/components/Home/Support";
import Testimonials from "@/components/Home/Testimonials";
import Faq from "../components/Solutions/Faq";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Features />
      <AppFeatures />
      <Support />
      <Testimonials />
      <QrCode />
      <Faq />
    </main>
  );
}
