import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "./assets/logo.svg";
import navIcon1 from "./assets/nav-icon1.svg";
import navIcon2 from "./assets/nav-icon2.svg";
import navIcon3 from "./assets/nav-icon3.svg";
import logoZack from "./assets/logoZack.jpeg";
import { HomeIcon, AcademicCapIcon, FolderIcon, DocumentIcon } from '@heroicons/react/24/outline';

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeLink, setActiveLink] = useState("Accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, []);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5, root: null }
    );
  
    const elements = document.querySelectorAll("#Accueil, #Competances, #Projets, #Contact");
    elements.forEach((element) => {
      observer.observe(element);
    });
  
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const updateActive = (value) => {
    setActiveLink(value);
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <HomeIcon className={activeLink === 'Accueil' ? "actif h-6 w-6 text-white" : "inactif h-6 w-6 text-white"} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/#Accueil" className={activeLink === 'Accueil' ? "actif font3 flex items-center text-white" : "inactif font3 flex items-center text-white"} onClick={() => updateActive('Accueil')}>
          Accueil
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <AcademicCapIcon className={activeLink === 'Competances' ? "actif h-6 w-6 text-white" : "inactif h-6 w-6 text-white"} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/#Competances" className={activeLink === 'Competances' ? "actif font3 flex items-center text-white" : "inactif font3 flex items-center text-white"} onClick={() => updateActive('Competances')}>
          Competances
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <FolderIcon className={activeLink === 'Projets' ? "actif h-6 w-6 text-white" : "inactif h-6 w-6 text-white"} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/#Projets" className={activeLink === 'Projets' ? "actif flex font3 items-center text-white" : "inactif font3 flex items-center text-white"} onClick={() => updateActive('Projets')}>
          Projets
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <DocumentIcon className={activeLink === 'Contact' ? "actif h-6 w-6 text-white" : "inactif h-6 w-6 text-white"} />
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="/#Contact" className={activeLink === 'Contact' ? "actif font3 flex items-center text-white" : "inactif font3 flex items-center text-white"} onClick={() => updateActive('Contact')}>
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="flex justify-center">
    <Navbar ref={navbarRef} className={scrolled ? "scrolled border-none py-5 shadow-lg mx-auto max-w-screen-xl mt-2"
      : "bg-transparent lg:py-7 fixed border-none shadow-lg mx-auto max-w-screen-xl mt-2"}>
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={logoZack} className={scrolled ? "w-12 h-12" : " w-14 h-14"} alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <a href="https://www.linkedin.com/in/dev-zack-sebo-1875a52a4/" variant="text" className=" hidden lg:inline-block w-[50px] h-7 rounded-[50%] socialborder flex place-content-center mr-3">
            <img src={navIcon1} className="size-3 ml-[7px]" alt="" />
          </a>
          <a href="https://www.facebook.com/zacharie.sebo.106/" variant="text" size="sm" className="hidden lg:inline-block w-[50px] h-7 rounded-[50%] socialborder flex place-content-center mr-3">
            <img src={navIcon2} className="size-3 ml-[7px]" alt="" />
          </a>
          <a href="https://www.instagram.com/devzack3/" variant="text" size="sm" className="hidden lg:inline-block w-[50px] h-7 rounded-[50%] socialborder flex place-content-center mr-2">
            <img src={navIcon3} className="size-3 ml-[7px]" alt="" />
          </a>
          <Button fullWidth variant="text" size="sm" className=" hidden font3 lg:inline-block btn text-white" onClick={() => console.log('connect')}>
            <a href="/#newsletter">
            Newsletter
            </a>
          </Button>
        </div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex-col items-center gap-x-1">
            <a href="https://www.linkedin.com/in/dev-zack-sebo-1875a52a4/" variant="text" className=" w-[30px] h-7 rounded-[50%] socialborder flex place-content-center mb-2">
              <img src={navIcon1} className=" size-4 mt-1" alt="" />
            </a>
            <a href="https://www.facebook.com/zacharie.sebo.106/" variant="text" size="sm" className=" w-[30px] h-7 rounded-[50%] socialborder flex place-content-center mb-2">
              <img src={navIcon2} className="size-4 mt-[6px]" alt="" />
            </a>
            <a href="https://www.instagram.com/devzack3/" variant="text" size="sm" className="w-[30px] h-7 rounded-[50%] socialborder flex place-content-center mb-2">
              <img src={navIcon3} className="size-4 mt-[4px]" alt="" />
            </a>
            <Button fullWidth variant="text" size="sm" className="my-4 border-2 font3 text-white btn" onClick={() => console.log('connect')}>
              <a href="/#newsletter">
              Newsletter
              </a>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
    </div>
  );
}