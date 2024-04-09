"use client";
import React from "react";

const Testimonials = () => {
  return ( <>
    <div className="relative p-4 mb-2">
      <h4 className="text-center flex  items-center text-3xl font-bold py-4"> <img className="w-16" src="logo.png" alt="fedamil logo" /> TESTIMONIOS</h4>
      <div className="grid mx-auto md:grid-cols-3 pt-4 gap-4">
        <div className="border-s-2 border-rojo ps-4">
          <p className="text-xs font-extralight">JayCee</p>
          <br />
          <p className="text-sm w-[70%]">
            Muy buena atención, variedad en herramientas, y todo para la
            construcción!
          </p>
        </div>
        <div className="border-s-2 border-rojo ps-4">
          <p className="text-xs font-extralight">Alejandro Ferraris</p>
          <br />
          <p className="text-sm w-[70%]">
          Ferretería gigante, tienen de todo y buenos precios. Buena atención!
          </p>
        </div>
        <div className="border-s-2 border-rojo ps-4">
          <p className="text-xs font-extralight">Daniel Gutierrez</p>
          <br />
          <p className="text-sm w-[70%]">
          Excelente atención en asesoramiento y calidad          </p>
        </div>
      
      </div>
      
    </div><a className="text-light underline text-gray-800 pb-8 mx-5" href="https://www.google.com/maps/place/FEDAMIL+SA/@-34.621236,-58.636999,16z/data=!4m8!3m7!1s0x95bcb9aeb05cf401:0xa3561c0148a2f778!8m2!3d-34.6212358!4d-58.6369991!9m1!1b1!16s%2Fg%2F11rghvjy8v?hl=es&entry=ttu"> Dejanos Tu Comentario</a>
    </>
  );
};

export default Testimonials;
