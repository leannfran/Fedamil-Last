"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <><div className="flex mx-2 items-center justify-center my-10">
    <Link
      href="#"
      className="flex items-center justify-center w-full md:w-auto px-6 py-2 md:px-20 md:py-4 bg-azul border-2 border-azul text-white md:text-2xl hover:bg-white hover:text-azul transition-colors duration-300 ease-in-out rounded-full text-center"
    >
      Solicita Tu Cotización
    </Link>
  </div>
      <section className="text-gray-600 body-font">
        <div className=" h-64 overflow-hidden">
          <img
            alt="Historia de Fedamil"
            className="object-cover object-center h-full w-full"
            src="./fotos/1.jpg"
          />
        </div>
      </section>
      
    </>
  );
};

export default ContactUs;
