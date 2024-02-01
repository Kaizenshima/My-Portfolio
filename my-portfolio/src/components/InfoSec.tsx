import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const InfoSec = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mr-16 ml-16 mt-24 mb-40">
      <div className="col-span-full">
        <h1 className="text-5xl text-center mt-4">Area of Interest</h1>
      </div>

      <div className="col-span-full sm:col-span-2 lg:col-span-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
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

      <div className="text-2xl text-center col-span-full">
        <h1>Most Used Technologies:</h1>

      </div>
      
      {/* What can I do section*/}
      <div className="text-3xl text-center mt-8  col-span-full">
          <h1 className="border-b-2 border-blue-500 inline-block" >WHAT CAN I DO?</h1>
            <div className="mt-8 mb-8">
                <h1 className="text-xl">Database Management - Web Development - Data Analysis - Data Visualization</h1>
            </div>
            <h1 className="border-b-2 border-blue-500 inline-block" >HOBBIES AND INTERESTS</h1>
            <div className="mt-8 mb-8">
                <h1 className="text-xl">Watching Movies - Playing Video Games - Reading Books</h1>
            </div>
        </div>
      

    </div>
  );
};

export default InfoSec;
