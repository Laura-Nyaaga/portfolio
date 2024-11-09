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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="px-8 py-10 text-center bg-gray-800 mx-auto items-center font-['Roboto']">
      <div className=" leading-normal">
        <h5 className="text-6xl w-full">
          Hello, I'm{" "}
          <span className="text-6xl font-bold ">
            Laura Nyaaga
          </span>
        </h5>

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-slide-title  inline-block">
            <h5 className="text-yellow-300 text-4xl  inline-block">
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

      <div className="px-4 max-w-7xl mx-auto py-60">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-20 md:gap-x-32 px-4">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
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

          <div className="flex flex-col items-center md:items-start text-white max-w-lg space-y-6">
            <div className="flex gap-96 text-yellow-500">
              <a
                href="https://github.com/Laura-Nyaaga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub size={50} />
              </a>
              <a
                href="https://www.linkedin.com/in/laura-nyaaga-434b8b307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin size={50} />
              </a>
            </div>

            <div className="text-center md:text-left pt-8">
              <p className="text-2xl md:text-3xl leading-loose text-left w-[680px]">
                A passionate software developer who is dedicated to developing
                tech solutions that address real-world challenges by integrating
                technology with intuitive designs that are user-centric, aiming
                at enhancing a better user experience.
              </p>
            </div>

            <div className="flex gap-48 pt-8">
              <a
                href="/image/Laura Nyaaga - CV.pdf"
                download
                className="px-6 py-2 text-white bg-yellow-600 rounded-lg font-semibold transition duration-300 hover:bg-yellow-500"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-2 text-white border border-white rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-gray-900"
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
            border: 8px solid rgba(0, 123, 255, 0.6); /* Blue glitter border */
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
        `}</style>
      </div>
    </section>
  );
};

export default Logo;
