import Link from "next/link";
import { FaGithub, FaLaptop, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-500 p-4 sticky top-0 
        drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex 
            justify-between flex-col sm:flex-row">
                <h2 className="text-3xl font-bold
                text-white grid place-content-center
                mb-2 md:mb-0">
                    <Link href="/"
                        className="text-white/70 
                        no-underline hover:text-white" 
                        >
                        Home page
                    </Link>
                </h2>
                <div className="flex flex-row justify-center sm:justify-evenly
                    align-middle gap-3 text-white text-4xl lg:text-5xl">
                    <Link href="https://github.com/DenisTagaev"
                        className="text-white/70 hover:text-white"
                    ><FaGithub/></Link>
                    <Link href="https://www.linkedin.com/in/denis-tagaev-work/"
                        className="text-white/70 hover:text-white"
                    ><FaLinkedin/></Link>
                    <Link href="http://"
                        className="text-white/70 hover:text-white"
                    ><FaLaptop/></Link>
                </div>
        </div>
    </nav>
  )
}
