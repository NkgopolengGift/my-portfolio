import React from "react";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactMe = () => {
  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:justify-between p-6 bg-background text-foreground">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-28">
        <h1 className="text-5xl font-robert-medium mb-10 mt-3 underline underline-offset-8">
          Contact <span className="text-blue-500">Me</span>
        </h1>
        <div className="space-y-4">
          <a
            href="https://www.linkedin.com/in/nkgopolenggift/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-accent flex items-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://web.facebook.com/mamarara.gift.7?mibextid=ZbWKwL&_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-800 hover:text-accent flex items-center space-x-2"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/@nkgopoleng_gift"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-800 hover:text-accent flex items-center space-x-2"
          >
            <FaTiktok />
            <span>TikTok</span>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <form className="space-y-4 lg:mr-28">
          <div>
            <Label htmlFor="fullName" className="block text-lg font-general">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="email" className="block text-lg font-general">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="block text-lg font-general">
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="subject" className="block text-lg font-general">
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            />
          </div>
          <div>
            <Label htmlFor="message" className="block text-lg font-general">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            ></Textarea>
          </div>
          <Button
            type="submit"
            className="w-full h-[70px] p-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
