import React from 'react'
import Image from "next/image";
import Me from "../pages/assets/me1.png";

const About = () => {
  return (
    <div id="about-section" >
      <div className="text-6xl text-left mt-16 ml-8">
            <h1 >ABOUT</h1>
      </div>
      <div className='flex gap-4'>
      <div className='ml-20 '>
          <Image
            className=" p-5 justify-center"
            src={Me}
            alt="Your Alt Text"
            width={420}
            height={420}
          />
        </div>
        <div  className="text-2xl text-center p-5 ">
            <h1>I'm </h1>
            <h1>I am a software engineer</h1>
            
        </div>
        
      </div>
    </div>
        
    
  )
}

export default About