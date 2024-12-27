import React from "react";
import "bootstrap/js/src/collapse.js";
import ln from "../Assets/ln.png";
import heart from'../Assets/heart.png'

function Footer1() {
  return (
    <div className="containermy-5 w-screen  h-full mt-5 ">
      <footer className="bg-light  flex  flex-col  items-center  justify-centers">
        <div className=" p-4  pb-0">
          <div>
            <a href="https://www.linkedin.com/in/tuhin-das-09a60121a/">
              <img src={ln} className="w-7" />
            </a>
          </div>
        </div>

        <div className="text-center p-3">
          <p className="text-lg font-semibold">
            © Copyright 2024-2025 All Right Reserved. Made with
            <img src={heart} alt=""className="h-5 w-5 d-inline"/>
            By <a href="/">Tuhin Das</a>
            {/* here will be my resume or portfolio link */}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer1;
