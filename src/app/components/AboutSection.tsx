import React from "react";
import Image from "next/image";
import styles from "@/app/styles/howco-text.module.scss";
import styles2 from "@/app/styles/howco.module.css";
import FluerDeLis from "@/app/components/graphics/FluerDeLis";
import NolaDivider from "@/app/components/graphics/NolaDivider";

const AboutSection = () => {
  return (
    <section id="about" className="relative h-auto bg-white  text-black ">
      <div className="grid grid-cols-1 lg:grid-cols-12 z-1 lg:p-12">
        <div className="w-full lg:col-span-8 place-self-center ">
          <div
            id="blurb"
            className="p-8 text-2xl font-normal whitespace-break-spaces space-y-14  mt-4 lg:mt-0 text-left z-1"
          >
            <p>
              I'm an experienced full-stack developer from New Orleans,
              Louisiana with a solid background in online marketing and a
              sprinkle of IT experience on top. I enjoy leveraging my creativity
              to build robust and unique online experiences.
            </p>

            <p>
              I started my journey in 2008 during the height of the "Myspace
              Era" as a custom profile layout designer/developer, and i have
              looked back. My hobbies include Music Composition, Swimming, VR
              Development, Artificial Intelligence(AI) and Traveling.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 lg:place-self-center mt-4 z-1">
          <Image
            src="/graphics/joshhoward.jpeg"
            alt="Joshua Howard"
            className={`${styles.pulsate} transform sm:w-[250px] sm:h-auto`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-1 mt-[550px] md:mt-[400px]  opacity-30">
        <FluerDeLis />
      </div>
      <div className={` ${styles2.divider} relative`}>
        {" "}
        <NolaDivider />
      </div>
    </section>
  );
};

export default AboutSection;
