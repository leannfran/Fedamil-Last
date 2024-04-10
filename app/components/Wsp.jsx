import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Wsp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+5401173660014&text=Hola!%20Estoy%20interesado%20en%20sus%20servicios."
      className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 transition-colors duration-300 ease-in-out text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default Wsp;
