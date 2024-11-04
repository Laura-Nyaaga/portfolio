import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <div className="text-2xl font-bold"><Image
        className=""
        src="/image/ln_logo.png"
        width={100}
        height={100}/>
        </div>
        <ul className="flex justify-between space-x-6 text-2xl">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#achievements">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;