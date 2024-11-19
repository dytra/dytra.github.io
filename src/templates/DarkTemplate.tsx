
import Head from "next/head";
import Script from "next/script";
import React, { ReactNode } from "react";

interface DarkTemplateProps {
  children:ReactNode
}
const DarkTemplate:React.FC<DarkTemplateProps> = ({
  children
}) => {
  return(
    <>
    <Head>
      <title>dytra.io</title>
    </Head>
    <div className="bg-black h-screen text-white flex justify-center md:px-0">
      <DotBackgroundDemo>
      <div className="container px-5 lg:px-0 md:w-2/5 ">
      {children}
      </div>
            <Script src="https://kit.fontawesome.com/3d0d822717.js" crossOrigin="anonymous" />
      </DotBackgroundDemo>
    </div>
    </>
  )
}
const  DotBackgroundDemo = ({children}:{children:ReactNode}) => {
  return (
    <div className="h-[50rem] w-full bg-black  bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
     {children} 
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}
    </div>
  );
  }
export default DarkTemplate;