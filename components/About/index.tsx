"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = ({ data }) => {
  return (
    <section className="relative pt-[10vh] mt-[-11vh] md:mt-[-9vh]">
      <div className="absolute inset-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full opacity-90 h-full object-cover">
  <source src="/videos/kitesurf.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
      <div className="relative z-10">
        <div className="mx-auto text-center pb-8">
          <SectionHeader
            style={'act'}
            headerInfo={{
              title: data.title,
              subtitle: data.subtitle,
              description: data.description,
            }}
          />
        </div>
        {data?.details?.map((content, index) => (
          <div key={index} className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
            <div className={`${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex items-center gap-8 lg:gap-32.5 mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0`}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2`}
              >
                <Image
                
                  src={content.image}
                  alt={content.title}
                  sizes="auto"
                  className="rounded-xl opacity-90"
                  fill
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`animate_right md:w-1/2`}
              >
                <span className="font-medium uppercase">
                  <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                    {content.title}
                  </span>
                </span>
                <h2 className="relative mb-6 text-3xl font-bold text-white md:dark:text-white md:text-black drop-shadow xl:text-hero">
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-primary dark:before:bg-titlebgdark">
                    {content.subtitle}
                  </span>
                </h2>
                <p className="text-gray-200 md:text-gray-800 md:dark:text-gray-200 backdrop-blur p-3 rounded-lg shadow-md">{content.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
