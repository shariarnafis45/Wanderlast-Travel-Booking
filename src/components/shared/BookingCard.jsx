"use client";
import { authClient } from "@/lib/auth-client";
import { Calendar } from "@gravity-ui/icons";
import { DateField, Label } from "@heroui/react";
import { redirect } from "next/navigation";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { toast } from "react-toastify";

const BookingCard = ({ destinationData }) => {
  const [dateFieldData, setDateFieldData] = useState(null);
  const { data: session } = authClient.useSession();
  const user = session?.user;

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

  const handleBooking = async () => {
    const bookingData = {
      userName: user?.name,
      userEmail: user?.email,
      destinationName,
      country,
      duration,
      userImage: user?.image,
      duration,
      departureDate: new Date(dateFieldData),
    };
    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Booking Successfull", {
        position: "top-center",
      });
      redirect("/destinations");
    } else {
      toast.error(`Opsss!! Please try again`, {
        position: "top-center",
      });
    }
  };
  return (
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
        <DateField
          onChange={setDateFieldData}
          className="w-[256px]"
          name="date"
        >
          <Label>Departure Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateField.Suffix>
              <Calendar className="size-4 text-muted" />
            </DateField.Suffix>
          </DateField.Group>
        </DateField>

        {/* Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-[#11b5d8] hover:bg-[#0ea4c5] transition text-white py-4 font-medium flex items-center justify-center gap-2 mt-6"
        >
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
  );
};

export default BookingCard;
