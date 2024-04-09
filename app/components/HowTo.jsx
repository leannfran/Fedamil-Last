"use client";
import React from "react";
import ArrowUpRicon from "./ArrowUpRicon";
import CheckList from "./CheckList";
import Link from "next/link";

const HowTo = () => {
  return (
    <div className="relative p-4">
      <div className="grid mx-auto md:grid-cols-5">
        <div className="bg-azul/90 text-white shadow-xl p-4 m-4 col-span-1 md:col-span-3">
          <ArrowUpRicon />
          <h2 className="text-2xl font-semibold text-center md:text-left ms-4 mt-4">
            ¿COMO COMPRAR ONLINE?
          </h2>
          <p className="md:w-3/4 mx-4 mt-2 font-normal text-md">
            Descubre marcas y productos en nuestro sitio.
          </p>
          <ul className="list-disc mt-4 mx-4 md:mx-6">
            <li className="ml-6 font-normal text-md my-1">
              Contáctanos para{" "}
              <span className="font-semibold">
                asesoramiento personalizado.
              </span>
            </li>
            <li className="ml-6 font-normal text-md my-1">
              Debido a las fluctuaciones económicas,{" "}
              <span className="font-semibold">
                consultá precios.
              </span>
            </li>
            <li className="ml-6 font-normal text-md my-1">
              Soluciones para{" "}
              <span className="font-semibold">todo tipo de proyectos.</span>
            </li>
          </ul>
          <Link
            href="/productos"
            className="ms-4 mt-4 inline-flex items-center px-8 py-1 bg-azul/90 border-2 border-white text-white text-sm font-semibold  hover:bg-white hover:text-azul/90  transition-colors duration-300 ease-in-out rounded-full"
          >
Ver Productos          </Link>
        </div>
        <div className="bg-[#FEDE02] p-4 m-4 col-span-1 md:col-span-2">
          <ArrowUpRicon />
          <h2 className="text-2xl font-semibold text-center md:text-left ms-4 mt-4">
            CONSTRUCCION EN SECO{" "}
          </h2>
          <p className="max-w-md ms-4 mt-4">
            En Fedamil somos{" "}
            <span className="font-bold">
              Distribuidores Oficiales de Durlock
            </span>{" "}
          </p>
          <ul className="list-disc mt-4 mx-4 md:mx-6">
           
          <li className="ml-6 font-normal text-md my-1">
              Asesoramiento <span className="font-semibold">experto</span>  {" "}
             
            </li><li className="ml-6 font-normal text-md my-1">
            {" "}
              <span className="font-semibold">Cotizaciones adaptadas</span> a tu
              proyecto.
            </li>
            
          </ul>
          <Link
            href="/durlock"
            className="ms-4 mt-4 inline-flex items-center px-8 py-1 bg-black border-2 border-black text-white text-sm font-semibold  hover:bg-white hover:text-black transition-colors duration-300 ease-in-out rounded-full"
          >
            Durlock
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
