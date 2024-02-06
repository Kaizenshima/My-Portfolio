import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Net1 from "@/pages/assets/Net1.png";
import { Tag } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardsProps {
  project_name: string;
  project_pic: string;
  project_description: string;
  project_tags: string[];
  project_link: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  project_name,
  project_pic,
  project_description,
  project_tags,
  project_link
}) => {
  return (
    <Card className="w-[380px] hover:shadow-lg transition duration-300">
      <CardContent>
        <div className="p-5 transition-transform transform-gpu duration-300 group-hover:scale-105">
          <Image
            src={`/images/${project_pic}`}
            alt="Your Alt Text"
            width={420}
            height={420}
          />
        </div>

        <p>{project_name}</p>
        <p>{project_description}</p>

        {project_tags.map((tags, index) => (
          <Badge key={index} variant={"secondary"}>
            {tags}
          </Badge>
        ))}
      </CardContent>
      <CardFooter>
        <Link href={project_link} target="_blank">
          <Button variant={"secondary"}>View Repo</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCards;
