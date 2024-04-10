'use client'
import ContactForm2 from '../components/ContactForm2';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';

export default function ContactPage() {
    return (
        <div className="container grid md:grid-cols-2 gap-4 p-4">
            <div className="p-7 col-span-1">
                <h1 className="font-bold text-4xl md:text-left text-center">Solicitá tu presupuesto y continuá construyendo</h1>
                <div className="leading-8">

                    {/* Presupuesto Online */}
                    <div className="flex items-center space-x-4 pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amarillo">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                        <h1 className='text-1xl font-bold'>PRESUPUESTOS ONLINE</h1>
                    </div>
                    <p className='ms-14'>Decinos lo que necesitás y un asesor te responderá rápidamente con tu presupuesto; y continúa tu proyecto</p>

                    {/* Métodos de pago */}
                    <div className="flex items-center space-x-4 pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amarillo">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                        <h1 className='text-1xl font-bold'>TODOS LOS MÉTODOS DE PAGO</h1>
                    </div>
                    <p className='ms-14'>Si estás de acuerdo con el presupuesto, podrás abonar con múltiples formas de pago. Podrás pagar en cuotas con todas las tarjetas de crédito</p>

                    {/* Delivery */}
                    <div className="flex items-center space-x-4 pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-amarillo">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <h1 className='text-1xl font-bold'>ENTREGAS GRATIS</h1>
                    </div>
                    <p className='ms-14'>Contamos con servicio de entrega en obra SIN CARGO con flota propia, servicio de hidrogrúa propio y óptimo cumplimiento de envios en tiempo y forma.</p>
                </div>
            </div>
            <div className="col-span-1">
                <ContactForm2 />
            </div>
        </div>
    );
};