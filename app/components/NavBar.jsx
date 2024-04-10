"use client";
import Link from "next/link";
import { useState } from "react";
import { GrContact } from "react-icons/gr";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="flex flex-col shadow-xl items-center justify-between ">
      <div className="flex w-full justify-between px-3 md:px-9 md:py-6 py-3 items-center">
        <Link
          href="/"
          className="text-2xl font-bold items-center text-gray-800 flex   p-1 bg-white"
        >
          <img className="w-12" src="./logo.png" alt="fedamil sa" />
          FEDAMIL
        </Link>

        <div className="md:flex hidden  flex-col">
          <p className="font-semibold  text-azul ">SUCURSAL</p>
          <p className="text-xs font-light">
            Av. Vergara 1910, <span>Villa Tesei</span>
          </p>
          <p className="font-light">(011) 7366-0014 </p>
        </div>
        <div className="md:flex hidden flex-col">
          <p className="font-semibold text-azul">SUCURSAL</p>
          <p className="text-xs font-light">
            Boticelli 4766, <span>Villa Tesei</span>
          </p>
          <p className="font-light">(011) 3663-4592 </p>
        </div>

        <div>
          <Link href="/contacto" className=" font-semibold text-white  md:flex hidden items-center">
            <div >
              <GrContact className="w-full h-10 py-2 p-2  bg-amarillo" />
            </div>
            <span className="items-center bg-azul text-xs h-10 p-2 pr-4">
              SOLICITAR PRESUPUESTO
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-4xl text-black">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>

      <nav className="bg-azul px-10 text-white md:flex hidden justify-between w-full py-4">
        <div className="flex w-full n ">

          <Link
            href="/"
            className="px-4 font-semibold hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
          >
            Inicio
          </Link>
          <Link
            href="/durlock"
            className="px-4 font-semibold hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
          >
            Durlock
          </Link>
          <Link
            href="/productos"
            className="px-4 font-semibold hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
          >
            Productos
          </Link>
          <Link
            href="/empresas"
            className="px-4 font-semibold hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
          >
            Empresas
          </Link>
          <Link
            href="/contacto"
            className="px-4 font-semibold hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2"
          >
            Contacto
          </Link>
        </div>


        <div className="flex items-center space-x-4">
          <p className=" font-light  ">Seguinos </p>
          <a href="https://www.instagram.com/fedamil/" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl hover:scale-125">
            <AiFillInstagram />
          </a>
          <a href="https://www.tiktok.com/@tu_usuario" target="_blank" rel="noopener noreferrer" className="text-amarillo hover:text-amarillo text-xl hover:scale-125">
            <RiTiktokFill />
          </a>
        </div>
      </nav>






      {/* Menú de navegación para móviles */}
      <nav
        className={`${showMenu ? "flex" : "hidden"
          } bg-azul px-10 text-white flex-col  items-center w-full py-4`}
      >
        <Link
          href="/"
          className="px-4 py-2 font-semibold hover:underline hover:text-amarillo hover:decoration-amarillo hover:decoration-2"
          onClick={toggleMenu}
        >
          Inicio
        </Link>
        <Link
          href="/durlock"
          className="px-4 py-2 font-semibold hover:underline hover:text-amarillo hover:decoration-amarillo hover:decoration-2"
          onClick={toggleMenu}
        >
          Durlock
        </Link>
        <Link
          href="/productos"
          className="px-4 py-2 font-semibold hover:underline hover:text-amarillo hover:decoration-amarillo hover:decoration-2"
          onClick={toggleMenu}
        >
          Productos
        </Link>
        <a
          href="#"
          className="px-4 py-2 font-semibold hover:underline hover:text-amarillo hover:decoration-amarillo hover:decoration-2"
          onClick={toggleMenu}
        >
          Nosotros
        </a>
        <Link
          href="/contacto"
          className="px-4 py-2 font-semibold hover:underline hover:text-amarillo hover:decoration-amarillo hover:decoration-2"
          onClick={toggleMenu}
        >
          Contacto
        </Link>

        {/* Extras: Información de sucursal y botón de contacto */}
        <div className="text-center mt-4">
          <p className="font-semibold text-azul">SUCURSAL</p>
          <p className="text-xs font-light">
            Av. Vergara 1910, <span>Villa Tesei</span>
          </p>
          <p className="font-light">(011) 7366-0014</p>
        </div>
        <div className="text-center mt-4">
          <p className="font-semibold text-azul">SUCURSAL</p>
          <p className="text-xs font-light">
            Boticelli 4766, <span>Villa Tesei</span>
          </p>
          <p className="font-light">(011) 3663-4592</p>
        </div>
        <div className="mt-4">
          <Link href="/contactus" className="flex items-center border border-white justify-center text-white">
            <GrContact className="w-8 h-8 p-1 bg-amarillo" />
            <span className="bg-azul text-xs p-2 hover:underline hover:text-amarillo  hover:decoration-amarillo hover:decoration-2">
              SOLICITAR PRESUPUESTO
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
