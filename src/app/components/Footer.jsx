import React from "react";
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="footer z-10 border-l-transparent border-r-transparent text-white">
      <div className="p-12 items-center flex flex-col justify-center">
      <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            // className=""
            
          />
        <p className="text-slate-600 text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
