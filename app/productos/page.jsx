'use client'
import React from 'react';
import Slider from "react-slick";
import { FaAngleRight } from 'react-icons/fa';
import Marcas from '../components/Marcas';
import Link from 'next/link';

const imagenesCategorias = {
    'DURLOCK': '/fotos/durock.png',
    'EOLICOS': '/fotos/eolicos.jpg',
    'CHAPAS': '/fotos/chapas.jpg',
    'HIERROS': '/fotos/hierros.png',
    'PROD. CONSTRUCCION': '/fotos/const.jpg',
    'PINTURA': '/fotos/pinturas.jpg',
    'FERRETERIA': '/fotos/ferreteria.webp',
    'ZINGUERIA': '/fotos/zingueria.png',
    'GRIFERÍA': '/fotos/griferia.png',
  };

  const productosFedamil = [
    { 
      categoria: 'DURLOCK', 
      productos: ['Placas', 'Masillas', 'Perfileria', 'Sujecion', 'Cintas Tomado De Juntas', 'Más...'] 
    },
    { 
      categoria: 'EOLICOS', 
      productos: ['Rotativos Y Bases', 'Extractores Eólicos', 'Ventiladores de Techo Eólicos', 'Anemómetros', 'Más...'] 
    },
    { 
      categoria: 'CHAPAS', 
      productos: ['Chapas Acanaladas', 'Chapas Trapezoidales', 'Chapa Simil Teja', 'Más...'] 
    },
    { 
      categoria: 'HIERROS', 
      productos: ['Angulos', 'Planchuelas', 'Planchuelas Perforadas', 'Hierros Redondos', 'Hierros Cuadrados', 'Más...'] 
    },
    { 
      categoria: 'PROD. CONSTRUCCION', 
      productos: ['Hierros Para Construccion', 'Mallas Sima', 'Varillas Corrugadas', 'Alambres de Construcción', 'Más...'] 
    },
    { 
      categoria: 'PINTURA', 
      productos: ['Masillas', 'Revestimientos', 'Sinteticos', 'Galvanizados', 'Más...'] 
    },
    { 
      categoria: 'FERRETERIA', 
      productos: ['Herramientas', 'Clavos y Tornillos', 'Brocas', 'Cerraduras y Candados', 'Más...'] 
    },
    { 
      categoria: 'GRIFERÍA', 
      productos: ['Grifos para lavamanos', 'Grifos para cocina', 'Grifos para ducha', 'Accesorios para grifería', 'Más...'] 
    },
    { 
      categoria: 'ZINGUERIA', 
      productos: ['Canaletas', 'Bajadas', 'Accesorios para techos', 'Sombreretes', 'Ventilaciones', 'Más...'] 
    },
  ];
  
  

export default function Page() {const setting = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
    return (
        <>
        
  
        <div className="hero  md:mb-10 md:pb-16">
        <Slider {...settings}>
          {/* Añade tantos slides como quieras mostrar en el hero */}
          <div>
            <img src="/fotos/1.jpg" alt="Hero Slide 1" className="w-full object-cover" style={{ height: '50vh' }} />
          </div>
          <div>
            <img src="/fotos/varios.webp" alt="Hero Slide 2" className="w-full object-cover" style={{ height: '50vh' }} />
          </div>
          <div>
            <img src="/fotos/ferreteria.webp" alt="Hero Slide 3" className="w-full object-cover" style={{ height: '50vh' }} />
          </div>
          <div>
            <img src="/fotos/eolicos.jpg" alt="Hero Slide 3" className="w-full object-cover" style={{ height: '50vh' }} />
          </div>
        </Slider>
        
      </div>
<div className=''>

      <div className="container mx-auto md:px-10 py-8"><div className="text-start -4">
          <h1 className="text-4xl font-bold pl-2 mb-4">Explora Nuestros Productos</h1>
          <p className="text-lg font-light pl-2 mb-8">Descubre la calidad y variedad que Fedamil tiene para ofrecer para tu próximo proyecto.</p>
        </div>
      <Slider {...setting}>
        {productosFedamil.map((familia, index) => (
          <div key={index} className="px-2">
            <div className="border bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={imagenesCategorias[familia.categoria]} alt={familia.categoria} className="w-full h-48 object-cover"/>
              <div className="p-4 text-center">
                <h2 className="text-2xl font-bold text-[#FEDE02] mb-4">{familia.categoria}</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {familia.productos.map((producto, indexProducto) => (
                    <span key={indexProducto} className="bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
                      {producto}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex  items-center bg-[#FEDE02] text-gray-800 font-bold py-2 px-4 rounded hover:bg-[#fcd34d] transition-colors duration-200">
                  Consultar <FaAngleRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>



      <div className='container mx-auto md:px-10 py-8'>
        <h3 className='text-2xl pl-2 font-semibold'>NUESTRAS MARCAS</h3>
        <div>
        <Marcas/>
        </div>
        <Link href='/contacto' className="mt-4 ml-4 inline-flex items-center px-8 py-1 bg-azul border-2 border-azul text-white text-sm font-semibold  hover:bg-white hover:text-azul transition-colors duration-300 ease-in-out rounded-full">
        Solicita Un Presupuesto
        </Link>
        
      </div>
    </>
  );
};

