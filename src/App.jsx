/**
 * * @copyright 2024  [Jm_Mugweru]
 * * @author [Jm_Mugweru]
 * @license Apache-2.0
 */
//? nodes
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

//? components

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {

  useGSAP(()=>{
    const elements=gsap.utils.toArray('.reveal-up')
  
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          scrub:true,
          start:"-200 bottom",
          end:"bottom 80%",
        },
        y:0,
        opacity:1,
        duration:1,
        ease:"power2.Out"
      })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}

export default App;
