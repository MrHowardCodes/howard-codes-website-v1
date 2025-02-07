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
            As a seasoned full-stack developer from New Orleans, Louisiana, I bring a unique blend of skills. My background encompasses not only digital marketing expertise but also a deep understanding of cloud infrastructure and DevOps practices.
            </p>

            <p>
            My development journey began in 2008, during the vibrant "Myspace Era," where I honed my skills as a custom profile layout designer and developer. Since then, I've been immersed in the entire creative process, from initial planning and meticulous execution to the ultimate satisfaction of delivering a polished final product.
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
