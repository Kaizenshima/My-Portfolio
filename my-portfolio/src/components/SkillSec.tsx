import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

interface SkillCardProps {
  skill_pic: string;
  proficiency: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill_pic, proficiency }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <CardContent>
        <CardContent className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="bg-gray-800 text-white rounded-full px-3 py-1">
            {`${proficiency}%`}
          </span>
        </CardContent>
        <div className="p-5 flex justify-center items-center">
          <Image
            src={`/images/logo/${skill_pic}`}
            alt="Skill Logo"
            width={120}
            height={120}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
