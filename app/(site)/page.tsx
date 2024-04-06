import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import data from "./data";
import Map from "@/components/Map";
export const metadata: Metadata = {
  title: "Young blood",
  description: "young blood landing page",
  icons:'/images/favicon.ico'
};

export default function Home() {

  return (
    <main className="bg-gradient-to-t from-primary/40">
      <Hero />
      <Feature courses={data[1]} />
      <Testimonial data={data[0]} />
      <About data={data[2]}/>
      <Blog data={data[3]}/>
      <FeaturesTab />
      <Map latitude={30.41056} longitude={-9.55556}/>
      <Contact />
    </main>
  );
}
