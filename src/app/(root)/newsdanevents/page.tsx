"use client";

import Image from "next/image";
import React from "react";
import SliderImage from "@/components/SliderImage";
import { ImagesEventPage } from "@/constants";

const NewsdanEvent = () => {
  return (
    <>
      <section className="bg-[#151131] pb-10">
        <div className="wrapper">
          <div>
            <SliderImage autoSlides={true} autoSlideInterval={3000} />
          </div>
          <div className="flex flex-col space-y-5 px-3 md:flex-row md:overflow-auto gap-5 rounded-md">
            {ImagesEventPage.map((image, index) => (
              <div
                className="grid grid-rows-1 md:min-w-[350px] md:min-h-[300px] bg-blue-950"
                key={index}
              >
                <Image
                  src={image.url}
                  alt={"/"}
                  width={400}
                  height={600}
                  className="flex flex-col bg-cover"
                />
                <div className="flex flex-col h-full p-5 space-y-5">
                  <p className="text-blue-600 ">{image.title1}</p>
                  <p
                    className="text-white
                flex text-wrap"
                  >
                    {image.title2}
                  </p>
                  <div>
                    <button className="py-2 px-4 rounded-md text-blue-600 font-bold active:bg-blue-500">
                      LIHAT LEBIH
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsdanEvent;
