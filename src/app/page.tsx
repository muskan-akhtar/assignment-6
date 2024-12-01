import Header from "@/components/Header";
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Courses1 from "@/components/Courses1";
import Courses2 from "@/components/Courses2";
import Team from "@/components/Team";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <Courses1 />
      <Achievements />
      <Courses2 />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;
