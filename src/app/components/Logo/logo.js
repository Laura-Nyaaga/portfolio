"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Logo = () => {
  const titles = [
    "Software Developer",
    "Product Manager",
    "Data Analyst",
    "UI/UX Designer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const titlesLength = titles.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titlesLength);
    }, 2000);
    return () => clearInterval(interval);
  }, [titlesLength]);

  return (
    <section
      id="logo"
      className="px-4 sm:px-6 lg:px-8 pt-6 sm:py-8 lg:py-10 text-center bg-gray-800 mx-auto items-center font-['Roboto']"
    >
      <div className="leading-normal">
        <h5 className="text-white text-3xl sm:text-4xl lg:text-6xl w-full">
          Hello, I am{" "}
          <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
            Laura Nyaaga
          </span>
        </h5>

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-slide-title inline-block">
            <h5 className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl inline-block">
              {titles[currentIndex]}
            </h5>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-4 max-w-7xl mx-auto py-2 sm:py-12 lg:py-60">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-8 md:gap-y-20 md:gap-x-8 lg:gap-x-32 px-2 sm:px-4">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="glitter-border absolute inset-0 rounded-full" />
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

          <div className="flex flex-col items-center md:items-start text-white max-w-lg space-y-4 sm:space-y-6">
            <div className="flex gap-8 sm:gap-16 md:gap-32 lg:gap-96 text-yellow-500">
              <a
                href="https://github.com/Laura-Nyaaga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/laura-nyaaga-434b8b307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </a>
            </div>

            <div className="text-center md:text-left pt-2 sm:pt-6 lg:pt-8">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-loose text-left w-full">
                I am a software developer driven by a purpose: to build
                accessible, data-driven applications that address real-world
                challenges. With a background in mobile and web development, I
                am skilled in crafting secure, user-centric solutions in
                impactful fields.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-48 pt-2 sm:pt-6 lg:pt-8">
              <a
                href="/image/Laura Nyaaga - CV.pdf"
                download
                className="px-4 sm:px-6 py-2 text-white bg-yellow-600 rounded-lg font-semibold transition duration-300 hover:bg-yellow-500"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 text-white border border-white rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-gray-900"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .glitter-border {
            animation: rotate 15s linear infinite, pulse 5s infinite;
            filter: blur(20px);
            border: 8px solid rgba(0, 123, 255, 0.6);
          }

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
    </section>
  );
};

export default Logo;
