import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import { Pagination } from "swiper";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Pebble Work",
          path: "/pebblework 2.jpg",
          technologies:
            "HTML, Tailwindcss, Firebase, JavaScript, Next.js and Translation: i18next ",
          gitHubLink: "https://github.com/202212-GIZ-YE-FEW/DevSquad",
          url: "https://pebblework.netlify.app/",
        },
        {
          title: "Razm E-Commerce",
          path: "/e-commerce 2.jpg",
          technologies: "HTML, CSS, Tailwindcss, Next.js and Fake Store API",
          gitHubLink:
            "https://github.com/202212-GIZ-YE-FEW/react-ecommerce-razm-coding",
          url: "https://react-ecommerce-razm-coding.vercel.app/",
        },
        {
          title: "Movflix",
          path: "/movflix 2 with api.jpg",
          technologies: "JavaScript, HTML, CSS, Tailwind and TMDB API",
          gitHubLink:
            "https://github.com/202212-GIZ-YE-FEW/movie-project-actioncode",
          url: "https://202212-giz-ye-few.github.io/movie-project-actioncode/",
        },
        {
          title: "Jumanji_mad_libs",
          path: "/jumanji 2.jpg",
          technologies: "HTML, CSS, JavaScript",
          gitHubLink: "https://github.com/202212-GIZ-YE-FEW/mad-libs-codeforce",
          url: "https://202212-giz-ye-few.github.io/mad-libs-codeforce/",
        },
      ],
    },
    {
      images: [
        {
          title: "Movfilx",
          path: "/movfilx 1.jpg",
          technologies: "HTML and CSS",
          gitHubLink: "https://github.com/fatGubari/Movfilx",
          url: "",
        },
        {
          title: "Money_Tracker",
          path: "/MoneyTracker 3.jpg",
          technologies: "Java, XML, Android Studio and SQLite for database",
          gitHubLink: "https://github.com/fatGubari/Money_Tracker",
          url: "",
        },
        {
          title: "GetBook",
          path: "/GetBook 2.jpg",
          technologies: "Java, SQL for Database",
          gitHubLink: "https://github.com/fatGubari/GetBook",
          url: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      // modules={{ Pagination }}
      className="h-full p-2"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-1 gap-4">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* iamge */}
                      <Image
                        src={image.path}
                        alt="projectImage"
                        width={500}
                        height={200}
                        className="w-[366px]"
                      />
                      {/* overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                        {/* title */}
                        <div className="w-full flex justify-center absolute bottom-0 translate-y-full group-hover:-translate-y-6 group-hover:xl:-translate-y-15  transition-all duration-300">
                          <div className="flex flex-col items-center gap-x-2">
                            {/* title */}
                            <div className="delay-100 text-xs sm:text-base">
                              <a href={image.url} target="_blank">
                                {image.title}
                              </a>
                            </div>
                            {/* technologies */}
                            <div className="flex-col items-center translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 md:flex hidden">
                              <h2 className="text-center">Technologies</h2>
                              <p className="text-center">
                                {image.technologies}
                              </p>
                            </div>
                            {/* github link */}
                            <div className="text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <a href={image.gitHubLink}>
                                <AiFillGithub />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
