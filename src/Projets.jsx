import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import img1 from "./assets/project-img1.png";
import img2 from "./assets/project-img2.png";
import img3 from "./assets/project-img3.png";

function useHoverSpring(initialState) {
  const [isHovered, setHovered] = useState(initialState);
  const springStyle = useSpring({
    transform: isHovered ? "translateY(0px)" : "translateY(-295px)",
    config: { duration: 700 },
  });

  const handleEnter = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  return [springStyle, handleEnter, handleLeave];
}

export default function Projets() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const hoverSprings = [
    useHoverSpring(false),
    useHoverSpring(false),
    useHoverSpring(false),
  ];

  const data = [
    {
      label: "Tab 1",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      img: img1,
      img2: img3,
      img3: img2,
    },
    {
      label: "Tab 2",
      value: "profile",
      icon: FolderIcon,
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Tab 3",
      value: "settings",
      icon: FolderIcon,
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs className="mt-[300px]" value={activeTab} id="Projets">
      <div className="mb-6 m-auto">
        <h1 className="font1 text-3xl">Projets</h1>
      </div>
      <TabsHeader
        className="w-[60%] bg-[#292828] m-auto relative"
        indicatorProps={{
          className: "bg-[#A749A7]",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className={`relative flex items-center gap-2 text-white ${
              activeTab === value ? "text-white" : "text-gray-300"
            }`}
            onClick={() => setActiveTab(value)}
          >
            {React.createElement(icon, { className: "w-5 h-5" })}
            {label}
            {activeTab === value && (
              <div
                className="absolute bottom-0 left-0 h-1 w-full bg-white transition-all duration-500"
                style={{
                  transform: "scaleX(0.5)",
                }}
              />
            )}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, img, img2, img3 }) => (
          <TabPanel key={value} value={value}>
            {value === "dashboard" ? (
              <div className="w-full flex flex-col md:flex-row justify-center items-center">
                {[img, img2, img3].map((image, index) => {
                  const [springStyle, handleEnter, handleLeave] = hoverSprings[index];
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        top: { y: -20 },
                      }}
                      className="relative md:w-[30%] mt-3 md:ml-3 rounded-[20px] overflow-hidden"
                      whileHover="top"
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <animated.div
                        className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-[rgba(171,66,192,0.34)] rounded-[20px]"
                        style={springStyle}
                      >
                        <motion.button
                          variants={{
                            first: {
                              rotateY: 360,
                            },
                          }}
                          animate={"first"}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 6,
                          }}
                          className="absolute h-20 w-[100px] flex justify-center items-center rounded-xl bg-[#6e25cea6] text-[#ffffff] font2 text-3xl"
                        >
                          Voir
                        </motion.button>
                      </animated.div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <p>{desc}</p>
            )}
          </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      );
    

}