// pages/pagina-de-gracias.js

const Page = () => {
  return (
    <>
      <div className="container  mx-auto text-center py-24">
        <h1 className="text-4xl font-semibold mb-4">
          ¡Gracias por contactarnos!
        </h1>
        <p className="text-xl">Pronto nos pondremos en contacto contigo.</p>
      </div>{" "}
      <a
        href="https://wa.link/0yda12" // Reemplaza NUMERODETELEFONO con tu número
        target="_blank"
        rel="noopener noreferrer"
        className="items-center  my-5 px-8 py-3 bg-amarillo text-black text-sm font-semibold rounded hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center"
      >
        Contactanos Ya por WhatsApp !{" "}
      </a>
    </>
  );
};

export default Page;
