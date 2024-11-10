"use client";
import React from "react";
import Image from "next/image";

const SkillIcon = ({ name, icon }) => {
  return (
    <div className="group relative transform hover:scale-110 transition-all duration-300 animate-float">
      <div
        className="w-24 h-24 bg-gray-900 rounded-lg rotate-45 overflow-hidden border-2 border-gray-700 
                    shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
      >
        <div className="w-full h-full -rotate-45 flex items-center justify-center">
          <div className="w-16 h-16 relative">
            <Image
              src={`/icons/${icon}`}
              alt={name}
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <p
        className="text-center mt-4 text-gray-300 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 absolute -bottom-6 left-1/2 
                    transform -translate-x-1/2 whitespace-nowrap"
      >
        {name}
      </p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", icon: "python.svg" },
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "Kotlin", icon: "kotlin.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "Tailwind CSS", icon: "tailwind.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Tableau", icon: "tableau.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Adobe", icon: "adobe.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Jira", icon: "jira.svg" },
    { name: "Coda", icon: "coda.svg" },
  ];

  return (
    <section id="skills" className="pt-20 mb-24 bg-gray-800">
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
          animation-delay: calc(var(--animation-delay, 0) * 1s);
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-20 py-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                "--animation-delay": index * 0.2,
              }}
            >
              <SkillIcon {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
