"use client";
import React from "react";

const Themes = () => {
  return (
    <div className="relative p-4 bg-gray-100">
  <div className="grid mx-auto md:grid-cols-12 gap-4">
    <div className="p-4 mx-4 md:mx-0 md:col-span-5 bg-white shadow-lg lg border-b-4 border-indigo-600">
      <h1 className="text-2xl font-bold text-indigo-600">Público Particular</h1>
    </div>
    <div className="p-4 mx-4 md:mx-0 md:col-span-7 bg-white shadow-lg -lg border-b-4 border-indigo-600">
      <p className="text-gray-700">En Fedamil, entendemos las necesidades únicas de nuestros clientes particulares. Ofrecemos soluciones personalizadas para proyectos de construcción en seco, asesoramiento experto y un catálogo de productos de alta calidad. Ya sea que estés renovando tu hogar o emprendiendo un nuevo proyecto, estamos aquí para ayudarte a hacerlo realidad.</p>
      <a href="#" className="mt-4 inline-flex items-center px-8 py-1 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 border-2 border-indigo-600 hover:border-indigo-700 transition-colors duration-300 ease-in-out rounded-full">
        Descubre más
      </a>
    </div>
    <div className="p-4 mx-4 md:mx-0 md:col-span-5 bg-white shadow-lg -lg border-b-4 border-indigo-600 mt-4 md:mt-0">
      <h1 className="text-2xl font-bold text-indigo-600">Empresas Constructoras / Arquitectos</h1>
    </div>
    <div className="p-4 mx-4 md:mx-0 md:col-span-7 bg-white shadow-lg -lg border-b-4 border-indigo-600 mt-4 md:mt-0">
      <p className="text-gray-700">Para empresas constructoras y arquitectos, Fedamil ofrece una amplia gama de servicios y productos para llevar a cabo proyectos de cualquier envergadura. Además de suministrar materiales de la mejor calidad, ofrecemos la posibilidad de abrir cuentas corrientes y proporcionamos asistencia técnica especializada para garantizar el éxito de tus proyectos.</p>
      <a href="#" className="mt-4 inline-flex items-center px-8 py-1 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 border-2 border-indigo-600 hover:border-indigo-700 transition-colors duration-300 ease-in-out rounded-full">
        Colabora con nosotros
      </a>
    </div>
  </div>
</div>

  );
};

export default Themes;