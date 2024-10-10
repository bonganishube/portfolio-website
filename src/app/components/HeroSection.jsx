"use client";
import React from "react";
import Image from 'next/image'
// import Photo from "./components/Photo";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start sm:pr-16 lg:pr-28"
        >
          <h1 className="text-white mb-5 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE84C] to-yellow-100">
              Hello, I&apos;m{" "}
            </span>
            <br className="block"></br>
            <TypeAnimation
              sequence={[
                "Bongani",
                1000,
                // "Web Developer",
                // 1000,
                // "App Developer",
                // 1000,
                // "UI/UX Designer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl">
            I am a full-stack engineer who enjoys creating intuitive and responsive applications. <span className="hidden lg:inline">I love tackling challenging problems and I am always looking for ways to grow my skills. My goal is to build user-friendly solutions that make technology easier for everyone.</span> 
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#FEE84C] to-[#FEE84C] hover:bg-slate-200 text-black font-semibold"
            >
              Contact Me
            </Link>
            {/* <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-14 lg:mt-0" 
        >

          <div className="w-full h-full relative">
            <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity: 1, 
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"},
                }}
            >
                <motion.div 
                initial={{opacity:0}}
                animate={{
                    opacity: 1, 
                    transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
                }}
                
                
                className="w-[297px] h-[297px] xl:w-[498px] xl:h-[498px] absolute rounded-full inset-0.5 bg-gradient-to-t from-[#FEE84C] via-0% via-yellow-300 to-45% overflow-hidden">
                    <div className="relative w-full h-full opacity-100">
                    <Image
                        src="/images/hero-image1.png"
                        priority
                        quality={100}
                        fill
                        alt="hero image"
                        className="object-contain rounded-full mix-blend-lighten relative opacity-60"
                    />
                    </div>
                </motion.div>

                <motion.svg 
                  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                  fill="transparent"
                  viewBox="0 0 506 506"
                  xmlns="http.//www.w3.org/2000/svg"                
                >

                  <motion.circle 
                    cx="253" 
                    cy="253" 
                    r="250" 
                    stroke="#FEE84C" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                      strokeDasharray: ["12 120 25 25", "16 25 92 72", "4 250 22 22"],
                      rotate:[120, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity, 
                      repeatType: "reverse",

                    }}
                  />
                </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
