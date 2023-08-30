import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
const PDF_URL = "http://localhost:3000/Resume.pdf"
export default function Social() {
  const downloadResume =(url) =>{
    const fileName = url.split('/').pop();
    const Tag = document.createElement('a');
    Tag.href=url;
    Tag.setAttribute('download', fileName);
    document.body.appendChild(Tag);
    Tag.click();
    Tag.remove
  }
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a
        href={"https://www.linkedin.com/in/fatimabdullahmohammed/"}
        target="_blank"
        className="hover:text-cyan-500 transition-all duration-300"
      >
        <AiFillLinkedin />
      </a>
      {/* resume button */}
      <button
        className="hover:text-cyan-500"
        onClick={() => {
          downloadResume(PDF_URL);
        }}
      >
        Resume
      </button>
    </div>
  );
}
