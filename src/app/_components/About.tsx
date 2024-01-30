import { Diversity3Outlined, Policy, PolicyOutlined, Public, StyleOutlined } from '@mui/icons-material'
import React from 'react'

const About = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
      <p className="text-lg leading-relaxed">
        En nuestra empresa, nos dedicamos a proporcionar soluciones integrales de seguridad social en Colombia. Nuestro equipo está comprometido en brindar servicios de alta calidad que satisfagan las necesidades de nuestros clientes y contribuyan al bienestar de la comunidad.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Nos especializamos en asesoramiento personalizado, gestión eficiente de trámites y atención al cliente excepcional. Nuestro objetivo es simplificar el acceso a la seguridad social y garantizar que todos los ciudadanos puedan disfrutar de los beneficios que ofrece.
      </p>
    <div className='flex flex-col space-y-3 pt-4'>

    <div className='flex'><PolicyOutlined className='mr-2' sx={{ width: 30, height:30}}/><span> Procesos legalmente certificados por nuestro departamento juridico</span></div>
    <span><Public className='mr-2' sx={{ width: 30, height:30}}/> Cobertura a nivel nacional</span>
    <span><StyleOutlined className='mr-2' sx={{ width: 30, height:30}}/> Planes diseñados para cubrir diferentes necesidades</span>
    <span><Diversity3Outlined className='mr-2' sx={{ width: 30, height:30}}/>Portafolio amplio de EPS y fondos de pensiones</span>
    </div>
    </div>
  </div>
  )
}

export default About


