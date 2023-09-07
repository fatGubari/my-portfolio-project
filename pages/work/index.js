import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-24 flex items-center mt-4 sm:mt-0">
      <Circles />
      <div className="container mx-auto overflow-y-scroll scrollbar-thin scrollbar-dark md:overflow-y-hidden h-full md:h-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 mt-4">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-3 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Work<span className="text-cyan-500">.</span>
            </h2>
            <p className="mb-3 max-w-[400px] mx-auto lg:mx-0">
              I am passionate about building web applications that are both
              beautiful and functional. I have experience with a variety of
              technologies, including HTML, CSS, JavaScript, React and Node.js.
              I am also good in version control systems, such as Git and GitHub.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%] mb-5 sm:mb-0">
            {/* slider */}
            <WorkSlider />
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};
export default Work;
