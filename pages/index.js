import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-32 xl:text-left h-full container mx-auto">
          {/* title */}
          <h1 className="h2">
            Crafting<span className="text-blue-600"> digital dreams</span>
            <br />
            one line of code <br /> at a time.
          </h1>
          {/* subtitlse */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-7 xl:mb-13">
            I believe that web development is more than just code. It is about
            creating experiences that people will love. The web is a powerful
            tool that can be used to communicate, educate, and entertain
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="w-[900px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          {/* particles */}
          <ParticlesContainer />

          {/* avatar */}
          {/* <div className="w-full h-full max-w-[500px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
