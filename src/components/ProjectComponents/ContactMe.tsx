import React, { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MySpinner from "@/components/MyComponents/MySpinner";
interface IFormInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true); // Start loading
    try {
      await axios.post("http://localhost:3000/send-email", data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="relative h-full w-screen overflow-hidden flex flex-col items-center justify-center lg:flex-row lg:justify-between p-6 bg-background text-foreground">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-center lg:items-start lg:ml-28">
        <h1 className="text-5xl font-robert-medium mb-10 mt-3 underline underline-offset-8">
          Contact <span className="text-blue-500">Me</span>
        </h1>
        <div className="space-y-4">
          <a
            href="https://linkedin.com/in/nkgopolenggift/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-accent flex items-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/mamarara.gift.7?mibextid=ZbWKwL"
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
        <form className="space-y-4 lg:mr-28" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="block text-lg font-general">
                Full Name
              </Label>
              <Input
                type="text"
                id="fullName"
                {...register("fullName", { required: true })}
                className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <Label
                htmlFor="phoneNumber"
                className="block text-lg font-general"
              >
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
                className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="block text-lg font-general">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                {...register("email", { required: true })}
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
                {...register("subject", { required: true })}
                className="w-full h-12 p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="block text-lg font-general">
              Message
            </Label>
            <Textarea
              id="message"
              {...register("message", { required: true })}
              rows={5}
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-primary"
            ></Textarea>
          </div>
          <Button
            type="submit"
            className="w-full h-[70px] p-2 bg-primary text-white rounded hover:bg-primary-dark flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <MySpinner className="mr-2" />
                Sending...
              </>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
