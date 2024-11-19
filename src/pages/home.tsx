import Button from "@/components/Button";
import MainBody from "@/components/MainBody";
import { BackgroundBeams } from "@/components/ui/background-beams";
import DarkTemplate from "@/templates/DarkTemplate";
import React, { CSSProperties } from "react";
// test
const Home:React.FC = () => {
  return(
    <DarkTemplate>
    <h1 className="text-5xl font-bold   text-center mb-3"><span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Hi there!</span> <span>👋</span></h1>
      <p className="text-center mb-7">I am a Frontend Web Developer with a passion for crafting visually stunning apps on the web!</p><div className="container flex justify-center gap-3 mb-3">
        <Button variant="ghost"><a href="mailto:dytra.io@icloud.com">Connect</a></Button>
        {/* <Button variant="link"><a href="https://github.com/dytra">See My Work</a></Button> */}
      </div>
    
      <div className="h-5"><span></span></div>
      <div className="px-3 md:px-0">
        <BentoGrid/>
      </div>
      <div className="h-10"><span></span></div>
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

const BentoGrid = () => {
  return(
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 
    rounded-md overflow-hidden">
      {items.map((item,index) => {
        return <BentoGridItem 
        key={index} 
        item={item}
        />
      })}
    </div>
  )
}

const BentoGridItem = ({
item
}:{item:any}) => {
  const { className, style,} = item;
  return(
  <div className={`h-44 rounded-md border-solid hover:border transition-all border-white overflow-hidden ${className}`} style={{
    // borderWidth:1,
    ...style
  }}
  >
    <a href={item?.externalLink ?? "#"} 
    target="_blank"
    rel="noreferrer"
    className="block relative w-full h-full bg-black opacity-0 hover:opacity-100 transition-all p-3">
      <h3 className="text-lg font-bold inline break-words">{item?.title}</h3>
      <div className="h-3"><span></span></div>
      <p className="leading-tight" style={{
        fontSize:".85rem"
      }}>{item?.description}</p>
      <span className="flex absolute justify-center items-center bg-white w-6 h-6 rounded-full right-0 bottom-5 mr-5">
        <i className="fas fa-chevron-right text-sm text-black"></i>
      </span>
    </a>
  {/* <img src="images/perona-icon.png" className='w-full h-full' alt="showcase thumbnail" /> */}
  </div>
  )
}
type GridItem = {
  title:string
  description?:string
  externalLink?:string
  className?:string
  style?:CSSProperties
}
const items:GridItem[] = [
   {
    title:"jsonkeep",
    description:"Manage your JSON files in a secure and organized manner. ",
    externalLink:"https://jsonkeep.com",
    className:"",
    style:{
      background:"url('images/jsonkeep-icon.png')",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain",
      // backgroundSize:"100%"

    }
  },
  {
    title:"perona.id",
    description:"Social bio link generator that does something cool under the hood.",
    externalLink:"https://perona.id",
    className:"",
    style:{
      background:"url('images/perona-icon.png')",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain"

    }
  },
  {
    title:"kalkulatorinvestasi.com",
    description:"Tools for investor and trader to get the edge of the market",
    externalLink:"https://kalkulatorinvestasi.com",
    className:"",
    style:{
      background:"url('https://kalkulatorinvestasi.com/logo.png')",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain"
    }
  },
   {
    title:"socialbiogen.com",
    description:"Generates attractive bio for your social links",
    externalLink:"https://socialbiogen.com",
    className:"",
      style:{
      background:"url('images/socialbio-icon.png')",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
      // backgroundSize:"100%"

    }
  },
]


export default Home;
