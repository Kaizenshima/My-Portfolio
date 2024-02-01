import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavItem } from "@/pages/constants/NavItem";
import Image from "next/image";
import Me from "../pages/assets/me.png";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { sequence } from "@/pages/constants/sequence";
import styles from "../styles/style.module.css";


const HeroSec = () => {
  return (
      <div
        id="home-section"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-between items-center p-12 mb-20 mt-12 ml-8 "
      >
        <div className="col-span-3 text-center text-5xl lg:text-left lg:ml-16">
          <b>Hello,</b> I'm <br />
          <span className="text-gray-600 text-7xl font-bold">
            Ken Yamagishi
          </span>
          <div className="mt-2 text-3xl">
            I'm a{" "}
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
