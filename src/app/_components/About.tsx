import { Diversity3Outlined, Policy, PolicyOutlined, Public, StyleOutlined } from '@mui/icons-material'
import React from 'react'

const About = () => {
  return (
    <div 
    id="about"
    className="bg-[#E2E2E2] text-gray-900 flex flex-col justify-center h-screen px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">¡Bienvenido a Protypark Ambiental: Innovación Sostenible en Acción!</h2>
      <p className="text-lg leading-relaxed">
      En Protypark Ambiental, estamos comprometidos con la innovación 
      sostenible y el desarrollo tecnológico para un futuro más verde 
      y saludable. Como un parque de desarrollo tecnológico líder, nos 
      enorgullece presentar nuestra gama de productos derivados de microalgas,
      diseñados para transformar positivamente el mundo que nos rodea.
      </p>
      <p className="text-lg leading-relaxed mt-4">
      En Protypark Ambiental, la sostenibilidad es el corazón de todo lo que hacemos. Nos esforzamos por minimizar nuestro impacto ambiental en cada etapa de producción, desde la cosecha responsable de microalgas hasta el embalaje ecoamigable de nuestros productos.
      </p>
    {/* <div className='flex flex-col space-y-3 pt-4'>

    <div className='flex'><PolicyOutlined className='mr-2' sx={{ width: 30, height:30}}/><span> Procesos legalmente certificados por nuestro departamento juridico</span></div>
    <span><Public className='mr-2' sx={{ width: 30, height:30}}/> Cobertura a nivel nacional</span>
    <span><StyleOutlined className='mr-2' sx={{ width: 30, height:30}}/> Planes diseñados para cubrir diferentes necesidades</span>
    <span><Diversity3Outlined className='mr-2' sx={{ width: 30, height:30}}/>Portafolio amplio de EPS y fondos de pensiones</span>
    </div> */}
    </div>
  </div>
  )
}

export default About


