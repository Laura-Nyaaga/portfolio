import React from "react";
import Navbar from "./components/Navbar/navbar";
import Logo from "./components/Logo/logo";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Logo />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}
