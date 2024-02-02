import React from 'react';
import Head from 'next/head';
// import { HiOutlineLightBulb } from 'react-icons/hi'; // Importa el ícono de la bombilla
// import { IoIosThermometer } from 'react-icons/io'; // Importa el ícono del termómetro
// import { FaRegClock } from 'react-icons/fa'; // Importa el ícono del reloj
// import { MdLoyalty } from 'react-icons/md'; // Importa el ícono de la garantía

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">


      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4">
        {/* Información del producto */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4">
          <div className="text-xl font-bold mb-4">Explosion-proof Light</div>
          <div className="text-gray-600 mb-2">Color: Yellow</div>
          <div className="text-gray-600 mb-2">Luminous Flux: 5600lm/11200lm</div>
          <div className="text-gray-600 mb-2">Working Temperature: -40°C to 60°C</div>
          <div className="text-gray-600 mb-2">Color Temperature: 3000K-6500K</div>
          <div className="text-gray-600 mb-2">Input Voltage: AC85-265V</div>
          <div className="text-gray-600 mb-2">Color Rendering Index (CRI): 80</div>
          <div className="text-gray-600 mb-2">Lifespan: 50000 hours</div>
          <div className="text-gray-600 mb-2">IP Rating: IP65</div>
          <div className="text-gray-600 mb-2">Warranty: 5 years</div>
          <div className="text-gray-600 mb-2">Application Area: Zone 1, Zone 2, Zone 21, Zone 22</div>
        </div>

        {/* Iconos */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            {/* <HiOutlineLightBulb className="text-4xl text-yellow-500 mr-4" /> */}
            <div>
              <div className="text-lg font-bold">Lamp Luminous Efficiency</div>
              <div className="text-gray-600">140 lm/w</div>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            {/* <IoIosThermometer className="text-4xl text-red-500 mr-4" /> */}
            <div>
              <div className="text-lg font-bold">Working Temperature</div>
              <div className="text-gray-600">-40°C to 60°C</div>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            {/* <FaRegClock className="text-4xl text-green-500 mr-4" /> */}
            <div>
              <div className="text-lg font-bold">Working Time</div>
              <div className="text-gray-600">50000 hours</div>
            </div>
          </div>
          <div className="flex items-center bg-white shadow-md rounded-lg p-4">
            {/* <MdLoyalty className="text-4xl text-blue-500 mr-4" /> */}
            <div>
              <div className="text-lg font-bold">Warranty</div>
              <div className="text-gray-600">5 years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
