import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg  !select-none bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>

        <img className="rounded-full max-h-15 max-w-15"  src={image} alt={name} />
      </div>

      <p  className="h-44 mb-2 md-h-28">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
