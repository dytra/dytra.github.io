import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Button from '@/components/Button'
import HeadMeta from '@/components/HeadMeta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

  const skills = ["React", "HTML5", "Javascript", "CSS", "Typescript", "Webflow", "NextJS", "NodeJS", "Figma", "Webflow", "Shopify"];
  return (
    <>
      <HeadMeta />

      <main className="container md:max-w-5xl mx-auto px-3">
        <nav className="flex pt-3 items-center">
          <div className="logo">
            <span className='font-semibold'>dytrafolio</span>
          </div>
          <div className="menu-container hidden md:block ml-auto">
            <ul className="flex gap-5">
              {menus.map((menu, index) => {
                return (
                  <li key={index} className="menu-item font-medium"><a href="" className={menu.classes}>{menu.label}</a></li>

                )
              })}
            </ul>
          </div>
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
              <p className='text-gray-600 leading-8 font-normal'>I am proud to have worked for <a href="https://jagain.com" className='font-semibold' target="_new">jagain.com</a> as a Frontend Web and Mobile Developer for the past several years. During my time there, I honed my skills in developing responsive websites and mobile applications that deliver an exceptional user experience. In addition, I also created <a href="https://perona.id" className='font-semibold' target="_new">perona.id</a>, a platform that helps individuals establish their personal brand and create a mini website profile to showcase their work and important links. This project allowed me to tap into my creative side and demonstrate my ability to develop a functional and visually appealing platform. Overall, I am grateful for the opportunities I have had to grow both professionally and personally in my career as a Frontend Web Developer.</p>
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
                <a href={url} target='_new'><Button variant='ghost' className='mt-3'>Take a Look</Button></a>
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
    title: "perona.id",
    description: "perona.id is a user-friendly web application designed to help you create personalized mini website profiles with ease. With perona.id, you can showcase your precious links, widgets, and other content in a visually appealing and engaging way, perfect for sharing on your favorite social media platforms.",
    thumbnailUrl: "images/perona-thumbnail.png",
    url: "https://perona.id"
  },
  {
    title: "socialbiogen.com",
    description: "The AI-powered web app that generates captivating social media bios in seconds. Simply provide a few details about yourself, and let BioGenius create unique and attention-grabbing bios tailored to your chosen moods/personality. Stand out from the crowd and make a lasting impression with BioGenius.",
    thumbnailUrl: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/92e01a7f1cb0b18881d93750844708d9?response-content-disposition=inline;+filename=%22image_fixed_width%22;+filename*=utf-8%27%27image_fixed_width&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCUSHrmG0cAOkXaru80xpTZNCEkzDYWIta69FxH5CqxMQIgFjnz9OoUoEMMzIKCs9NdYYRTZbX2zS0dBtx82JF4d/YqzQQIShAAGgw3Mzk5MzkxNzM4MTkiDGLhb27SU6sJJl4UXyqqBGRSO339QWfCO0Tz1Ipq6TCmsS70kOo61Yj4/MOy9tlsVfXbI2ZkDrBWYpbAjRj2ggu5FeJEF8/t3JQ/eDsgXK43YwaHWhkweVYshEvbBV9mUF9ry9/s5%2BLwBAPqmGvZF6LajeRxmgovwo%2BqFaUbQnU4wj%2BQIPybgSQ8j6hQjqlyCrBjQEpKNG2oT07sV7BYZ0BUwIX%2Bo8ruiFs39ajdeDRQeg2Zzaeo4pTD5PSEW4eyJ9VclyZ8RLC%2BbLljm92ZdHKAkNx6dv0RCa2zwFu/7aAG7UnPl//RO7qR10NYd8HdY6pQ8HXTwzLcMUo8TzDCuXf62OYHh7mwEPiF2U0F3VxsG76SqDjeQOtrWmOg5MAO9XXXl%2BJRdq4c3RM9IAN5dzRVE8DgSdQq4XAu5PBNhFcQjvyQ2pa8bWMDwOYla9IMZbCNtMvbJfJsLO7J27sW3N8%2BGE1jFVKuGvpXFq6QmGtoxOaPj02n75BMMgv4ntBO0s%2BCKf43V/IVu/Dtg1fPhr/D6MWYyVGTaT37zghiUubxu7xxnYJSlDzcfEDTZ8jqBRwxp9Q1bcWvw0HtXxjEdGwp8Cx8DMqOcEsuVpM8A1SeiBJN7ZrQvXHWBYX/xe6b%2BVU1b2nrcCjb%2BNJsOnX/x8JM95IKcTJ4Vwzr9SqwUTRmVKit/JkQRdPruQDMF7DS6LWSj6P9xGWeesfwijr4I/86wJPKglDBSyzStRHTwSAbiIir22sbZp0GMMOGlKMGOqcBp0AIlHoP2gaWnFqeZw9C8ziWXqGW0EJ1pabsi5FjOlbw2XBv8uiJFmmYRYbzTc3H/AoAeZFReKzYgR9D8i6L/ifHij9J0iIstyGyUocBwcWQl%2B1qhEaOqZtO0Dsu%2B4TIU1HQzAXeI8bsuWyce/kb9aE6g0saTEyAo7v64z3YQ7bAptiZmLUgeaesZ8HrS9Lxkzdd2/85x1LnKHHkmwDfwc586Z949w8=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230517T180729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW56DNR3O3X/20230517/us-west-2/s3/aws4_request&X-Amz-Signature=28a0cf887114ad0863535807f76d84e6f88c74d6882b361fc3d6fccf0a3f64ac",
    url: "https://socialbiogen.com",
  },
  {
    title: "beautybyke.com",
    description: "This project involved a comprehensive redesign and rework of a salon hair product website using the Shopify platform. Utilizing  expertise in web development, and Liquid templating language to successfully transform the website, enhancing the user experience and aligning the design with the client's brand. ",
    thumbnailUrl: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/9786cb43385f4c96625d97d36f0fc1f0?response-content-disposition=inline;+filename=%22image_fixed_width%22;+filename*=utf-8%27%27image_fixed_width&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDtVQjX/MH4IfyuEnJYpWTaZ1VipuikPlluaMKF9It0OgIhAPuVGz27txUWWgruw47wYSpjSvW3E/u2/xY1fkijhPX3Ks0ECEsQABoMNzM5OTM5MTczODE5IgwUSYNWAChRhiZgOsQqqgSIJ1CaysmoIc8AoWuWKGWBKrNMxFYrJOmjzncwbydoTU3uIOTRU9bo5P1p9Lnsj9xFtzSvAbKicPZ6h0c5Smz89K6bpxruu2sUy63/paC63JJ/vC7oGk7WAj0Yhc4OFJI3pc%2B2RfCo7JqMep7jPcIjc%2BCDFUqvhgGihZgzrgioAhhZl7Xh//K9PbPwdzH%2BQ8bYXXW7AQ9RrzldyDa3Pj6CFghqnxGEX4BrPeMGmgl5cc%2B09v1eiHvSFYDvPHEUY71JpuIxhUTOkixuQbqwlxc4Iq9P7w5SbDlowFTCsqg07/eZNT9lMIntlPjBr%2BWLO/VrmWORR7llyvObiHAsn/onDnnAgypOGX6mQ6UwTMgUw2%2BU2/lhYOikcUnoLRbAJ73KPovqeXSJAaGXVWrggGv8lcKV3lGc1%2BXqr/QsQL7pUZoLqXdcJFUDgITBmKD%2B1qI8A/mqGneJRNlQCnRHvixtE0nXCzBSpsJs0rZgMMKQccUg5b5l%2B3vMqL5zi%2BCfiL%2BebZsW7gaPX32tCTKnTl2UnatV3ThB0KC3%2B3feIDxLOJfk1IC2JBZM7xEUVCHeVFhPSreDN6aEuCz10H9/GuhL4s0phEd1bo/UPGvTb7FT9xPnpDg75sabQzIv83WqhSB3Tao/iFMyj6MhnUrQGDaDlzr/hPc8HUHtHoA950m65qThuON9vOXZHS8eIJEgC4DGGmRja7amCtWaDk0L1UcrRNUQR%2BS6tRBhOTDRnJSjBjqmAUR66owuPkzU3ssNHqaiUU0ACDccCJurmtAeWL2zsiVgyHsmONiVHH87WZ%2BHmkxxylqFRn14zT7WIeV/FdrmRf7ZWHXa9P1MkHtJhPVLULbph6em%2BG/lIJ329F6gqIkNzoV%2BUY2kNpLUI9ULIdjib9My9v6e9aVrCzadSzz5erCM8HJ%2BxPJGMz6F8CWd2NjiS67PH2fT%2Br8S/xK7col3Wf74eukxhjM=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230517T181250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5TGTMG7NW/20230517/us-west-2/s3/aws4_request&X-Amz-Signature=70eba4e665921fba92f160a071563b38ebbf42e7746262e54a69863e9b962157",
    url: "https://beautybyke.com"
  },
];