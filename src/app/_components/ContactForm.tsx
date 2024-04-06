import Image from 'next/image'
import React from 'react'

const ContactForm = () => {
  return (
<div 
id='contact-form'
className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src="/contact-bg.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="bg-[#e2e2e2] bg-opacity-40 absolute inset-0"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Nombre</label>
            <input type="text" id="name" name="name" className="w-full bg-[#FAFAFA] rounded-full py-2 px-4 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="w-full bg-[#FAFAFA] rounded-full py-2 px-4 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
            <textarea id="message" name="message" className="w-full bg-[#FAFAFA] rounded-full py-2 px-4 text-white"></textarea>
          </div>
          <button type="submit" className="bg-[#fafafa] text-gray-900 border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
