"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let x = {
    title: "Welcome to Young Blood Kitesurfing",
    subTitle: "Experience the Thrill of Kitesurfing in Dakhla, Morocco",
    description: "Join us for an exhilarating kitesurfing adventure in the stunning coastal town of Dakhla, Morocco. Feel the rush of adrenaline as you glide across the turquoise waters, surrounded by breathtaking natural beauty. Whether you're a novice or an experienced rider, our expert instructors and personalized lessons ensure an unforgettable experience. Book your adventure with Young Blood Kitesurfing today and discover the ultimate thrill of kitesurfing.",
    videoBg:"videos/kitesurf"
  };
  
  return (
    <>
      <section className="overflow-hidden pb-20  xl:pb-25">
      <div className="beach bg-gradient-to-t from-primary to-slate-100 dark:to-gray-700">
  <div className="beach__waves" />
  <div className="beach__sand beach__sand--background" />
  <div className="beach__sand beach__sand--foreground" />
</div>
 <div className="absolute min-w-screen top-[10vh]   md:top-[25vh]   flex justify-center">

 <div className="w-[70%] backdrop-blur-md dark:bg-black/20 bg-gray-50/20 p-10 rounded-3xl shadow-lg  ">
          <div className="flex  lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="lg:w-1/2">
              <h4 className="mb-4.5 text-primary md:text-lg font-medium ">
               {x.title}
              </h4>
              <h1 className="mb-5 pr-16 text-2xl md:text-3xl font-bold text-black dark:text-white xl:text-hero ">
               {x.subTitle}
              </h1>
              <p className="md:block hidden">
                {x.description}
              </p>
              <p className="block md:hidden">
                {x.description.slice(0,99)}
              </p>


              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div> */}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
              <img className="rounded-lg" src="images/hero/kitesurf.webp"/>
              </div>
            </div>
          </div>
        </div>
 </div>

      </section>
    </>
  );
};

export default Hero;
