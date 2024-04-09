import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: 'Buenos Aires',
    userType: 'Consumidor Final',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-yellow-500 rounded p-7 m-7">
        <p className='text-center font-bold text-2xl'>SOLICITA TU PRESUPUESTO</p>
        <p className='text-center font-semiligth text-2xl'>Respuesta inmediata</p>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">Teléfono:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Mensaje:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded-md"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-1">Ciudad:</label>
        <select id="city" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 border rounded-md">
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Rosario">Rosario</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Tipo de usuario:</label>
        <div>
          <input type="radio" id="consumidor" name="userType" value="Consumidor Final" checked={formData.userType === 'Consumidor Final'} onChange={handleChange} className="mr-1" />
          <label htmlFor="consumidor" className="mr-4">Consumidor Final</label>
          <input type="radio" id="empresa" name="userType" value="Empresa" checked={formData.userType === 'Empresa'} onChange={handleChange} className="mr-1" />
          <label htmlFor="empresa">Empresa</label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
    </form>
  );
};

export default ContactForm;
