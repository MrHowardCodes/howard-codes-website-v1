import React from "react";
import NavLink from "@/app/components/NavLink";

const mobileNavLinks = [
  {
    path: "https://vicers.net",
    compName: "Blog",
  },
  {
    path: "/doc/resume.pdf",
    compName: "Resume",
  },
  {
    path: "mailto:josh@howard.codes",
    compName: "Contact",
  },
  {
    path: "https://www.linkedin.com/in/howardcodes/",
    compName: "LinkedIn",
  },

  {
    path: "https://github.com/MrHowardCodes",
    compName: "Github",
  },
  {
    path: "https://x.com/ItsNotch64",
    compName: "Twitter/X",
  },
];

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center bg-slate-900 bg-opacity-50 text-lg text-white">
      {mobileNavLinks.map((link, index) => (
        <li key={index} className="hover:font-black hover:border-white">
          <NavLink href={link.path} compName={link.compName} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
