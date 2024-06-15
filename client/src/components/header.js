import Search from "./search";
import logo from "../assets/images/logo.png";
import { FaCircleDot } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full flex h-16 px-5">
      <button className="flex gap-2 align-center">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold font-sans text-4xl">Priority</h1>
          <p className="font-brotherhood text-xl font-extralight scale-150">
            Radio
          </p>
        </div>
        <img
          src={logo}
          alt="Priority 1"
          className="hover:opacity-90 h-12 w-12"
        />
      </button>
      <div class="flex ml-auto">
        <Search />
      </div>
      <div className="flex place-self-center gap-2">
        <a href="/">
          <button className="bg-gray-200 p-2 rounded hover:bg-black hover:text-white">
            Home
          </button>
        </a>
        <a href="/podcasts">
          <button className="bg-gray-200 p-2 rounded hover:bg-black hover:text-white">
            Podcasts
          </button>
        </a>
        <a href="/programmes">
          <button className="bg-gray-200 p-2 rounded hover:bg-black hover:text-white">
            Programmes
          </button>
        </a>
        <a href="/about">
          <button className="bg-gray-200 p-2 rounded hover:bg-black hover:text-white">
            About us
          </button>
        </a>
        <a href="/contact">
          <button className="bg-gray-200 p-2 rounded hover:bg-black hover:text-white">
            Contact us
          </button>
        </a>
      </div>
      <button className="hidden border items-center space-x-2 p-4 rounded-full text-[#DB1F48] font-bold border-[#DB1F48] hover:bg-[#DB1F48] hover:text-[#E5DDC8]">
        <span>Listen live</span> <FaCircleDot className="animate-pulse" />
      </button>
    </div>
  );
};

export default Header;
