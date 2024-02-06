import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div>
      <div id="contact-section" className="mb-8 mt-4">
        <h1 className="text-3xl lg:text-5xl text-center mt-4">Contact</h1>
      </div>
      <div className="grid grid-cols-2 justify-items-center p-36">
        <div className="col-span-1 lg:text-4xl">
          <h1>Get in touch</h1>
        </div>
        <div className="col-span-1 lg:text-2xl p-2">
          <h1>CONTACT INFO</h1>
          <p>Phone: 0997 533 0551</p>
          <p>Email: kendyamagishi@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
