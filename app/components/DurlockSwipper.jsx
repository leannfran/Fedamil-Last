'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper'; // Asegúrate de que esto esté actualizado

import 'swiper/css'; // Estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para el módulo Navigation
import 'swiper/css/autoplay'; // Estilos para el módulo Autoplay

import DurlockSlide from './DurlockSlide';

const DurlockSwipper = () => {
  return ( 
    <>
     <Swiper
      modules={[Autoplay, Navigation]} // Aquí pasas los módulos a Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
    >
    <SwiperSlide>
          <DurlockSlide
            title="Placa Resistente al Fuego Durlock®"
            description="Gran resistencia al fuego para paredes, revestimientos o cielorrasos con requerimientos elevados como cocinas, salidas de emergencia."
            applications={['Pared', 'Cielorraso', 'Revestimiento']}
            resistances={[
              { name: 'Al fuego', value: '4/5' },
              { name: 'Aislación Acústica', value: 'Alta' },
              { name: 'Resistencia al Impacto', value: '4/5' }
            ]}
            imageUrl="./durlock-resistente-al-fuego.png"
            altText="Placa Resistente al Fuego Durlock"
          />
        </SwiperSlide>
                <SwiperSlide>
                <DurlockSlide
            title="Placa Estándar Durlock®"
            description="Versatilidad de aplicaciones para renovar o construir paredes, cielorrasos y revestimientos interiores en ambientes secos, como estar/comedor, dormitorios."
            applications={['Pared', 'Cielorraso', 'Revestimientos']}
            resistances={[
              { name: 'Al fuego', value: '3/5' },
              { name: 'Aislación Acústica', value: '2.5/5' },
              { name: 'Resistencia al Impacto', value: '3/5' }
            ]}
            imageUrl="./durlock-estandar.png"
            altText="Placa Estándar Durlock"
          />

                </SwiperSlide>

       {/* Iterar sobre tus placas Durlock */}
       <SwiperSlide>
          <DurlockSlide
            title="Placa Resistente a la Humedad Durlock®"
            description="Gran resistencia al agua. Perfecta para paredes o revestimientos en ambientes con presencia de agua como baños y cocinas."
            applications={['Pared', 'Revestimiento']}
            resistances={[
              { name: 'Al fuego', value: '3/5' },
              { name: 'Aislación Acústica', value: 'Media' },
              { name: 'Resistencia al Impacto', value: '3.5/5' },
              { name: 'Resistencia al Agua', value: '4/5' }
            ]}
            imageUrl="./durlock-anti-humedad.png"
            altText="Placa Resistente a la Humedad Durlock"
          />
        </SwiperSlide>

        

        <SwiperSlide>
          <DurlockSlide
            title="Placa ACU60 Durlock®"
            description="Placa acústica para paredes, cielorrasos o revestimientos que junto al sistema ACU60 Durlock® logra un 60% la reducción del ruido."
            applications={['Pared', 'Cielorraso', 'Revestimiento']}
            resistances={[
              { name: 'Al fuego', value: '3/5' },
              { name: 'Aislación Acústica', value: 'Alta' },
              { name: 'Resistencia al Impacto', value: '3.5/5' }
            ]}
            imageUrl="./durlock-acu.png"
            altText="Placa ACU60 Durlock"
          />
        </SwiperSlide>

        <SwiperSlide>
          <DurlockSlide
            title="Placa Antihumedad Durlock®"
            description="La única placa Durlock® diseñada específicamente para problemas de humedad."
            applications={['Revestimiento']}
            resistances={[
              { name: 'Al fuego', value: '3/5' },
              { name: 'Aislación Acústica', value: 'Media' },
              { name: 'Resistencia al Impacto', value: '3.5/5' }
            ]}
            imageUrl="./durlock-res-humedad.png"
            altText="Placa Antihumedad Durlock"
          />
        </SwiperSlide>
        <SwiperSlide>
  <DurlockSlide
    title="Placa Extra Resistente Durlock®"
    description="Gran Resistencia al fuego, Impacto y Aislación Acústica en tus paredes, todo en una misma placa."
    applications={['Pared', 'Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '4.5/5' },
      { name: 'Aislación Acústica', value: '5/5' },
      { name: 'Resistencia al Impacto', value: '4.5/5' }
    ]}
    imageUrl="./durlock-extraresistente.png"
    altText="Placa Extra Resistente Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa Cuatro Dimensiones Durlock®"
    description="Cuatro prestaciones en una misma placa: resistencia a la humedad, fuego, impacto y aislación acústica en ambientes con presencia de agua como baños, vestuarios, cocinas."
    applications={['Pared', 'Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '4.5/5' },
      { name: 'Aislación Acústica Muy alta', value: 'Alta' },
      { name: 'Resistencia al Impacto', value: '4.5/5' },
      { name: 'Resistencia al Agua', value: '5/5' }
    ]}
    imageUrl="./durlock-4d.png"
    altText="Placa Cuatro Dimensiones Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa CIEL Durlock®"
    description="La Placa Durlock® CIEL es la única placa de yeso de 7 mm de espesor para cielorrasos, más liviana y que permite ser instalada con perfiles normalizados, cada 60 cm. Por su peso, ayuda a evitar el desgaste físico y permite una mayor velocidad de instalación."
    applications={['Cielorraso']}
    resistances={[
      { name: 'Al fuego', value: '4/5' },
      { name: 'Resistencia al Impacto', value: '4/5' }
    ]}
    imageUrl="./durlock-ciel.png"
    altText="Placa CIEL Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa Revoque Seco Durlock®"
    description="Para realizar el revoque en paredes de mamposterías u hormigón de forma práctica, en menor tiempo y optimizando los costos de obra."
    applications={['Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '3/5' },
      { name: 'Aislación Acústica Media', value: 'Media' },
      { name: 'Resistencia al Impacto', value: '4/5' }
    ]}
    imageUrl="./durlock-rs.png"
    altText="Placa Revoque Seco Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa Solidtex Durlock®"
    description="Innovadora solución de yeso en paredes o revestimientos, con una resistencia al impacto y una capacidad de carga sin precedentes."
    applications={['Pared', 'Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '5/5' },
      { name: 'Aislación Acústica Muy alta', value: 'Muy alta' },
      { name: 'Resistencia al Impacto', value: '5/5' },
      { name: 'Resistencia al Agua', value: '5/5' }
    ]}
    imageUrl="./durlock-solidtex.png"
    altText="Placa Solidtex Durlock"
  />
       </SwiperSlide>
       
       <SwiperSlide>
  <DurlockSlide
    title="Placa ExSound Durlock®"
    description="Solución acústica para lograr ambientes más confortables, es ideal para salas musicales, salas de cine, locales comerciales."
    applications={['Cielorraso', 'Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '2/5' },
      { name: 'Resistencia al Impacto', value: '2/5' },
      { name: 'Absorción Acústica Muy alta', value: 'Muy alta' }
    ]}
    imageUrl="./durlock-exsound.png"
    altText="Placa ExSound Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa Semicubiertos Durlock®"
    description="Placa de yeso especialmente formulada para cielorrasos exteriores semicubiertos como bajo balcones, aleros, galerías."
    applications={['Cielorraso']}
    resistances={[
      { name: 'Al fuego', value: '3/5' },
      { name: 'Resistencia al Impacto', value: '4/5' },
      { name: 'Resistencia al Agua', value: '5/5' }
    ]}
    imageUrl="./durlock-semicubiertos.png"
    altText="Placa Semicubiertos Durlock"
  />
</SwiperSlide>

<SwiperSlide>
  <DurlockSlide
    title="Placa Aquaboard Durlock®"
    description="Aquaboard tiene una innovadora tecnología en yeso y recubrimiento, que la hacen apta para aplicaciones en exteriores."
    applications={['Pared', 'Revestimiento']}
    resistances={[
      { name: 'Al fuego', value: '4/5' },
      { name: 'Resistencia al Impacto', value: '4/5' },
      { name: 'Resistencia al Agua', value: '5/5' }
    ]}
    imageUrl="./durlock-aquaboard.png"
    altText="Placa Aquaboard Durlock"
  />
</SwiperSlide>


       {/* Agrega más SwiperSlides según sea necesario */}
     </Swiper> </>
    );
}

export default DurlockSwipper;