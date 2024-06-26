import react from "react";

import { Typography } from "@material-tailwind/react";
import navIcon1 from "./assets/nav-icon1.svg";
import navIcon2 from "./assets/nav-icon2.svg";
import navIcon3 from "./assets/nav-icon3.svg";

export default function Footer() {
  return (
    <div className="w-[100%] flex justify-center">
      <footer className="mt-[200px] rounded-[20px] w-[95%] flex flex-col lg:flex-row flex-wrap items-center justify-center gap-y-3 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography className="font-normal text-gray-500 mt-[-30px]">
          &copy; 2023 Zack's Portfolio
        </Typography>
        <ul className="flex flex-row items-center gap-y-2 gap-x-8 ">
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/dev-zack-sebo-1875a52a4/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <a href="https://www.linkedin.com/in/dev-zack-sebo-1875a52a4/" variant="text" className="lg:inline-block w-[30px] h-7 rounded-[50%] socialborder flex place-content-center pt-[5.4px] pr-[5.5px] lg:pt-[0px] lg:pr-[0px]">
                <img src={navIcon1} className="size-3 ml-[7px]" alt="" />
              </a>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.facebook.com/zacharie.sebo.106/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <a href="https://www.facebook.com/zacharie.sebo.106/" variant="text" size="sm" className="lg:inline-block w-[30px] h-7 rounded-[50%] socialborder flex place-content-center pt-[5.4px] pr-[5.5px] lg:pt-[0px] lg:pr-[0px]">
                <img src={navIcon2} className="size-3 ml-[7px]" alt="" />
              </a>
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.instagram.com/devzack3/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <a href="https://www.instagram.com/devzack3/" variant="text" size="sm" className="lg:inline-block w-[30px] h-7 rounded-[50%] socialborder flex place-content-center pt-[5.4px] pr-[5.5px] lg:pt-[0px] lg:pr-[0px]">
                <img src={navIcon3} className="size-3 ml-[7px]" alt="" />
              </a>
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
}