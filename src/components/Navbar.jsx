import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaEnvelope} from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { TbFileCv } from "react-icons/tb";


const navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mx-2">
             Arsalan's Portfolio
        </h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/arsalan-khalid-6b162b258" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ArsalanKhalid2002" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
      <TbFileCv />
      </a>
        </div>
    </nav>
  )
}
export default navbar