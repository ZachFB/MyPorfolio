import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import {motion} from "framer-motion";

export default function News() {
    //State
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState();

    //Comportement
    const onSubmit = async (dataform) => {
        try {
            const response = await fetch(
                "https://connect.mailerlite.com/api/subscribers",
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiM2NlYTYyZGY0NjBiYzZmNDI3NmYyY2I2NDVkNTU1N2JiNzg2NWFjZDdiYzdiZjEwZWQ5YjdhMmUzOWY2NmY3N2NiNzE3MGE1MTQ5ZGYwYzUiLCJpYXQiOjE3MTkzMTIxNzEuNjcxMzc0LCJuYmYiOjE3MTkzMTIxNzEuNjcxMzc2LCJleHAiOjQ4NzQ5ODU3NzEuNjY4NzEyLCJzdWIiOiIxMDEwMDYwIiwic2NvcGVzIjpbXX0.U8zwsr_fyeP_RslYShPgGF2ldZ8G-N_vTMPracydz9y4Kzq97BxfiwBptu1-bBsG2vJgNK1-zbFnm_IK56pdKroAvLDf3gi88ZBod2vYLck0FzA7RW4q9c_glHpr0mYMIDedesxPTaE5LtP5cSbz2Y0gKz9BSK2LjvdCtlrLl20SqMgvCed0dRDWgHpvGPqEkcAVVgdgP7YLuV1rGkr83KZyxa6mODBdlWv0BjLgwsZIFeLsY3fBz0iiaI4N0kVeP8wtI8L_47ynnItHEtB28u7aNbMjTJVnxzEHOPax_9EFNIJicspvQqooFAOBpGMN-0dw0o_b7bfvK98HbU6MvoHID8PUTioy8LJXQH0MxcMVDSE78VCtwUDDyTU0nwbUfPNoBJOjQM7fxImWV48vMDEXXfZpHbI8ehyth9U_Psi-oM9og32brO1krNBapE1udI9NJDg8pWWmOWPyvYStHOXMIeJ99xnNf-c4onKJCqYbedMNDcnrbLHkCJGoRs4xIUiBPVDw0XCH05Rdwgz_ZFsKIOLBx-F2VqE1BnJThFQTHRhh1ktcwaa_KWJFpoQ5pXTPfZzusRviDF0HIuKEJZqSTE7-_0t7sXML3pdEsMzs6sYSrcpBoNSeMI0taeekqtRZgVoqNQ-T5N5pFGnoKkCeMiZfwcmUfjXxgGh98Wc`
                    },
                    body: JSON.stringify({
                        email: dataform.email,
                        groups: ['125110686051206575']
                    })
                }
            )
            const data = await response.json();
            console.log(data);

            if (data.errors) {
                Swal.fire({
                    title: "Desolé vous avez fait une erreur",
                    text: "Veuillez réessayer.",
                    icon: "error",
                    customClass: {
                        popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px]',
                        title: 'my-title-class',
                        content: 'my-content-class',
                        confirmButton: 'h-[50px] w-[150px] hover:bg-blue-gray-50 hover:text-[#121212] rounded-lg specialBG ',
                    },
                    buttonsStyling: false
                });
            } else {
                Swal.fire({
                    title: "Souscription validée merci pour votre confiance !",
                    icon: "success",
                    customClass: {
                        popup: 'rounded-xl bg-[#121212] text-[#fff] absolute h-[400px] w[200px]',
                        title: 'my-title-class',
                        content: 'my-content-class',
                        confirmButton: 'h-[50px] w-[150px] hover:text-[#fff] text-[#121212] rounded-lg specialBG ',
                    },
                    buttonsStyling: false
                });
            }


        } catch (error) {
            console.error(error);
        }


    };

    return (
        <div className=" grid grid-cols-12 justify-items-center" id='newsletter'>
            <div className="mt-[-100px] col-span-10 col-start-2 w-full grid grid-cols-12 bg-blue-gray-50 rounded-lg  ">
                <div className="col-span-12 grid grid-cols-12 lg:col-start-2 lg:mr-[140px]">
                <h1 className="text-[50px] font1 text-[#121212] col-span-12 lg:col-span-5 ">Souscrire a mon newsletter </h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col col-span-12 lg:flex-row lg:col-span-6 mt-[35px]">
                    <div className="flex flex-col">
                        <input type="text" {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })} placeholder="Votre adresse mail"
                            className="lg:w-[400px] h-[80px] lg:ml-5 mb-5 lg:mb-0 outline-none pl-3 font1 placeholder-black text-[#121212] bg-[#1a040427] rounded-lg" />
                        {errors.email && errors.email.type === "required" && <p className="text-red-900 font3">Veuillez entrer une adresse mail</p>}
                        {errors.email && errors.email.type === "pattern" && <p className="text-red-900 font3">Vous saisissez une fausse address </p>}
                    </div>
                    <motion.input
                     type="submit"
                      placeholder="Souscrire"
                       className="lg:w-[100%] lg:pr-2 lg:pl-2 cursor-pointer mb-5 lg:mb-0  h-[80px] lg:ml-1 font1 text-[30px] specialBG rounded-lg"
                       whileTap={{ scale: 0.8 }}
                       transition={{ duration: 0.4 }}
                        />
                </form>
                </div>
            </div>
        </div>
    );
}