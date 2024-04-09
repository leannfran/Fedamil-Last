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
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{ backgroundImage: 'url("1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-white bg-opacity-75 rounded p-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Fedamil Empresas</h2>
          <p className="mt-1">Conviértete en socio mayorista y disfruta de precios únicos, condiciones especiales de financiamiento y asesoramiento personalizado.</p>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contacto</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Déjanos tus datos y te contactaremos para explicarte más sobre los beneficios de ser socio de Fedamil Empresas.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
            <input {...register("name")} type="text" id="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input {...register("email")} type="email" id="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Teléfono</label>
            <input {...register("phone")} type="tel" id="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
          </div>

          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormEmpresas; 