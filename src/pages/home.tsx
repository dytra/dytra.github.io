import Button from "@/components/Button";
import DarkTemplate from "@/templates/DarkTemplate";
import React from "react";

const Home:React.FC = () => {
  return(
    <DarkTemplate>
      <h1 className="text-3xl font-bold   text-center "><span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Hi there!</span> <span>👋</span></h1>
      <p className="text-center">I am a Frontend Web Developer with a passion for creating visually stunning, responsive websites. I make user-friendly web-apps that makes our clients happy.</p>
      <div className="container flex justify-center gap-3">
        <Button variant="ghost"><a href="mailto:dytra.io@icloud.com">Connect</a></Button>
        <Button variant="link">See My Work</Button>
      </div>
      <footer className="flex justify-center gap-3">
        <a href="https://github.com/dytra" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-2xl"></i></a>
        <a href="mailto:dytra.io@icloud.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope text-2xl"></i></a>
      </footer>
    </DarkTemplate>
  )
}


export default Home;