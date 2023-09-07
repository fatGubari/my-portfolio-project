import Circles from "../../components/Circles";
import { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { BsFiletypeXml } from "react-icons/bs";
import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
        ],
      },
      {
        title: "App Development",
        icons: [
          <FaJava key={6} />,
          <DiAndroid key={7} />,
          <BsFiletypeXml key={8} />,
        ],
      },
    ],
  },
  {
    title: "Certification",
    info: [
      {
        title: "Frontend Web Development Bootcamp",
        stage: "Re:coded, 2023",
      },
      {
        title: "Introduction to User Experience Design",
        stage: "Georgia Institute of Technology, 2023",
      },
      // {
      //   title: "Summer Camp Cybersecurity Skills",
      //   stage: "Midocean University, 2023",
      // },
      {
        title: "Tutoring program for the course Web programming",
        stage: "Lebanese International University, 2022",
      },
      {
        title: "Certificate of Participation in the IT workshop",
        stage: "Lebanese International University, 2022",
      },
      {
        title: "Certificate of Participation in the IT Support",
        stage: "Lebanese International University, 2022",
      },
      // {
      //   title: "Tutoring program for the course Pre-calculus",
      //   stage: "Lebanese International University, 2021",
      // },
      {
        title: "Certificate of Achievement form GDG in Sana'a",
        stage: "Lebanese International University, 2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-scroll scrollbar-thin scrollbar-dark md:overflow-y-hidden mt-3 sm:mt-0">
      <Circles />

      {/* avatar image */}
      {/* <motion.div className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div> */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl pb-5">
            Turning ideas into
            <span className="text-cyan-500"> interactive</span> realities
            through code.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            A front-end developer with a passion for building beautiful and
            user-friendly web applications. Proven ability to work independently
            and as part of a team to deliver high-quality products on time and
            within budget. Good understanding of HTML, CSS, and JavaScript, as
            well as popular front-end frameworks such as React, Next.js.
          </p>
          {/* counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* //experience
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cyan-500 mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              //clients
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cyan-500 mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">satisgied clients</div>
              </div> */}

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-cyan-500 mb-2">
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-cyan-500 after:w-[100%] after:bg-cyan-500 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
