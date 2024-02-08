import React from "react";
import {Certificate} from "./constants/Certificates";
import CertificateCards from "./CertificateCards";
import SkillSec from "./SkillSec";
import {Skill} from "./constants/Skills";

const ResumeSec = () => {
  return (
    <div>
      {/* Softskill section*/}
      <div>
        <h1 className="text-center mt-8 mb-8 text-4xl">Skills</h1>
        <div className="flex-wrap flex justify-center gap-8">
          {Skill.map((skill, index) => (
            <SkillSec key={index} 
            skill_pic={skill.skill_pic} 
            proficiency={skill.proficiency}
            />
          ))}
        </div>

        {/* Experience section*/}
        <div></div>

        <div>
          <h1 className="text-center mt-8 mb-8 text-4xl">Certificates</h1>
          <div className="flex gap-10 justify-center p-5">
            {Certificate.map((certificate, index) => (
              <CertificateCards
                key={index}
                certificate_name={
                  certificate.certificate_name as "Google Analytics"
                }
                certificate_pic={certificate.certificate_pic as "GAC.png"}
                certificate_description={
                  certificate.certificate_description as "Google Analytics for Beginners"
                }
                certificate_tags={
                  certificate.certificate_tags as ["Google", "Analytics"]
                }
                certificate_link={
                  certificate.certificate_link as "https://drive.google.com/file/d/1uh01hPQQp2JJ3PjxvjXSB4prnZy7yCco/view?usp=drive_link"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSec;
