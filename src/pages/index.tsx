import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Button from '@/components/Button'
import HeadMeta from '@/components/HeadMeta'
import Link from 'next/link'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  const menus = [
    {
      label: "HOME"
    },
    {
      label: "ABOUT",
    },
    {
      label: "MY WORK"
    },
    {
      label: "CONTACT",
      classes: "bg-black px-4 py-3 text-white rounded-md"
    }
  ];

  const skills = ["React", "HTML5", "Javascript", "CSS", "Typescript", "Webflow", "NextJS", "Tailwind", "Figma","WordPress", "Webflow", "Shopify"];
  return <Home/>
  return (
    <>
      <HeadMeta />

      <main className="container md:max-w-5xl mx-auto px-3">
        <nav className="flex pt-3 items-center justify-center">
          <div className="logo ">
          <Link href={"/"} className='font-semibold'>dytrafolio</Link>
          </div>
          {/* <div className="menu-container hidden md:block ml-auto">
            <ul className="flex gap-5">
              {menus.map((menu, index) => {
                return (
                  <li key={index} className="menu-item font-medium"><a href="" className={menu.classes}>{menu.label}</a></li>

                )
              })}
            </ul>
          </div> */}
        </nav>

        <div className="spacer h-10"></div>
        <div className="hero flex flex-col md:flex-row md:items-center md:gap-20">
          <div className="left md:w-1/2">
            <h1 className="text-5xl text-center md:text-left font-bold">Hi there! 👋</h1>
            <div className="mt-5">
              <div>
                <p className="text-gray-600 text-center md:text-left leading-7">I am a Frontend Web Developer with a passion for creating visually stunning, responsive websites. My expertise includes HTML, CSS, JavaScript, and React. I strive to improve my skills and deliver high-quality, user-friendly websites that meet client and user needs.</p>
              </div>
              <div className="mt-5 flex space-x-3 justify-center md:justify-start">
                {/* <a href="#" className="inline-block bg-primary  text-white rounded-md border border-black px-6 py-3">Work With Me</a> */}
                <a href='mailto:dytra.io@icloud.com'><Button>Work With Me</Button></a>
                {/* <a href="#" className="inline-block bg-brightGrey text-primary border border-primary hover:bg-primary hover:text-white rounded-md px-6 py-3 transition-all">See My Work</a> */}
                <a href="#showcase"><Button variant='ghost'>See My Work</Button></a>
              </div>
            </div>
          </div>
          <div className="right hidden md:block md:w-1/2">
            <div className='w-full py-3'>
              <img src='images/hero.png' className="w-full" alt="hero" />
            </div>
          </div>

        </div>
        <div className="spacer h-10"></div>
        <div className='flex flex-col md:flex-row md:gap-20'>
          <div className='md:w-1/2'>
            <h2 className="text-4xl">👔 My Career So Far</h2>
            <div className='mt-5'>
              <p className='text-gray-600 leading-8 font-normal'>I am proud to have worked for an insurtech company as a Frontend Web and Mobile Developer for the past several years. During my time there, I honed my skills in developing responsive websites and mobile applications that deliver an exceptional user experience. In addition, I also created <a href="https://perona.id" className='font-semibold' target="_new">perona.id</a>, a platform that helps individuals establish their personal brand and create a mini website profile to showcase their work and important links. This project allowed me to tap into my creative side and demonstrate my ability to develop a functional and visually appealing platform. Overall, I am grateful for the opportunities I have had to grow both professionally and personally in my career as a Frontend Web Developer.</p>
            </div>
          </div>
          <div className='md:w-1/2'>
            <h2 className="text-4xl mt-3 md:mt-0">🛠 My Skills</h2>
            <div className='flex mt-5 flex-wrap justify-center md:justify-start'>
              {
                skills.map(item => {
                  return (<span key={item} className='border border-gray-500 px-4 py-2 mr-3 mb-3 rounded-lg hover:bg-gray-200 cursor-pointer text-gray-500'>{item}</span>)
                })
              }
            </div>
          </div>
        </div>

        <div className="spacer h-10 md:h-20"></div>
        <h2 className="text-4xl mb-5" id="showcase">🎪 Showcase</h2>
        {showcases.map((item, index) => {
          const { title, description, thumbnailUrl, url } = item;
          return (
            <div key={index} className='flex flex-col md:flex-row md:gap-10 mb-8'>
              <div className='md:w-1/2'>
                <img src={thumbnailUrl} className='showcase-thumbnail rounded-2xl' alt="showcase thumbnail" style={{
                  aspectRatio:"5/3",
                }} />
              </div>
              <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold mt-3 md:mt-0'>{title}</h3>
                <p className='mt-3 text-gray-600'>{description}</p>
                <Link href={url} target='_new'><Button variant='ghost' className='mt-3'>Take a Look</Button></Link>
              </div>
            </div>
          )
        })}


        <div className="spacer h-10"></div>
        {/* <h2 className="text-4xl">✍️ Blog</h2>
        {new Array(3).fill({}).map((item, index) => {
          return (
            <div key={index} className='flex flex-col md:flex-row md:gap-10 mt-10'>
              <div className='md:w-1/4'>
                <img src="images/perona-thumbnail.png" className='rounded-2xl h-40' alt="blog thumbnail" />
              </div>
              <div className='md:w-3/4'>
                <h3 className='text-3xl font-bold mt-3 md:mt-0'>Link Sharing App</h3>
                <p className='mt-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia quos repudiandae. Voluptas necessitatibus harum, accusantium ducimus fugit ipsa  </p>
                <Button variant='ghost' className='mt-3' size='sm'>Read More</Button>
              </div>
            </div>

          )
        })} */}

        {/* Footer */}
        <div className="spacer h-10 md:h-20"></div>
        <footer className=''>
          <div className='text-gray-500 flex gap-5 justify-center'>
            <a href="https://twitter.com/dytra_io" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter text-3xl"></i></a>
            <a href="https://github.com/dytra" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-3xl"></i></a>
            <a href="https://instagram.com/dytra.io" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram text-3xl"></i></a>
          </div>

          <div className='mt-5 text-sm text-gray-500 cursor-default'>
            <p className='text-center'>Copyright © 2022 dytra. All rights reserved.</p>
          </div>

        </footer>
        <div className="spacer h-10 md:h-10"></div>
      </main>
      <Script src="https://kit.fontawesome.com/3d0d822717.js" crossOrigin="anonymous" />
    </>
  )
}
type showcase = {
  title: string
  description: string
  thumbnailUrl: string
  url: string
}
const showcases: showcase[] = [
  {
    title:"jsonkeep",
    description:"jsonkeep is a web application that allows you to store and manage your JSON data in a secure and organized manner. With jsonkeep, you can easily create, edit, and delete JSON files, as well as import and export data from other sources. Whether you're a developer, designer, or just someone who needs to manage their JSON data, jsonkeep is the perfect tool for you.",
    thumbnailUrl:"images/jsonkeep-thumbnail.png",
    url:"https://jsonkeep.com"
  },
  {
    title: "perona.id",
    description: "perona.id is a user-friendly web application designed to help you create personalized mini website profiles with ease. With perona.id, you can showcase your precious links, widgets, and other content in a visually appealing and engaging way, perfect for sharing on your favorite social media platforms.",
    thumbnailUrl: "images/perona-thumbnail.png",
    url: "https://perona.id"
  },
  {
    title: "socialbiogen.com",
    description: "The AI-powered web app that generates captivating social media bios in seconds. Simply provide a few details about yourself, and let socialbiogen create unique and attention-grabbing bios tailored to your chosen moods/personality. Stand out from the crowd and make a lasting impression with socialbiogen.",
    thumbnailUrl: "images/socialbiogen.png",
    url: "https://socialbiogen.com",
  },
  {
    title:"kalkulatorinvestasi.com",
    description:"All in One web app to help people reach their financial freedom. This app provides some tool such as compounding interest calculator and trading tools such us forex rates, and pip calculator",
    thumbnailUrl:"images/kalkulatorinvest-thumbnail.png",
    url:"https://kalkulatorinvestasi.com"
  },
  // {
  //   title: "beautybyke.com",
  //   description: "This project involved a comprehensive redesign and rework of a salon hair product website using the Shopify platform. Utilizing  expertise in web development, and Liquid templating language to successfully transform the website, enhancing the user experience and aligning the design with the client's brand. ",
  //   thumbnailUrl: "images/beautybyke.jpg",
  //   url: "https://beautybyke.com"
  // },
];
