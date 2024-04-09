'use client'// Importar react-slick y los estilos necesarios
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marcas = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
     
    ],
  };

  return (
    <div className="w-full h-auto md:p-4">
      <Slider {...settings}>
        {[...Array(11).keys()].map((index) => (
          <div key={index} className="px-2 flex justify-center">
            <img
              className="mx-auto"
              src={`/logos/${index + 1}.png`}
              alt={`Logo ${index + 1}`}
              style={{ width: "auto", height: "150px" }} // Ajusta estas propiedades según tus necesidades
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Marcas;
