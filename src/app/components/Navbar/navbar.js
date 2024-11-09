
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-16 bg-gray-800 text-white">
      <div className="text-2xl font-bold hover:text-yellow-300 active:text-yellow-300">
        <Link href="#logo">
          <Image
            className=""
            src="/image/ln_logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <ul className="flex justify-between space-x-12 text-2xl font-['Roboto'] pr-20">
        <li className="hover:text-yellow-300 active:text-yellow-300">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-yellow-300 active:text-yellow-300">
        <Link href="#skills">Skills</Link>
        </li>
        <li className="hover:text-yellow-300 active:text-yellow-300">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-yellow-300 active:text-yellow-300">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
