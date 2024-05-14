"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import MenuOverlay from "@/app/components/MenuOverlay";
import MailIcon from "./icons/MailIcn";
import LinkedInIcon from "./icons/LinkedinIcn";
import TwitterIcon from "./icons/TwitterIcn";
import ResumeIcon from "./icons/ResumeIcn";
import GithubIcon from "./icons/GithubIcn";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const navLinks = [
  {
    path: "/doc/resume.pdf",
    compName: <ResumeIcon />,
  },
  {
    path: "https://mailto:josh@howard.codes",
    compName: <MailIcon />,
  },
  {
    path: "https://www.linkedin.com/in/howardcodes/",
    compName: <LinkedInIcon />,
  },

  {
    path: "https://github.com/MrHowardCodes",
    compName: <GithubIcon />,
  },
  {
    path: "https://twitter.com/ItsNotch64",
    compName: <TwitterIcon />,
  },
];

const HowCoNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="absolute mx-auto top-0 left-0 right-0 z-10">
      <div className="flex flex-nowrap items-center justify-between mx-auto p-8">
        <Link href={"/"}>
          <motion.div
            initial={{ x: "-100%", opacity: 0, scale: 0 }}
            animate={{ x: "0%", opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              priority
              src="/logos/howco-logo.svg"
              height={45}
              width={459}
              alt="Howard Codes"
            />
          </motion.div>
        </Link>
        <div className="mobile-menu pl-3 relative md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className=" h-10 w-10 text-[#deafd1]" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className=" h-10 w-10 text-[#deafd1]" />
            </button>
          )}
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0, scale: 0 }}
          animate={{ x: "0%", opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="menu hidden md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex p-1 md:p-1 md:flex-row md:space-x-1 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} compName={link.compName} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default HowCoNav;
