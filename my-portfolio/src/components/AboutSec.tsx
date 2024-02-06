import React from "react";
import Image from "next/image";
import Me from "../pages/assets/me1.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div id="about-section">
      <div className="lg:text-4xl text-center mt-16 mb-2 py-16">
        <h1>ABOUT</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="ml-20 col-span-1">
          <Image
            className=" p-5 justify-center"
            src={Me}
            alt="Your Alt Text"
            width={420}
            height={420}
          />
        </div>
        <div className="text-1xl text-left col-span-1">
          <h1>
            I&apos;m a 4th Year BSIT Student at{" "}
            <b>Nueva Ecija University of Science and Technology</b> Major in
            Database. I am very interested at gathering and visualizing data,
            create dashboards, and create a website. I am very passionate about
            my work and I am always eager to connect with other people.
          </h1>
          <br />
          <h1>
            I&apos;m still learning Next.js and Node.js but you can I&apos;m
            very good at handling data.{" "}
          </h1>
          <Tabs defaultValue="Personal" className="w-[400px] mt-10">
          <TabsList>
            <TabsTrigger value="Personal">Personal Details</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="Personal">
            <h1>
              <br />
              <ul>
                <li>Age: 21</li>
                <li>Birthday: April 24, 2002</li>
                <li>Address: Cabanatuan City, Nueva Ecija, Philippines</li>
                <li>Email: kendyamagishi@gmail.com</li>
                <li>Phone: 0916 123 4567</li>
                <li>Religion: Baptist</li>
                <li>Civil Status: Single</li>
                
              </ul>
            </h1>
          </TabsContent>
          <TabsContent value="Education">
          <div className="text-left p-1">
            <h1 className="text-xl">COLLEGE</h1>
            <h1 className="text-md font-bold">
              Bachelor of Science in Infomation Technology, Major in Database
            </h1>
            <h1 className="text-md">2020 - 2024</h1>
            <h1 className="text-md">
              Nueva Ecija University of Science and Technology
            </h1>
            <h1 className="text-md">
              Sumacab Este, Cabanatuan City, Philippines
            </h1>
          </div>
          <div className="text-left mt-3">
            <h1 className="text-xl">JUNIOR AND SENIOR HIGH SCHOOL</h1>
            <h1 className="text-md font-bold">
              Science, Technology, Engineering, and Mathematics (STEM) Strand
            </h1>
            <h1 className="text-md">2014 - 2020</h1>
            <h1 className="text-md">Good Samaritan Colleges</h1>
            <h1 className="text-md">
              Burgos Extension, Cabanatuan City, Philippines
            </h1>
            </div>
            </TabsContent>
        </Tabs>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
