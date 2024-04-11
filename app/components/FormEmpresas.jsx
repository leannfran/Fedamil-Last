'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Esquema de validación
const schema = yup.object({
  name: yup.string().required("El campo nombre es requerido"),
  email: yup.string().email("Debe ser un correo válido").required("El campo email es requerido"),
  phone: yup.string().required("El campo teléfono es requerido"),
  message: yup.string().required("El campo mensaje es requerido"),
}).required();

const FormEmpresas = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    emailjs.send('service_ugeh30i', 'template_noz8unr', data, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          // Aquí puedes redireccionar a una página de agradecimiento o mostrar un mensaje de éxito
          // Por ejemplo: alert("Formulario enviado con éxito!");
      }, (error) => {
          console.log(error.text);
          // Aquí manejar el error
      });
    reset(); // Reinicia el formulario después del envío exitoso
  };

  return (
    <div className=" px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex  justify-center relative" style={{ backgroundImage: 'url("1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-white bg-opacity-75 rounded p-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Fedamil Empresas</h2>
          <p className="mt-1">Conviértete en socio mayorista y disfruta de precios únicos, condiciones especiales de financiamiento y asesoramiento personalizado.</p>
        </div>
               
      </div>
   

    </div>
  );
};

export default FormEmpresas; 