import Image from "next/image";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section className="padding" id="about-us">
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red "> Super </span>
            <span className="text-coral-red ">Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Out dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>
        <div className="flex-1 justify-center items-center">
          <Image
            src="/images/shoe8.svg"
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default SuperQuality;
