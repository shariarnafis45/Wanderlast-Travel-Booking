import Image from "next/image";
import React from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    image,
  } = destination;

  return (
    <div className="group overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      
      {/* Image Section */}
      <div className="relative h-[240px] overflow-hidden">
        
        <Image
          src={image}
          alt={destinationName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2 bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm">
          <span className="text-sm font-semibold text-gray-800">4.5</span>
          <FaStar className="text-sm text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 bg-[#f5f5f5] p-5">
        
        {/* Country */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaLocationDot className="text-[15px]" />
          <span>{country}</span>
        </div>

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[34px] leading-none font-medium text-gray-900">
              {destinationName}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {category} Tour Package
            </p>
          </div>

          <div className="shrink-0 text-right">
            <h3 className="text-3xl font-semibold text-gray-900">
              ${price}
              <span className="text-base font-normal text-gray-500">
                /Person
              </span>
            </h3>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600">
          <MdOutlineDateRange className="text-lg" />
          <span className="text-lg font-medium">
            {duration} Days/{duration - 1} Nights
          </span>
        </div>

        {/* Button */}
        <button className="group/btn flex items-center gap-2 border-b border-[#00B8D9] pb-1 text-lg font-medium uppercase tracking-wide text-[#00B8D9] transition-all duration-300 hover:gap-4">
          Book Now
          <FiArrowUpRight className="transition-transform duration-300 group-hover/btn:rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;