import React from 'react'
import Image from "next/image";
import Me from "../pages/assets/me1.png";

const About = () => {
  return (
    <div id="about-section" >
      <div className="text-6xl text-left mt-16 ml-8">
            <h1 >ABOUT</h1>
      </div>
      <div className='grid grid-cols-2'>
      <div className='ml-20 col-span-1'>
          <Image
            className=" p-5 justify-center"
            src={Me}
            alt="Your Alt Text"
            width={420}
            height={420}
          />
        </div>
        <div  className="text-2xl text-left col-span-1">
            <h1>I'm a 4th Year BSIT Student at <b>Nueva Ecija University of Science and Technology</b> Major in Database. I am very interested at
            gathering and visualizing data, create dashboards, and create a website. I am very passionate about my work and I am always eager to connect with other people.</h1>
            <br />
            <h1>I'm still learning Next.js and Node.js but you can I'm very good at handling data. </h1>
            <h1><br />
              <ul>
                <li>Age:  21</li>
                <li>Birthday: April 24, 2002</li>
                <li>Address: Cabanatuan City, Nueva Ecija, Philippines</li>
                <li>Email: kendyamagishi@gmail.com</li>
                
              </ul>
            </h1>
            
        </div>
        
      </div>
    </div>
        
    
  )
}

export default About