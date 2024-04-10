"use client";
import React from "react";
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <>
        <h6  className="font-semibold text-xl text-azul my-5 text-center">SUCURSALES</h6>
        <div className="bg-azul flex md:flex-row flex-col justify-around text-white ">
            
            <div className="flex flex-col m-5 md:w-1/2">
                        {/* <p className="font-semibold  text-azul ">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                            Av. Vergara 1910, <span>Villa Tesei</span>
                        </p>
                        <p className="font-light">(011) 7366-0014 </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3248061277995!2d-58.63957402462402!3d-34.62123135842268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9aeb05cf401%3A0xa3561c0148a2f778!2sFEDAMIL%20SA!5e0!3m2!1ses!2sar!4v1711751237810!5m2!1ses!2sar" className="w-full" height={400} loading="lazy" ></iframe>
            </div>
        
            <div className="flex m-5 flex-col md:w-1/2">
                        {/* <p className="font-semibold  text-azul ">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                        Boticelli 4766, <span>Villa Tesei</span>                        </p>
                        <p className="font-light">(011) 3663-4592 </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132.496790374045!2d-58.64411573261719!3d-34.626301604632665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9dd3db1a957%3A0xd9a976b67bfa069d!2sZingueria%20-%20FEDAMIL%20SA!5e0!3m2!1ses!2sar!4v1711751337238!5m2!1ses!2sar" className="w-full" height={400} loading="lazy" ></iframe>
            </div>

        </div>
        <div className="container bg-gray-100 p-4">
          
            <div className="grid grid-cols-1 md:grid-cols-3 ms-4">
                <div className="col-span-1 py-4 indent-2">
                    <a href="#" className="text-2xl font-bold items-center text-gray-800 flex p-1 text-center mx-auto">
                        <img className="w-12" src="./logo.png" alt="fedamil sa" />
                        FEDAMIL
                    </a>
                    <p className="md:mx-4 font-extralight py-4 w-[70%]">Unimos innovación y calidad para ofrecerte los mejores materiales y servicios en cada fase de tu proyecto</p>
                    <div className="grid ms-4">
                        <div className="flex items-center space-x-4 py-4">
                            <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl">
                                <AiFillInstagram className="w-8 h-8" />
                            </a>
                            <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl">
                                <RiTiktokFill className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 py-4 indent-2">
                    <p className="font-bold text-1xl">Enlaces</p>
                    <ul className="leading-8">
                        <li><a
                            href="/"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Inicio</a></li>
                        <li><a
                            href="/durlock"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Durlock</a></li>
                        <li><a
                            href="/productos"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Productos</a></li>
                        <li><a
                            href="/empresas"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Empresas</a></li>
                        <li><a
                            href="/contactus"
                            className="px-4 font-semiligth hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
                        >Contacto</a></li>
                    </ul>
                </div>
                <div className="col-span-1 py-4 indent-2 leading-8">
                    <p className="font-bold text-1xl">Sucursales</p>
                    <div className="md:flex flex-col">
                        {/* <p className="font-semibold  text-azul ">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                            Av. Vergara 1910, <span>Villa Tesei</span>
                        </p>
                        <p className="font-light">(011) 7366-0014 </p>
                    </div>
                    <div className="md:flex  flex-col pt-4">
                        {/* <p className="font-semibold text-azul">SUCURSAL</p> */}
                        <p className="text-xs font-light">
                            Boticelli 4766, <span>Villa Tesei</span>
                        </p>
                        <p className="font-light">(011) 3663-4592 </p>
                    </div>
                </div>
            </div>
        </div>     
           </>

    );
};

export default Footer;