import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SiAnaconda } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";


const InfoSec = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:mr-4 md:ml-4 mt-8 md:mb-16">
      <div className="col-span-full">
        <h1 className="text-3xl lg:text-5xl text-center mt-4">Area of Interest</h1>
      </div>

      <div className="col-span-full sm:col-span-2 lg:col-span-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
          <Card className="w-full h-48 p-4">
            <CardHeader>
              <CardTitle>Data Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I love working with data and making dashboards</p>
            </CardContent>
          </Card>
          <Card className="w-full h-48 p-4">
            <CardHeader>
              <CardTitle>Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I love working with data and making dashboards</p>
            </CardContent>
          </Card>

          <Card className="w-full h-48 p-4">
            <CardHeader>
              <CardTitle>Coding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I love working with data and making dashboards</p>
            </CardContent>
          </Card>

          <Card className="w-full h-48 p-4">
            <CardHeader>
              <CardTitle>Data Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I love working with data and making dashboards</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-xl lg:text-2xl text-center col-span-full mt-8">
        <h1>Most Used Technologies:</h1>
          <div className="flex flex-wrap justify-center mt-4 gap-6">
            <SiAnaconda size={50}/>
            <SiVisualstudio size={50}/>
            <SiPostman size={50}/>
          </div>
        
      </div>

      {/* What can I do section*/}
      <div className="text-xl lg:text-2xl text-center mt-8 col-span-full">
        <h1 className="border-b-2 border-blue-500 inline-block">WHAT CAN I DO?</h1>
        <div className="mt-4 mb-4">
          <h1 className="text-sm lg:text-base">Database Management - Web Development - Data Analysis - Data Visualization</h1>
        </div>
        <h1 className="border-b-2 border-blue-500 inline-block">HOBBIES AND INTERESTS</h1>
        <div className="mt-4 mb-4">
          <h1 className="text-sm lg:text-base">Watching Movies - Playing Video Games - Reading Books</h1>
        </div>
      </div>
    </div>
  );
};

export default InfoSec;
