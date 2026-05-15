import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";

import { getDestinationDetailsById } from "@/lib/data";
import { EditModal } from "@/components/shared/EditModal";
import { DeleteAlert } from "@/components/shared/DeleteAlert";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const destinationData = await getDestinationDetailsById(id);

  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    image,
    description,
  } = destinationData;

  return (
    <div className="bg-[#f3f3f3] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Back Button */}
        <div className="mb-5 flex justify-between flex-wrap  gap-5">
          <Link
            href="/destinations"
            className="text-sm text-[#7a7a7a] hover:text-[#11b5d8] transition"
          >
            ← Back to Destinations
          </Link>
          <div className="flex items-center gap-4">
            <EditModal destinationData={destinationData} />
            <DeleteAlert destinationData={destinationData}/>
          </div>
        </div>

        {/* Main Container */}
        <div className="bg-white border border-[#e5e5e5] rounded-sm overflow-hidden">
          {/* Hero Image */}
          <div className="relative w-full h-[260px] md:h-[420px] lg:h-[520px]">
            <Image
              src={image}
              alt={destinationName}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 lg:p-10">
            {/* Left Side */}
            <div className="lg:col-span-2">
              {/* Country */}
              <div className="flex items-center gap-2 text-sm text-[#8a8a8a] mb-3">
                <FaMapMarkerAlt className="text-[#11b5d8] text-[12px]" />
                <span>{country}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-[52px] font-light text-[#111111] mb-5 leading-tight tracking-[-1px]">
                {destinationName}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 mb-10">
                <div className="flex items-center gap-2">
                  <FaStar className="text-green-500 text-sm" />

                  <span className="font-semibold text-sm text-[#111]">4.9</span>

                  <span className="text-[#7c7c7c] text-sm">(234 reviews)</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#555]">
                  <FiCalendar />

                  <span>
                    {duration} Days / {duration - 1} Nights
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-medium mb-5 text-[#111]">
                  Overview
                </h2>

                <p className="text-[#5f5f5f] leading-8 text-[15px]">
                  {description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-3xl font-medium mb-7 text-[#111]">
                  Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      Luxury resort accommodation
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      Scenic mountain and beach tours
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      Traditional local cultural activities
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      Sunset dinner experience
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      Comfortable transport & guide
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 text-[12px]" />

                    <p className="text-[#666] text-[14px]">
                      24/7 customer support included
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div>
              <div className="border border-[#e6e6e6] rounded-sm p-6 sticky top-24 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white">
                {/* Price */}
                <div className="mb-7">
                  <p className="text-[#7c7c7c] text-sm mb-1">Starting from</p>

                  <h2 className="text-[#11b5d8] text-[44px] font-semibold leading-none">
                    ${price}
                  </h2>

                  <p className="text-[#7c7c7c] text-sm mt-1">per person</p>
                </div>

                {/* Date */}
                <div className="mb-5">
                  <input
                    type="text"
                    value={departureDate}
                    readOnly
                    className="w-full border border-[#e5e5e5] bg-[#f8f8f8] px-4 py-3 text-sm outline-none text-[#555]"
                  />
                </div>

                {/* Button */}
                <button className="w-full bg-[#11b5d8] hover:bg-[#0ea4c5] transition text-white py-4 font-medium flex items-center justify-center gap-2">
                  Book Now
                  <IoArrowForward />
                </button>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#666]">
                    <FaCheck className="text-green-500 text-[11px]" />

                    <span>Free cancellation up to 7 days</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#666]">
                    <FaCheck className="text-green-500 text-[11px]" />

                    <span>Travel insurance included</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#666]">
                    <FaCheck className="text-green-500 text-[11px]" />

                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-8 bg-white border border-[#e5e5e5] rounded-sm p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium text-[#111] mb-2">
                Destination Type
              </h3>

              <p className="text-[#666]">{category}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#111] mb-2">
                Departure Date
              </h3>

              <p className="text-[#666]">{departureDate}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#111] mb-2">
                Trip Duration
              </h3>

              <p className="text-[#666]">{duration} Days Tour Package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
