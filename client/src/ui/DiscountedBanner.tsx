import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router-dom";
import {
  brandFive,
  brandFour,
  brandOne,
  brandSix,
  brandThree,
  brandTwo,
  discountImgOne,
  discountImgTwo,
} from "../assets";

const DiscountedBanner = () => {
  const popularSearchItems = [
    { title: "Smart Watches", link: "smartwatches" },
    { title: "Headphone", link: "headphones" },
    { title: "Cameras", link: "camerasAndPhotos" },
    { title: "Audio", link: "tvAndAudio" },
    { title: "Laptop & Computers", link: "computersAndLaptop" },
    { title: "Cell Phone", link: "cellPhones" },
  ];

  return (
    <Container>
      <div>
        <Title text="Popular Search" />
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      <div className="my-7 flex items-center flex-wrap gap-4">
        {popularSearchItems?.map(({ title, link }) => (
          <Link
            key={title}
            to={`/category/${link}`}
            className=" border-[1px] border-gray-300 px-8 py-3 rounded-full capitalize font-medium hover:text-white hover:bg-black duration-200"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
        <img
          src={discountImgOne}
          alt="discountedImageOne"
          className="hidden lg:inline-flex-36"
        />
        <div className="flex flex-col flex-1 gap-x-1 items-center">
          <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
            <h2 className="">Sony Headphone</h2>
            <Link
              to={"/product"}
              className="border border-red-600 px-3 py-1 font-semibold md:px-4 md:py-2 text-red-600 rounded-full"
            >
              discount 20%
            </Link>
          </div>
          <p className="text-sm mt-2 text-gray-600 font-medium">
            You're out to play or stepping out to make{" "}
          </p>
        </div>
        <img
          src={discountImgTwo}
          alt="discountedImgTwo"
          className="hidden lg:inline-flex h-36"
        />
      </div>
      <div className="mt-7">
        <p className="font-bold text-2xl ">Brands We Distribute</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7">
          <div className="border md:border-r-0  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandOne}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border md:border-r-0  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandTwo}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border md:border-r-0  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandThree}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border md:border-r-0  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFour}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border md:border-r-0  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFive}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
          <div className="border  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandSix}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DiscountedBanner;
