import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Portfolio } from "@/components/sections/Portfolio";
import { TheLook } from "@/components/sections/TheLook";
import { Services } from "@/components/sections/Services";
import { Bridal } from "@/components/sections/Bridal";
import { Course } from "@/components/sections/Course";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Instagram } from "@/components/sections/Instagram";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Portfolio />
        <TheLook />
        <Services />
        <Bridal />
        <Course />
        <About />
        <Testimonials />
        <Instagram />
        <Booking />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
