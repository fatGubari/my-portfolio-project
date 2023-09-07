import Link from "next/link";
import Socials from "./Socials";

const PDF_URL = "http://localhost:3000/Resume.pdf"
const Header = () => {
  
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-y-6 py-5">
          <h1 className="text-xl">Fatima Abdullah</h1>
          
          {/* social media contact */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
