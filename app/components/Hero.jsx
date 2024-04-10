"use client";
import React from "react";
import { MdOutlineProduct } from "react-icons/md"; // Icono de productos
import { FaBuilding, FaRegHandshake, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import Marcas from "./Marcas";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true, // Ajusta la altura de forma dinámica
  };
  const setting = {
    dots: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <>
      <div className="relative mt-10 flex items-center bg-cover bg-center">
        <div className="container grid md:grid-cols-2 mx-auto">
          <div className="p-4">
            <h1 className="text-4xl lg:text-left md:text-left text-center md:text-5xl font-bold text-black px-4">
              SOLUCIONES INTEGRALES EN{" "}
              <span className="text-amarillo">CONSTRUCCIÓN</span>
            </h1>
            <p className="mt-4 text-md lg:text-xl text-black p-4">
              En Fedamil, unimos innovación y calidad para ofrecerte los mejores
              materiales y servicios en cada fase de tu proyecto.
            </p>
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 text-center">
              <a
                href="https://wa.link/ko0u5t"
                target="_blank"
                rel="noopener noreferrer"
                className="items-center px-8 py-3 bg-amarillo text-black text-sm font-semibold rounded hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center"
              >
                Atención Personalizada
              </a>
              <a
                href="/productos"
                className="ml-0 md:ml-4 mt-4 md:mt-0 items-center px-8 py-3 bg-transparent border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
              >
                Nuestros Productos
              </a>
            </div>
          </div>
          <div className="md:flex hidden  items-center p-4 justify-center w-full">
            <div className="slider-container w-full h-full">
              <Slider {...settings}>
              <div  className="flex items-center justify-center h-full">                  <img
                    src="./fedamil.webp"
                    alt="fedamil"
                    className="w-[90%] rounded-md  "
                  />{" "}
                </div>
                <div>
                  <img
                    src="./boticelli.jpg"
                    alt="fedamil"
                    className="w-[90%] rounded-md "
                  />{" "}
                </div>
                <div>
                  <img
                    src="/fotos/1.jpg"
                    alt="fedamil"
                    className="w-[90%] rounded-md "
                  />{" "}
                </div>
                <div>
                  <img
                    src="./fotos/ferreteria.webp"
                    alt="fedamil"
                    className="w-[90%] rounded-md "
                  />{" "}
                </div>
              </Slider>
            </div>
          </div>

          <div className="flex md:hidden items-center p-4 justify-center w-full">
            <div className="w-[80%]">
                <img src="./fedamil.webp" alt="Fedamil" className=" w-full rounded-t-md" />
                <img src="./boticelli.jpg" alt="Boticelli" className=" w-full rounded-b-md" />
               
            </div>
          </div>

        </div>{" "}
      </div>


      <Marcas/>

      <div className="container mx-auto px-4 py-4 text-center grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <FaBuilding className="text- text-4xl mb-2" />
          <h3 className="text-lg font-bold">+20 AÑOS DE EXPERIENCIA</h3>
          <p className="text-xs text-gray-400 text-light">
            Más de 20 años ofreciendo soluciones de calidad.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaRegHandshake className="text- text-4xl mb-2" />
          <h3 className="text-lg font-bold">VISÍTANOS</h3>
          <p className="text-xs text-gray-400 text-light">
            Explora nuestras dos sucursales y encuentra lo que necesitas.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaWhatsapp className="text text-4xl mb-2" />
          <h3 className="text-lg font-bold">ATENCIÓN PERSONALIZADA</h3>
          <p className="text-xs text-gray-400 text-light">
            Asesorate por WhatsApp para todos tus proyectos.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
