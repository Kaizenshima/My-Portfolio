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

interface CertificateCardsProps {
    certificate_pic : string;
    certificate_name : string;
    certificate_description : string;
    certificate_tags : string[];
    certificate_link : string;

}

const CertificateCards: React.FC<CertificateCardsProps> = ({
    certificate_pic,
    certificate_name,
    certificate_description,
    certificate_tags,
    certificate_link,

  
}) => {
  return (
    <Card className="w-[340px]">
      <CardContent>
        <Image
          className="p-5 transition-transform transform-gpu duration-300 group-hover:scale-105 w-full md:w-96 lg:w-80"
          src={`/images/${certificate_pic}`}
          alt="Your Alt Text"
          width={420}
          height={420}
        />

        <p>{certificate_name}</p>
        <p>{certificate_description}</p>
        
        {certificate_tags.map((tags, index) => (
            <Badge key={index} variant={"secondary"}>
              {tags}
            </Badge>
          ))}
        
        
      </CardContent>
      <CardFooter>
      <Link href={certificate_link} target="_blank">
          <Button variant={"secondary"}>View Certificate</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CertificateCards;
