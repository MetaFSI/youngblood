import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import Link from "next/link";

const Blog = async ({data}) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
          style={'none'}
            headerInfo={{
              title: data.title,
              subtitle: data.subtitle,
              description: data.description,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.details.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
        <div className="flex justify-center py-4">
        <Link href={'locations'} className="bg-primaryho font-semibold tracking-wider text-white text-sm py-1 px-4 rounded-full">See more</Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
