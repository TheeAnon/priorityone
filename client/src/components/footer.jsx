import React from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 px-4 border-t bottom-0 w-full justify-center items-center">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="Priority 1" className="w-12 h-12" />
        <h1 className="font-bold">Priority 1 Radio</h1>
      </div>
      <div className="flex flex-grow justify-center gap-3">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/" className="hover:text-gray-300">
          Podcasts
        </a>
        <a href="/" className="hover:text-gray-300">
          Programmes
        </a>
        <a href="/login" className="hover:text-gray-300">
          Login
        </a>
        <a href="/signup" className="hover:text-gray-300">
          Sign up
        </a>
        <a href="/contact" className="hover:text-gray-300">
          Contact
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
      </div>
      <div className="flex gap-2 text-xl">
        <button className="p-2">
          <FaXTwitter />
        </button>
        <button className="p-2">
          <FaInstagram />
        </button>
      </div>
    </div>
  );
};
