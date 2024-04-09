import React from "react";
import {
  FaMoneyBillWave,
  FaRegHandshake,
  FaRegLightbulb,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import FormEmpresas from "../components/FormEmpresas";
const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Asóciate con <b>FEDAMIL</b>
              <br className="hidden lg:inline-block" />y transforma tu negocio
            </h1>
            <p className="mb-8 leading-relaxed">
              Conviértete en socio mayorista de Fedamil y accede a una amplia
              gama de beneficios diseñados para potenciar tu empresa. Disfruta
              de precios únicos, cuentas corrientes con condiciones especiales y
              el respaldo de una marca líder en soluciones integrales de
              construcción.
            </p>
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 text-center">
              <a
                href="https://api.whatsapp.com/send?phone=NUMERODETELEFONO" // Reemplaza NUMERODETELEFONO con tu número
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="lean.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Ventajas Exclusivas para Socios
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Únete a nuestra red de socios mayoristas y lleva tu empresa al
              siguiente nivel con nuestros productos y servicios de alta
              calidad.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#FEDE02] inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full bg-gray-100 p-8 rounded">
                <FaMoneyBillWave className="block w-5 h-5 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">
                  Precios únicos y competitivos exclusivos para nuestros socios,
                  permitiendo una mayor rentabilidad en tus proyectos.
                </p>
                <a className="inline-flex items-center">
                  <div className="text-yellow-500">Más información</div>
                  <AiOutlineArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full bg-gray-100 p-8 rounded">
                <FaRegHandshake className="block w-5 h-5 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">
                  Acceso a cuentas corrientes con condiciones especiales,
                  diseñadas para facilitar la gestión y financiamiento de tus
                  compras.
                </p>
                <a className="inline-flex items-center">
                  <div className="text-yellow-500">Más información</div>
                  <AiOutlineArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full bg-gray-100 p-8 rounded">
                <FaRegLightbulb className="block w-5 h-5 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">
                  Soporte y asesoramiento personalizado por parte de nuestro
                  equipo de expertos para garantizar el éxito de tus proyectos.
                </p>
                <a className="inline-flex items-center">
                  <div className="text-yellow-500">Más información</div>
                  <AiOutlineArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormEmpresas/>
    </div>
  );
};

export default Page;
