"use client";
import React from "react";
import ArrowRicon from "./ArrowRicon";

const   BannerIntro = () => {
  return (
    <div className="relative p-4 md:py-4">
      <p className="ms-4 ml-20 py-8 font-light text-[10px]">FEDAMIL EN TODAS PARTES</p>
      <div className="ms-4 grid mx-auto md:grid-cols-5">
        <div className="col-span-3 ">
          <img
            src="./envio.png"
            alt="camion de envios fedamil"
            className="w-[80%] ml-20 rounded-md shadow-lg"
          />
        </div>
        <div className="col-span-2"><h2 className="text-4xl font-normal">
            ENVÍOS A<span className="block text-amarillo font-semibold">
              TODO<span className="text-black font-normal"> EL PAIS</span>                            </span>
          </h2>
           <p className="max-w-md md:mt-1 mt-10">Con nuestro camiones en un rango de 10KM a la redonda el envio es gratis, <br /><br /> A nivel nacional te podemos cotizar por privado, puedes tener acceso a nuestra amplia gama de materiales y herramientas de construcción sin importar dónde te encuentres.</p>
          <a href="#" className="mt-4 inline-flex items-center px-8 py-1 bg-azul border-2 border-azul text-white text-sm font-semibold  hover:bg-white hover:text-azul transition-colors duration-300 ease-in-out rounded-full">
            <ArrowRicon/> Consultar costo
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default BannerIntro;