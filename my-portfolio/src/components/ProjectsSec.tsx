import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { NavItem } from '@/pages/constants/NavItem';
import GAC from "@/pages/assets/GAC.png";
import Certiport from "@/pages/assets/Certiport.png";
import { Button } from './ui/button';
import ProjectCards from './ProjectCards';
import { Project } from "@/pages/constants/Projects"

const ProjectsSec = () => {
  return (
    <div id='project-section'>
            <h1 className=" text-4xl text-center">PROJECTS</h1>
        <div className="p-8 grid grid-cols-3 justify-items-center">
          {Project.map((project, index) => (
            <ProjectCards
                key = {index}
                project_name = {project.project_name}
                project_pic = {project.project_pic}
                project_description= {project.project_description}
                project_tags={project.project_tags}
                project_link={project.project_link}
            />

          ))}
        </div>

        
    </div>
  )
}

export default ProjectsSec