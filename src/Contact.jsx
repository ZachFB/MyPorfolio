import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import ContactImg from './assets/contact-img.svg';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function Contact() {
    const [movbut, setMovbut] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    const [perteColor, setPerteColor] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 1 } // Ajustez ce seuil en fonction de vos besoins
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (movbut) {
            const timeout = setTimeout(() => {
                setMovbut(false);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [movbut]);

    //Traitement de handleSubmit 
    const onSubmit = async (formData) => {
        formData.access_key = "e6d1232b-ee9f-47ef-9e41-fb6928a514fb";
      
        const json = JSON.stringify(formData);
      
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
      
        if (res.success) {
          Swal.fire({
            title: "Envoyé !",
            text: "Merci de m'avoir contacté, je serai à vous sous peu de temps.",
            icon: "success",
            customClass: {
                popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px] right-[40px] bottom-[80px]',
                title: 'my-title-class',
                content: 'my-content-class',
                confirmButton: 'h-[50px] w-[150px] hover:text-[#fff] text-[#121212] rounded-lg specialBG ',
              },
              buttonsStyling: false
          });
        } else {
          Swal.fire({
            title: "Désolé, votre message n'a pas été envoyé",
            text: "Veuillez réessayer s'il vous plaît.",
            icon: "error",
            customClass: {
                popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px] right-[40px] bottom-[80px]',
                title: 'my-title-class',
                content: 'my-content-class',
                confirmButton: 'h-[50px] w-[150px] hover:bg-blue-gray-50 hover:text-[#121212] rounded-lg specialBG ',
              },
              buttonsStyling: false
          });
        }
      };

    //Affichage  
    return (
        <div className="mt-[150px] h-[170vh] sm:h-[130vh] lg:h-[130vh]  pt-3 specialBG w-full " id="Contact" >
            <h1 className="font1 mt-10 text-3xl">Contactez moi merci !</h1>
            <div className="w-[100%] m-auto grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 h-[500px] md:ml-[90px]">
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={isVisible ? "venu" : "initial"}
                        variants={{
                            initial: { scale: 0 },
                            venu: {
                                scale: 1
                            },
                        }}
                        transition={{ duration: 1 }}
                        src={ContactImg}
                        className='mt-5 size-[500px]'
                        alt="Jolie image"
                        ref={ref}
                    />
                </div>
                <div className="col-span-12 lg:col-span-6 h-[500px] align-content-center lg:mt-[80px]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-12 place-content-center'>
                            <div className='grid row-span-1 col-span-10 grid-cols-12 gap-4 ml-[80px]'>
                                <input
                                    {...register('surname', {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/,
                                        maxLength: 30,
                                    })}
                                    type="text"
                                    placeholder="Nom"
                                    name = 'surname'
                                    className={perteColor ? "col-span-6 p-3 rounded-md font1 text-pink-500 inputBg outline-none" : "col-span-6 p-3 rounded-md  bg-blue-gray-50 font1 outline-none"}
                                    onFocus={() => setPerteColor(true)}
                                />
                                <input
                                    {...register('name', {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/,
                                        maxLength: 30,
                                    })}
                                    type="text"
                                    name='name'
                                    placeholder='Prenom'
                                    className={perteColor ? "col-span-6 p-3 rounded-md font1 text-pink-500 inputBg outline-none" : "col-span-6 p-3  bg-blue-gray-50 rounded-md font1 outline-none"}
                                    onFocus={() => setPerteColor(true)}
                                />

                            </div>
                            <div className='grid col-span-10 grid-col-12 ml-[80px] relative'>
                                {errors.surname && errors.surname.type === 'required' && <p className='col-span-6 absolute text-white font2'>Ce champ est requis</p>}
                                {errors.surname && errors.surname.type === 'maxLength' && <p className='col-span-6 absolute text-white font2'>Votre nom dépasse la limite fixée</p>}
                                {errors.surname && errors.surname.type === 'pattern' && <p className='col-span-6 absolute text-white font2'>Ceci n'est un nom</p>}
                                {errors.name && errors.name.type === 'required' && <p className='col-span-6 absolute right-[100px] text-white font2'>Ce champ est requis</p>}
                                {errors.name && errors.name.type === 'maxLength' && <p className='col-span-6 absolute right-[100px] text-white font2'>Votre prénom dépasse la limite fixée</p>}
                                {errors.name && errors.name.type === 'pattern' && <p className='col-span-6 absolute right-[100px] text-white font2'>Ceci n'est un prénom</p>}
                            </div>

                            <div className='grid col-span-10 grid-cols-12 ml-[80px] mt-3 lg:mt-7'>
                                <input
                                    {...register("email", { 
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                        })} placeholder="Votre adresse mail" 
                                    name='email'
                                    className={perteColor ? 'col-span-12 h-[70px] p-3 rounded-md font1 text-pink-500 inputBg outline-none' : 'col-span-12 bg-blue-gray-50 h-[50px] p-3 rounded-md font1 outline-none'}
                                    onFocus={() => setPerteColor(true)}
                                />
                           {errors.email && errors.email.type === "required" && <p className='col-span-8 mr-20 text-white font2'>Veuillez entrer une adresse mail</p>}
                           {errors.email && errors.email.type === "pattern" && <p className='col-span-8 mr-20 text-white font2' >Vous saisissez une fausse address </p>}
                            </div>

                            <div className='grid col-span-10 grid-cols-12 ml-[80px] mt-3 lg:mt-7'>
                                <textarea
                                    {...register('message', {
                                        required: true,
                                        pattern: /^[A-Za-z0-9._%+\-!?*\s]+$/,
                                        maxLength: 800,
                                    })}
                                    placeholder='Message'
                                    name='message'
                                    className={perteColor ? 'col-span-12 resize-none p-20 rounded-md font1 text-pink-500 inputBg outline-none' : 'col-span-12 resize-none p-20 bg-blue-gray-50 rounded-md font1 outline-none'}
                                    onFocus={() => setPerteColor(true)}
                                >
                                </textarea>
                            </div>
                            {errors.message && errors.message.type === 'required' && <p className='col-span-8 mr-20 text-white font2'>Ce champ est requis</p>}
                            {errors.message && errors.message.type === 'maxLength' && <p className='col-span-8 mr-20 text-white font2'>Votre message est trop long</p>}
                            {errors.message && errors.message.type === 'pattern' && <p className='col-span-8 mr-20 text-white font2'>Ceci n'est pas un message</p>}
                            <div className='grid col-span-10 grid-col-12 ml-[80px] mt-3 lg:mt-7'>
                                <motion.button 
                                className='col-span-3 bg-[#9b176463] font1 text-white p-2 rounded-md'
                                animate={{scale: movbut ? 1.1 : 1}}
                                onClick={()=>setMovbut(true)}

                                >
                                Envoyer
                                </motion.button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}