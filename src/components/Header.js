import React from "react";
import logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font lg:fixed md:fixed md:w-full z-50 bg-white sm:bg-white sm:sticky sm:w-auto">
        <div className="mx-auto flex lg:flex-wrap md:flex-wrap p-5 md:flex-row items-center justify-between sm:flex-row sm:flex-nowrap">
          <a
            className="flex title-font font-medium items-center text-gray-900 lg:mb-0 md:mb-0 sm:mb-0 "
            href="#"
          >
            <img src={logo} alt="" />
            <span className="ml-3 text-xl">OURS</span>
          </a>

          <div className=" flex items-center justify-evenly">
            <button className="inline-flex items-center bg-white border-0 py-2 px-6 focus:outline-none rounded-xl text-base lg:mt-0 md:mt-0 lg:mx-2 md:mx-2 transition sm:mx-0 sm:mt-0">
              Log in
            </button>
            <button className="inline-flex items-center bg-black text-white border-0 py-2 px-6 focus:outline-none rounded-xl text-base lg:mt-0 md:mt-0 lg:mx-2 md:mx-2 transition sm:mx-0 sm:mt-0">
              Waitlist
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
