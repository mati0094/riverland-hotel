import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}
