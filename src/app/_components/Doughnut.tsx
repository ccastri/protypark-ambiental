// import React from 'react';
// import CircularProgressBar from './ProgressBar';

// const Doughnut = () => {
//   return (
//     <div className='h-full space-y-16 p-8 py-20 flex flex-col bg-[#FaFaFa] text-gray-900 w-screen items-center justify-center'>
//       <h1 className="text-3xl tracking-wide">Aprovechamos las bondades de la naturaleza</h1>
//       <div className="flex sm:flex-row space-y-16 sm:space-y-0 flex-col">

//       </div>
//     </div>
//   );
// }

// export default Doughnut;


import React from 'react';
import CircularProgressBar from './ProgressBar';

const OtherSkills = () => {
  return (
    <div
    id= "graphics"
    className='h-full text-gray-900 space-y-16 p-8 py-20 flex flex-col bg-[#FaFaFa] w-full mx-auto items-center justify-center'>
      <h1 className="text-3xl text-gray-900 tracking-wide">Cuidamos el aire que respiras</h1>
      <div className="flex w-screen sm:flex-row space-y-16 sm:space-y-0 flex-col">
      <CircularProgressBar
          title='Nuestros resultados'
          data={{
            labels: ["Arboles reemplazados", "Pasajeros beneficiados", "Sistemas en funcionamiento"],
            values: [20, 30, 50],
            bgColors: ["#75c0c0", "#ff6384", "#ffcd56"],
          }}
          circleWidth={30}
        />
        <CircularProgressBar
          title='Variables de control'
          data={{
            labels: ["PH", "Temperatura °C", "Radiación", "Foto Periodo (h)", "%Humedad", '%PPM', "%N"],
            values: [5, 27, 29, 16, 10, 18, 20],
            bgColors: ["#0602ff", "#02c4ff", "#f0850a", "#ffcd56", "#bbbbbb", "#eeeeee", "#ee0909"],
          }}
          circleWidth={80}
        />
        <CircularProgressBar
          title='Intercambio de gases'
          data={{
            labels: ["O2 producido (g/mol)", "CO2 asimilado (g/mol)", "%Fosfolipidos", "Biomasa (kg)"],
            values: [5, 15, 25, 30],
            bgColors: ["#8BC34A", "#4CAF50", "#388E3C", "#02c4ff"],
          }}
          circleWidth={50}
        />
      </div>
    </div>
  );
}

export default OtherSkills;