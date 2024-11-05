import React from "react"
import Navbar from "./components/Navbar/navbar"
import Logo from "./components/Logo/logo"
import Contact from "./components/Contact/contact"
import About from "./components/About/about"
import Projects from "./components/Projects/projects"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <main>
    <Logo/>
    <About/>
    <Projects/>
    <Contact/>
    </main>
    </div>
  )
}
