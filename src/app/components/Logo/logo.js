"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  const titles = [
    "Software Developer",
    "Product Manager",
    "Data Analyst",
    "UI/UX Designer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-8 py-10 text-center bg-gray-800 mx-auto items-center">
      <div className="mx-auto leading-normal">
        <h5 className="text-6xl w-full font-family:'Roboto'">
          Hello, I'm{" "}
          <span className="text-6xl font-bold font-family: 'Roboto'">
            Laura Nyaaga
          </span>
        </h5>

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-slide-title  inline-block">
            <h5 className="text-yellow-300 text-4xl font-['Roboto'] inline-block">
             {titles[currentIndex]}
            </h5>
          </div>

          <style jsx global>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(100%);
              }
            }
           .animate-slide-title {
          animation: slidein 15s ease-in-out;
        }
          `}</style>
        </div>

      </div>
      <div className="container mx-auto max-w-7xl pt-40">
        <div className="flex flex-col md:flex-row items-center justify-center gap-40 px-4">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div
              className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-yellow-200 via-gray-400 to-yellow-200"
              style={{
                filter: "blur(20px)",
                transform: "scale(1.1)",
                animation: "pulse 3s infinite, rotate 8s linear infinite",
              }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/image/lauranyaaga.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl leading-loose font-['Roboto'] ml-10">
              A passionate software developer who is dedicated to developing
              tech solutions that address real world challenges by integrating
              technology with intuitive designs which are user-centric aiming at
              enhancing better user experience.
            </p>
          </div>
        </div>

        {/* Add keyframe animation */}
        <style jsx global>{`
          @keyframes rotate {
            from {
              transform: rotate(0deg) scale(1.1);
            }
            to {
              transform: rotate(360deg) scale(1.1);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Logo;
