import React, { useEffect, useState } from "react";
import bannerx from './assets/header-img.svg';
import bannery from './assets/banner-bg.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "framer-motion";

const Banner = () => {
  //state
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Web Developeur React", " Developeur WordPress", "Designer Web"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 1000;

  //comportement
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }

  };

  //affichage
    return (
    <div style={{backgroundImage: `url(${bannery})`}} className="banner h-[225vh] sm:h-[180vh] lg:h-[290vh] xl:h-[180vh] bg-center bg-cover w-full grid grid-cols-12 gap-2" id="Accueil">
      <div className="xs:col-span-7">
    <div className="text-blue-gray-100 w-full h-full mt-[200px]">
      <div className="w-full flex justify-start">
      <span className="border xs:ml-6 p-1 lg:w-[230px] font1">Bienvenu sur mon Portfolio</span>
      </div>
      <h1 className="text-6xl mt-8 text-left xs:ml-6 mb-6 font1">{`Salut je suis Zack`} <span>{text}</span></h1>
      <p className="text-left xs:w-full xs:ml-6 mr-2 font2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis doloremque suscipit quisquam quae suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reiciendis doloremque suscipit quisquam quae suscipit.</p>
      <button className=" flex mr-[375px] mt-6 xs:ml-4 p-2 but font3 w-[250px]" onClick={() => console.log('connect')}> <a href="/#newsletter"> Souscrire maintenant </a><FaArrowRightLong className="ml-2 size-[20px] mt-1 icon1" /></button> 
      </div>
      </div>
      <div className="xs:col-span-4 mt-[170px]">
       <motion.img
       initial = {{y: 0}}
       variants={{
        top:{
          y:30
        },
        bottom:{
          y:-50
        }
       }}
       animate={['top', 'bottom']}
       transition={{duration:1.5, repeat: Infinity, repeatType: 'reverse'}}
       className="xs:size-[400px]"
        src={bannerx} 
        alt="Banniere de l'accueil du site" />
       
      </div>
        </div>
    )
}

export default Banner;