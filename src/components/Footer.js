import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col-reverse justify-between border-t-2 border-gray-200">
          <div className="flex py-1">
            <div className=" w-8 h-8 mr-1">
              <i class="fab fa-discord text-xl text-black"></i>
            </div>
            <div className="w-8 h-8 mx-1">
              <i class="fab fa-instagram text-xl text-black"></i>
            </div>
            <div className="w-8 h-8 mx-1">
              <i class="fab fa-spotify text-xl text-black"></i>
            </div>
          </div>
          
          <div className="flex items-center justify-center py-1">
            <a href="#" className=" mx-1">Privacy</a>
            <span className=" mx-1 text-xs">&bull;</span>
            <a href="#" className=" mx-1">Terms</a>
            <span className=" mx-1 text-xs">&bull;</span>
            <a href="#" className=" mx-1">Contact</a>
          </div>
          <div className="py-1">
            <a>
              <i class="far fa-copyright"></i> OURS Community, 2021{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
