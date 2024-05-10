"use client";
import React from "react";
import Image from "next/image";
import styles from "@/app/styles/hero.module.css";
import textstyles from "@/app/styles/howco-text.module.scss";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const HowCoHero = () => {
  return (
    <section id="hero" className="pb-16 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 "
        >
          <Image
            src="/assets/howco-animoji.png"
            alt="hero image"
            className="transform sm:w-[350px] sm:h-auto"
            width={300}
            height={300}
          />
        </motion.div>
        <div className="col-span-8 place-self-center lg:w-full">
          <motion.p
            initial={{ y: "100%", opacity: 0, scale: 0 }}
            animate={{ y: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" hidden text-white text-base mb-4 md:block lg:text-3xl  lg:ml-[170px] font-normal"
          >
            Hi, I'm Josh
          </motion.p>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white p-6 mb-1 text-4xl sm:text-5xl font-bold lg:text-6xl lg:leading-normal text-center"
          >
            <span className="text-sky-50"> I'm a </span>
            <br></br>
            <span className={textstyles.gradientwipe}>
              <TypeAnimation
                sequence={[
                  "Full-Stack Engineer",
                  1000,
                  "Digital Marketer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "VR Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          <motion.div
            initial={{ x: "100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-8 md:space-y-0 items-center justify-center text-center button md:flex-row md:space-x-12"
          >
            <Link
              href="mailto:josh@howard.codes"
              className={`${styles.btn} shadow-xl w-[400px] h-[55px] md:w-[200px]`}
            >
              <span className="relative inline-block top-[0.7rem]">
                Contact Me
                <EnvelopeIcon className="h-8 w-8 inline-block pl-2 mb-1" />
              </span>
            </Link>
            <Link
              href={"/doc/resume.pdf"}
              scroll={true}
              className={`${styles.btn2} shadow-xl w-[400px] h-[55px] md:w-[200px]`}
            >
              <span className="relative inline-block top-2">
                My Resume
                <ArrowDownCircleIcon className="h-8 w-8 inline-block pl-2 mb-1 " />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowCoHero;
