import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import data from "../data";
import { Metadata } from "next";
import Map from "@/components/Map";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
      <div className="animate_top mx-auto text-center">
          <SectionHeader 
          style={''}
            headerInfo={{
              title: ``,
              subtitle: data[3].subtitle,
              description: data[3].description,
            }}
          />
        </div>
        <Map latitude={30.41056} longitude={-9.55556}/>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data[3]?.details?.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
