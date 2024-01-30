import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
          <p>123 Calle Principal, Bogotá, Colombia</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Teléfonos</h3>
          <p>+57 123 456 789</p>
          <p>+57 987 654 321</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Correo Electrónico</h3>
          <p>cycaccionlegalsas@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
