import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import WebLinks from "./Components/Websites"
import About from "./Components/About"

export default function Home() {
  return <div className="mt-28">
    <Header />
    <About />
    <WebLinks />
    <Footer />
    </div>
}