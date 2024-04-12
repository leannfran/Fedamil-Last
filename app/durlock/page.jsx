"use client";
import DurlockSlide from "../components/DurlockSlide";
import Slider from "react-slick";
import { useEffect } from "react";
export default function Page() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <main className="">
        <div className="container mx-auto flex flex-col md:flex-row text-center items-center py-12 px-4 md:px-8">
          <div className="md:w-1/2 hidden md:block m-4 ">
            <img
              src="./durlockhero.jpg"
              alt="Durlock"
              className="w-full  rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl relative font-bold text-gray-800 mb-4  flex md:text-start items-center">
              SOMOS DISTRIBUIDRES OFICIALES{" "}
            </h1>
            <div className="md:w-1/2 md:hidden m-4 ">
              <img
                src="./durlockhero.jpg"
                alt="Durlock"
                className="w-full  rounded-md shadow-lg"
              />
            </div>{" "}
            <p className="text-gray-700 md:text-xl md:text-start md:pr-10 my-8">
              Te Asesoramos de manera 100% Personalizada Cotiza tu proyecto de
              construccion en seco con FEDAMIL
            </p>
            {/* Agrega aquí más contenido o componentes si es necesario */}
            <div className="flex 2 md:hidden gap-4">
              <a href="https://wa.link/yypdy2" className="bg-[#FEDE02]  font-bold w-1/2 py-2 hover:bg-azul hover:text-white">Cotiza</a>
              <a href="https://wa.link/i0aqua" target="_blank" className="bg-[#FEDE02] font-bold  w-1/2 py-2 hover:bg-azul hover:text-white">
                Te Asesoramos
              </a>
            </div>
            <div className="md:flex hidden 2 gap-4">
              <a href="/contacto" className="bg-[#FEDE02]  font-bold px-4 py-2 hover:bg-azul hover:text-white">Cotiza</a>
              <a href="https://wa.link/i0aqua" target="_blank" className="bg-[#FEDE02] font-bold  px-4 py-2 hover:bg-azul hover:text-white">
                Te Asesoramos
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Imagen 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/pared.webp"
                alt="Pared"
                className=" rounded-lg shadow-xl  w-44 h-44 hover:w-48 hover:h-48 transition-all object-cover"
              />
              <p className="mt-2 font-semibold">Pared</p>
              <a href="#"></a>
            </div>
            {/* Imagen 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/revestimiento.webp"
                alt="Revestimiento"
                className=" rounded-lg shadow-xl  w-44 h-44 hover:w-48 hover:h-48 transition-all object-cover"
              />
              <p className="mt-2 font-semibold">Revestimiento</p>
              <a href="#"></a>
            </div>
            {/* Imagen 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/cieloraso.png"
                alt="Cielorraso"
                className=" rounded-lg shadow-xl  w-44 h-44 hover:w-48 hover:h-48 transition-all object-cover"
              />
              <p className="mt-2  font-semibold">Cielorraso</p>
              <a href="#"></a>
            </div>
            {/* Imagen 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/entrepisos.jpeg"
                alt="Entrepiso"
                className=" rounded-lg shadow-xl  w-44 h-44 hover:w-48 hover:h-48 transition-all object-cover"
              />
              <p className="mt-2 font-semibold">Entrepiso</p>
              <a href="#"></a>
            </div>
          </div>
        </div>

        {/* Aquí podrías añadir más secciones o componentes específicos de la página */}
        <div className="slider-container bg-gray-100  p-8">
          <h2 className="text-3xl text-center ml-14 inline-block  border-b-4 border-[#FEDE02] font-bold text-gray-800 mb-6">
            Placas
          </h2>
          <Slider {...settings}>
            <div>
              <DurlockSlide
                title="Placa Resistente al Fuego Durlock®"
                description="Gran resistencia al fuego para paredes, revestimientos o cielorrasos con requerimientos elevados como cocinas, salidas de emergencia."
                applications={["Pared", "Cielorraso", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "4/5" },
                  { name: "Aislación Acústica", value: "Alta" },
                  { name: "Resistencia al Impacto", value: "4/5" },
                ]}
                imageUrl="./durlock-resistente-al-fuego.png"
                altText="Placa Resistente al Fuego Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Estándar Durlock®"
                description="Versatilidad de aplicaciones para renovar o construir paredes, cielorrasos y revestimientos interiores en ambientes secos, como estar/comedor, dormitorios."
                applications={["Pared", "Cielorraso", "Revestimientos"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Aislación Acústica", value: "2.5/5" },
                  { name: "Resistencia al Impacto", value: "3/5" },
                ]}
                imageUrl="./durlock-estandar.png"
                altText="Placa Estándar Durlock"
              />
            </div>
            <div>
              <DurlockSlide
                title="Placa Resistente a la Humedad Durlock®"
                description="Gran resistencia al agua. Perfecta para paredes o revestimientos en ambientes con presencia de agua como baños y cocinas."
                applications={["Pared", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Aislación Acústica", value: "Media" },
                  { name: "Resistencia al Impacto", value: "3.5/5" },
                  { name: "Resistencia al Agua", value: "4/5" },
                ]}
                imageUrl="./durlock-anti-humedad.png"
                altText="Placa Resistente a la Humedad Durlock"
              />
            </div>
            <div>
              <DurlockSlide
                title="Placa ACU60 Durlock®"
                description="Placa acústica para paredes, cielorrasos o revestimientos que junto al sistema ACU60 Durlock® logra un 60% la reducción del ruido."
                applications={["Pared", "Cielorraso", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Aislación Acústica", value: "Alta" },
                  { name: "Resistencia al Impacto", value: "3.5/5" },
                ]}
                imageUrl="./durlock-acu.png"
                altText="Placa ACU60 Durlock"
              />
            </div>
            <div>
              <DurlockSlide
                title="Placa Antihumedad Durlock®"
                description="La única placa Durlock® diseñada específicamente para problemas de humedad."
                applications={["Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Aislación Acústica", value: "Media" },
                  { name: "Resistencia al Impacto", value: "3.5/5" },
                ]}
                imageUrl="./durlock-res-humedad.png"
                altText="Placa Antihumedad Durlock"
              />
            </div>
            <div>
              <DurlockSlide
                title="Placa Extra Resistente Durlock®"
                description="Gran Resistencia al fuego, Impacto y Aislación Acústica en tus paredes, todo en una misma placa."
                applications={["Pared", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "4.5/5" },
                  { name: "Aislación Acústica", value: "5/5" },
                  { name: "Resistencia al Impacto", value: "4.5/5" },
                ]}
                imageUrl="./durlock-extraresistente.png"
                altText="Placa Extra Resistente Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Cuatro Dimensiones Durlock®"
                description="Cuatro prestaciones en una misma placa: resistencia a la humedad, fuego, impacto y aislación acústica."
                applications={["Pared", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "4.5/5" },
                  { name: "Aislación Acústica Muy alta", value: "Alta" },
                  { name: "Resistencia al Impacto", value: "4.5/5" },
                  { name: "Resistencia al Agua", value: "5/5" },
                ]}
                imageUrl="./durlock-4d.png"
                altText="Placa Cuatro Dimensiones Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa CIEL Durlock®"
                description="La Placa Durlock® CIEL es la única placa de yeso de 7 mm de espesor para cielorrasos, más liviana y que permite ser instalada con perfiles normalizados, cada 60 cm."
                applications={["Cielorraso"]}
                resistances={[
                  { name: "Al fuego", value: "4/5" },
                  { name: "Resistencia al Impacto", value: "4/5" },
                ]}
                imageUrl="./durlock-ciel.png"
                altText="Placa CIEL Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Revoque Seco Durlock®"
                description="Para realizar el revoque en paredes de mamposterías u hormigón de forma práctica, en menor tiempo y optimizando los costos de obra."
                applications={["Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Aislación Acústica Media", value: "Media" },
                  { name: "Resistencia al Impacto", value: "4/5" },
                ]}
                imageUrl="./durlock-rs.png"
                altText="Placa Revoque Seco Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Solidtex Durlock®"
                description="Innovadora solución de yeso en paredes o revestimientos, con una resistencia al impacto y una capacidad de carga sin precedentes."
                applications={["Pared", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "5/5" },
                  { name: "Aislación Acústica Muy alta", value: "Muy alta" },
                  { name: "Resistencia al Impacto", value: "5/5" },
                  { name: "Resistencia al Agua", value: "5/5" },
                ]}
                imageUrl="./durlock-solidtex.png"
                altText="Placa Solidtex Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa ExSound Durlock®"
                description="Solución acústica para lograr ambientes más confortables, es ideal para salas musicales, salas de cine, locales comerciales."
                applications={["Cielorraso", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "2/5" },
                  { name: "Resistencia al Impacto", value: "2/5" },
                  { name: "Absorción Acústica Muy alta", value: "Muy alta" },
                ]}
                imageUrl="./durlock-exsound.png"
                altText="Placa ExSound Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Semicubiertos Durlock®"
                description="Placa de yeso especialmente formulada para cielorrasos exteriores semicubiertos como bajo balcones, aleros, galerías."
                applications={["Cielorraso"]}
                resistances={[
                  { name: "Al fuego", value: "3/5" },
                  { name: "Resistencia al Impacto", value: "4/5" },
                  { name: "Resistencia al Agua", value: "5/5" },
                ]}
                imageUrl="./durlock-semicubiertos.png"
                altText="Placa Semicubiertos Durlock"
              />{" "}
            </div>
            <div>
              <DurlockSlide
                title="Placa Aquaboard Durlock®"
                description="Aquaboard tiene una innovadora tecnología en yeso y recubrimiento, que la hacen apta para aplicaciones en exteriores."
                applications={["Pared", "Revestimiento"]}
                resistances={[
                  { name: "Al fuego", value: "4/5" },
                  { name: "Resistencia al Impacto", value: "4/5" },
                  { name: "Resistencia al Agua", value: "5/5" },
                ]}
                imageUrl="./durlock-aquaboard.png"
                altText="Placa Aquaboard Durlock"
              />{" "}
            </div>
          </Slider>
        </div>

        <div className="flex flex-col justify-center  my-10 gap-4 text-center items-center m-auto">
          <h2 className="md:text-4xl text-2xl mx-4 text-center   ] font-bold text-gray-800 ">
            Necesitas{" "}
            <span className="border-b-4 border-[#FEDE02]"> Asesoramiento</span>{" "}
            Para Tu Obra ?
          </h2>
          <p className="font-light md:w-1/3 text-gray-600">
            Contactate con nosotros y te ayudaremos a calcular que y cuantos mts
            necesitas comprar !
          </p>
          <a href="https://wa.link/i0aqua" className="bg-[#FEDE02] font-bold px-4 py-2  hover:bg-azul hover:text-white">
            {" "}
            ASESORATE{" "}
          </a>
        </div>

        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
          <div className="md:grid md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src="lean.png"
                alt="Descripción de la imagen"
                className="rounded-lg shadow-xl w-full max-h-96 object-cover "
              />
            </div>
            <div>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-bold text-3xl md:text-5xl mt-5 md:mt-0 tracking-tight">
                  Ventajas #HaceloConDurlock
                </h2>
                <p className="text-neutral-500 text-xl mt-3">
                  Descubre cómo Durlock® puede transformar tu proyecto
                </p>
              </div>
              <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Es amigable con el medio ambiente</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Permite el uso eficiente de la energía. Brinda soluciones
                      acústicas, térmicas, de resistencia al fuego y resistencia
                      a la humedad.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Disminuye los plazos de obra</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      La ejecución de una obra con Durlock® es más sencilla,
                      rápida y limpia que el sistema tradicional de albañilería,
                      permitiendo que en pocos días el ambiente esté apto para
                      habitar.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Facilita la construcción de grandes proyectos</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Hoy día se puede construir una obra íntegramente con el
                      Sistema Durlock®.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Más opciones para diseñar espacios</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision" // Modificado a camelCase
                          stroke="currentColor"
                          strokeLinecap="round" // Modificado a camelCase
                          strokeLinejoin="round" // Modificado a camelCase
                          strokeWidth="1.5" // Modificado a camelCase
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>{" "}
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Permite proyectar sin limitaciones superficies curvas,
                      muebles, estantes, cajones, gargantas, bandejas de
                      iluminación.
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>Ideal para refacciones y simple mantenimiento</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      Aporta flexibilidad en la redistribución de los ambientes
                      y practicidad en el mantenimiento de las instalaciones.
                    </p>
                  </details>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
