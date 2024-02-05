import React from "react";
import { FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Certificate } from "@/pages/constants/Certificates";
import CertificateCards from "./CertificateCards";

const ResumeSec = () => {
  return (
    <div>
      <div>
        <h1 className="text-6xl text-left mt-16 ml-8 mb-10">RESUME</h1>
      </div>
      <div id="resume-section" className="grid grid-cols-2 mt-4">
        {/* Softskill section*/}
        <div className="text-3xl text-left ml-8 col-span-1 underline-red">
          <h1 className="border-b-2 border-blue-500 inline-block">
            SOFTWARE SKILLS
          </h1>
          <div className="text-xl text-left mt-10 col-span-1 p-1">
            <h1 className="text-2xl">Programming Languages</h1>
            <h1 className="text-xl mt-6">Front-End</h1>
            <div className="flex gap-1 mt-4">
              <TbBrandNextjs className="size-8" />
              <span className="ml-4">Next.js</span>
              <Progress
                className="ml-8 mt-2"
                value={69}
                style={{ width: "50%" }}
              />
            </div>
            <h1 className="text-xl mt-6">Back-End</h1>
            <div className="flex gap-1 mt-4">
              <FaNodeJs className="size-8" />
              <span className="ml-4">Node.js</span>
              <Progress
                className="ml-8 mt-2"
                value={79}
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex gap-1 mt-8">
              <FaPython className="size-8" />
              <span className="ml-4">Python</span>
              <Progress
                className="ml-8 mt-2"
                value={89}
                style={{ width: "50%" }}
              />
            </div>
            <h1 className="text-2xl mt-8 mb-8">Databases</h1>
            <div className="flex gap-1 mt-4">
              <BiLogoPostgresql className="size-8" />
              <span className="ml-4">PostgrSQL</span>
              <Progress
                className="ml-3 mt-2"
                value={89}
                style={{ width: "50%" }}
              />
            </div>
            <div className="flex gap-1 mt-4">
              <SiMongodb className="size-8" />
              <span className="ml-4">MongoDB</span>
              <Progress
                className="ml-3 mt-2"
                value={49}
                style={{ width: "50%" }}
              />
            </div>

            <h1 className="text-2xl mt-8 mb-8">Personal Skills</h1>
            <div className="flex gap-1 mt-4">
              <span className="ml-4">
                Team Work - Creativity - Great Problem Solver
              </span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="text-3xl text-left ml-8 col-span-1">
          <h1 className="border-b-2 border-blue-500 inline-block">EDUCATION</h1>
          <div className="text-xl text-left mt-10 col-span-1 p-1">
            <h1 className="text-xl">COLLEGE</h1>
            <h1 className="text-xl font-bold">
              Bachelor of Science in Infomation Technology, Major in Database
            </h1>
            <h1 className="text-xl">2020 - 2024</h1>
            <h1 className="text-xl">
              Nueva Ecija University of Science and Technology
            </h1>
            <h1 className="text-xl">
              Sumacab Este, Cabanatuan City, Philippines
            </h1>
          </div>
          <div className="text-xl text-left mt-10 col-span-1 p-1">
            <h1 className="text-xl">JUNIOR AND SENIOR HIGH SCHOOL</h1>
            <h1 className="text-xl font-bold">
              Science, Technology, Engineering, and Mathematics (STEM) Strand
            </h1>
            <h1 className="text-xl">2014 - 2020</h1>
            <h1 className="text-xl">Good Samaritan Colleges</h1>
            <h1 className="text-xl">
              Burgos Extension, Cabanatuan City, Philippines
            </h1>
          </div>
        </div>
      </div>

      {/* Experience section*/}
      <div className="text-3xl text-left">
        <h1 className="text-center mt-8 mb-8 ">EXPERIENCE</h1>
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#000000",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #000000",
              }}
              date="2023 -2024"
              dateClassName="text-gray-600"
              iconStyle={{ background: "gray", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Clerk/Data Entry
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Eduardo L. Joson Memorial Hospital, N.E, Philippines
              </h4>
              <p>Encode patient's information and medical records.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023 - 2024"
              dateClassName="text-gray-600"
              contentStyle={{
                background: "black",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #000000",
              }}
              iconStyle={{ background: "gray", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Cabanatuan City, N.E, Philippines
              </h4>
              <p>Develop a website for a small business.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div >
          <h1 className="text-center mt-8 mb-8 text-6xl">Certificates</h1>
          <div className="flex gap-10 justify-center p-5">
          {Certificate.map((certificate, index) => (
            <CertificateCards
                key = {index}
                certificate_name = {certificate.certificate_name as "Google Analytics"}
                certificate_pic = {certificate.certificate_pic as "GAC.png"}
                certificate_description = {certificate.certificate_description as "Google Analytics for Beginners"}
                certificate_tags={certificate.certificate_tags as ["Google", "Analytics"]}
                certificate_link={certificate.certificate_link as "https://drive.google.com/file/d/1uh01hPQQp2JJ3PjxvjXSB4prnZy7yCco/view?usp=drive_link"}
            />

          ))}
            </div> 
        </div>
      </div>
    </div>
  );
};

export default ResumeSec;
