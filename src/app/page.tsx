import React from "react"
import Navbar from "./components/Navbar/navbar"
import Logo from "./components/Logo/logo"
import Contact from "./components/Contact/contact"
import About from "./components/About/about"

export default function Home() {
  return (
    <main>
    <Navbar/>
    <Logo/>
    <About/>
    <Contact/>
    </main>
  )
}
