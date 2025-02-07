import React from "react";
import Image from "next/image";
import txtstyles from "@/app/styles/howco.module.css";
import styles from "@/app/styles/howco-text.module.scss";

const BackToolsSection = () => {
  return (
    <section id="backend" className="bg-[#d9d9d9] text-white">
      <div className="p-10">
        <h1 className=" text-4xl text-center drop-shadow  font-bold z-10">
          Here are some <span className="text-black opacity-75">Back-End </span>
          tools I use...{" "}
        </h1>
      </div>
      <div
        id="globes"
        className="hidden relative md:flex items-center justify-center flex-row w-full h-auto p-16"
      >
        <div className="spheres">
          <Image
            src="/graphics/NetworkPlanet.svg"
            alt="Globe 1"
            className={styles.globe1}
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            src="/graphics/NodeSphere.svg"
            alt="Globe 2"
            className={styles.globe2}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div
        id="hammer"
        className={` ${styles.hammerswing} flex opacity-75 justify-center items-center md:ml-48`}
      >
        <div>
          <Image
            src="/graphics/hammer.svg"
            alt="hammer"
            className="w-auto h-[200px] md:h-[360px] -z-10"
            height={300}
            width={300}
          />
        </div>
      </div>
      <div id="tools" className="container relative z-4 mx-auto ">
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-3/4 sm:w-2/4 xl:shadow-small-blue opacity-75 z-10">
          <div>
            <Image
              src="/svg/backend/apache.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Apache Web Server"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/docker.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Docker"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/dot-net.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt=".Net"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/drupal.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Drupal"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/git.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Git"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/github.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Github"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/java.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Java"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/linux.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Linux"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/mysql.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Mysql"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/nginx.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Howard Codes"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/node.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Node"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/npm.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Node Package Manager"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/php.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="PHP"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/python.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Python"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/selenium.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Selenium"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/vscode.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="VSCode"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/wordpress.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="Wordpress"
            />
          </div>
          <div>
            <Image
              src="/svg/backend/xampp.svg"
              className="w-auto h-[70px] p-2"
              height={300}
              width={300}
              alt="XAMPP"
            />
          </div>
        </div>
      </div>
      <div
        id="marketing"
        className="inline-flex relative mx-auto p-12 max-w-3xl md:justify-center md:items-center space-x-6"
      >
        <div>
          <h2 className="text-white text-xl drop-shadow">
            Honorable Mentions:
          </h2>
        </div>
        <div id="marketing-list" className="inline-flex flex-nowrap ">
          <ul className="flex md:items-center space-x-3 opacity-75 ">
            <li>
              <Image
                src="/svg/marketing/clickup.svg"
                alt="ClickUp"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/confluence.svg"
                alt="Confluence"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/ga.svg"
                alt="Google Analytics"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/hotjar.svg"
                alt="Hotjar"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/jira.svg"
                alt="Jira"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/monday.svg"
                alt="Monday"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
            <li>
              <Image
                src="/svg/marketing/salesforce.svg"
                alt="SalesForce"
                className="w-auto h-[30px]"
                width={300}
                height={300}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BackToolsSection;
