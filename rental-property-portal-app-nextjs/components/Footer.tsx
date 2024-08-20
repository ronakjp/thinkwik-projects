import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
const Footer: React.FC = () => {
  const currYear: number = new Date().getFullYear();

  return (
    <footer className=" bg-gray-200 py-5  w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image
            src={logo}
            width={9}
            height={9}
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currYear} PropertyHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
