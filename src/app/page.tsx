import FeaturedCourses from "@/Components/FeaturedCourses";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructor from "@/Components/Instructor";
import TestimonialCards from "@/Components/TestimonialCards";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
