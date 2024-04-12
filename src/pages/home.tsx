import Button from "@/components/Button";
import MainBody from "@/components/MainBody";
import { BackgroundBeams } from "@/components/ui/background-beams";
import DarkTemplate from "@/templates/DarkTemplate";
import React from "react";

const Home:React.FC = () => {
  return(
    <DarkTemplate>
      <h1 className="text-5xl font-bold   text-center mb-3"><span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Hi there!</span> <span>👋</span></h1>
      <p className="text-center mb-3">I am a Frontend Web Developer with a passion for creating visually stunning, responsive websites. I make user-friendly web-apps that makes our clients happy.</p>
      <div className="container flex justify-center gap-3 mb-3">
        <Button variant="ghost"><a href="mailto:dytra.io@icloud.com">Connect</a></Button>
        <Button variant="link"><a href="https://github.com/dytra">See My Work</a></Button>
      </div>
      <footer className="flex justify-center gap-3">
        <a href="https://github.com/dytra" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-2xl"></i></a>
        <a href="mailto:dytra.io@icloud.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope text-2xl"></i></a>
      </footer>

      <div 
      // className="relative w-ful h-full"
      className="absolute w-full h-full z-10 top-0 left-0 pointer-events-none"
      >
        <BackgroundBeams />
      </div>
    </DarkTemplate>
  )
}


export default Home;