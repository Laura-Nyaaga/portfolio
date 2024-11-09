"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Glitter = ({ top, left, delay }) => {
  return (
    <div
      className="absolute w-2 h-2 transform rotate-45 animate-twinkle"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        backgroundColor: "rgba(135, 206, 235, 0.8)",
        boxShadow: "0 0 4px 1px rgba(135, 206, 235, 0.8)",
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const About = () => {
  const [glitters, setGlitters] = useState([]);

  useEffect(() => {
    const glitterCount = 20;
    const newGlitters = Array.from({ length: glitterCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      right: Math.random() * 100,
      bottom: Math.random() * 100,
      delay: (i % 3) * 1,
    }));
    setGlitters(newGlitters);
  }, []);

  return (
    <section
      id="about"
      className="py-10 bg-gray-800 text-center relative overflow-hidden font-['Roboto'] "
    >
      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(45deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(45deg);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>

      {glitters.map((glitter) => (
        <Glitter
          key={glitter.id}
          top={glitter.top}
          left={glitter.left}
          delay={glitter.delay}
        />
      ))}

      <h2 className="text-4xl font-bold text-white relative z-10">About Me</h2>
      <div className="flex flex-col md:flex-row gap-6 py-32 text-white relative z-10">
        <div className="flex-shrink-0">
          <Image
            src="/image/about_pic.png"
            alt="about"
            width={800}
            height={800}
          />
          <a
            href="https://www.loom.com/share/bab231abe68e4c4fbca8c90d8dbcd801?sid=7a893566-2b8e-4d39-a07c-e598d2fad658"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-yellow-600 text-white text-lg rounded-lg font-semibold text-center transition duration-300 hover:bg-amber-500"
          >
            View Video
          </a>
        </div>

        <div className="max-full md:w-1/2">
          <p className="text-2xl leading-loose text-left font-['Roboto'] pr-40">
            I got into tech because I believe in the power of software to solve
            everyday problems and make life better for people. The idea that a
            well-built app or tool can help someone learn, connect, or find
            support is what really motivates me as a software developer. I want
            to create practical solutions that people can actually use and
            benefit from. <br></br>
            So far, I have worked on projects that reflect this goal, like an
            app for parents to monitor milestones in their children&apos;s growth and
            get helpful resources. I have also explored ways to use tech for
            environmental conservation and assistive tools for educators. With
            each project, I have focused on building things that are easy to
            use, secure, and meaningful. Moving forward, I am excited to
            contribute to projects that not only meet immediate needs but also
            promote accessibility, security, and sustainability in the tech
            industry as I continue to learn and grow professionally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
