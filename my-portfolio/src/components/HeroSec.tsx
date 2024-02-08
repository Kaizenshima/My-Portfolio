import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import Me from "../pages/assets/me.png";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {sequence}  from "./constants/sequence";
import styles from "../styles/style.module.css";
import  {NavItem} from "./constants/NavItem";

// Make sure to set this properly based on your application structure
Modal.setAppElement("#__next");

const HeroSec = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resumePdfPath = "/pdf/Resume.pdf"; // Adjust the path based on your actual file location

  return (
    <div
      id="home-section"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-between items-center p-12 mb-20 mt-12 ml-8 "
    >
    <div className="col-span-3 text-center text-5xl lg:text-left lg:ml-16">
        <b>Hello,</b> I&apos;m <br />
        <span className="text-gray-600 text-7xl font-bold">
          Ken Yamagishi
        </span>
        <div className="mt-2 text-3xl">
          I&apos;m a{" "}
          <span className="text-brown-500">
            <TypeAnimation
              cursor={true}
              sequence={sequence}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="flex justify-start gap-5 mt-4 ">
          <a
            href={NavItem.GitHub}
            target="_blank"
            className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
          >
            <FaGithub className="size-16" />
          </a>
          <a
            href={NavItem.LinkedIn}
            target="_blank"
            className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
          >
            <FaLinkedin className="size-16" />
          </a>
          <a
            href={NavItem.Facebook}
            target="_blank"
            className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
          >
            <FaFacebookSquare className="size-16" />
          </a>
      </div>
      
      {/* Popup Trigger Button */}
      <div>
        <Button variant={"secondary"} onClick={openModal}>
          Download CV
        </Button>
      </div>

      {/* Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Download CV Modal"
        style={{
          content: {
            width: "60%", // Adjust the width as needed
            height: "auto", // Set height to "auto" or specify a height
            margin: "auto", // Center the modal horizontally
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <div>
          {/* Content of your popup */}
          <h2></h2>

          <div className="text-center">
            <Image
              src="/images/Resume-1.png" // Specify the path to your image
              alt="Image Alt Text"
              width={900} // Adjust the width as needed
              height={600} // Adjust the height as needed
            />
          </div>

          <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">
            <Button variant={"ghost"}>Download Resume</Button>
          </a>
          <Button variant={"ghost"} onClick={closeModal} className="float-right">Close</Button>
        </div>
      </Modal>
    </div>
    <div className="col-span-2 text-center lg:text-left ml-16">
        <Image
          className="rounded-full p-5 justify-center"
          src={Me}
          alt="Your Alt Text"
          width={320}
          height={320}
        />
      </div>
    </div>
  );
};

export default HeroSec;
