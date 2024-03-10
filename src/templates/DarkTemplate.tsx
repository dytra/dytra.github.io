
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
    <div className="bg-black h-screen text-white flex justify-center px-3 md:px-0">
      <div className="container md:w-2/5 space-y-5 pt-5">
      {children}
      </div>
            <Script src="https://kit.fontawesome.com/3d0d822717.js" crossOrigin="anonymous" />
    </div>
    </>
  )
}

export default DarkTemplate;