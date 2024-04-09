
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post('https://formspree.io/mwkgwkkb', values);
      alert('Formulario enviado exitosamente!');
      resetForm();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        ciudad: '',
        tipoUsuario: '',
      }}
      validationSchema={Yup.object({
        nombre: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Email inválido').required('El email es requerido'),
        telefono: Yup.string().required('El teléfono es requerido'),
        mensaje: Yup.string().required('El mensaje es requerido'),
        ciudad: Yup.string().required('La ciudad es requerida'),
        tipoUsuario: Yup.string().required('El tipo de usuario es requerido'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className='max-w-md mx-auto bg-yellow-500 rounded p-7 m-7'>
      <p className='text-center font-bold text-2xl'>SOLICITA TU PRESUPUESTO</p>
      <p className='text-center font-semiligth text-2xl'>Respuesta inmediata</p>
        <div className='mb-4'>
          <label htmlFor="nombre" className='block mb-1'>Nombre:</label>
          <Field type="text" id="nombre" className="w-full px-3 py-2 border rounded-md" name="nombre" />
          <ErrorMessage name="nombre" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <Field type="email" id="email" className="w-full px-3 py-2 border rounded-md" name="email" />
          <ErrorMessage name="email" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block mb-1">Teléfono:</label>
          <Field type="text" id="telefono" className="w-full px-3 py-2 border rounded-md" name="telefono" />
          <ErrorMessage name="telefono" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <div className='mb-4'>
          <label htmlFor="mensaje" className="block mb-1">Mensaje:</label>
          <Field as="textarea" id="mensaje" className="w-full px-3 py-2 border rounded-md" name="mensaje" />
          <ErrorMessage name="mensaje" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <div className='mb-4'>
          <label htmlFor="ciudad" className="block mb-1">Ciudad:</label>
          <Field as="select" id="ciudad" className="w-full px-3 py-2 border rounded-md" name="ciudad">
            <option value="">Selecciona una ciudad</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Rosario">Rosario</option>
          </Field>
          <ErrorMessage name="ciudad" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <div className='mb-4'>
          <label className="block mb-1">Tipo de usuario:</label>
          <div>
            <label>
              <Field type="radio" name="tipoUsuario" value="Consumidor final" className="mr-1" />
              Consumidor final
            </label>
            <label>
              <Field type="radio" name="tipoUsuario" value="Empresa" className="mr-1 ms-4"/>
              Empresa
            </label>
          </div>
          <ErrorMessage name="tipoUsuario" className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' component="div" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
