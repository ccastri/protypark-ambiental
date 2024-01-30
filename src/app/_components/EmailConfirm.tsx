'use client'

import Image from 'next/image'
import axios from 'axios'


// ... (imports y variables)
// !!!!Este es para el testing de varios usuarios registrandose, loggeandose y a futuro con spark y el socket (Dentro de muy poco :) )

const mockUserProfiles = [
  {
    "Tipo Identificacion": "CC",
    "Identificación": 1107518873,
    "Primer Nombre": "CAMILO",
    "Segundo Nombre": "ANDRES",
    "Primer Apellido": "CASTRILLON",
    "Segundo Apellido": "CORDOVEZ",
    "Salario o IBC": 1160000,
    "Ciudad - Departamento": "CALI (VALLE DEL CAUCA)",
    "Email": "ccastri.dev333@gmail.com",
    "Valor Total": 52900,
    "Link_Planillas": "https://drive.google.com/file/d/1d0uvVrVl4w54YqX93oYNXqJzhMbqvLsH/view?usp=drive_link",
    "Pago_Realizado": "SI",
    "Fecha_Ultimo_Pago": "2023-10-23 00:00:00",
    "Observaciones":"+"
  },
  {
    "Tipo Identificacion": "CC",
    "Identificación": 1107518873,
    "Primer Nombre": "FRANCISCO",
    "Segundo Nombre": "ANDRES",
    "Primer Apellido": "CASTRILLON",
    "Segundo Apellido": "CORDOVEZ",
    "Salario o IBC": 1160000,
    "Ciudad - Departamento": "CALI (VALLE DEL CAUCA)",
    "Email": "ccastri.dev333@gmail.com",
    "Valor Total": 52900,
    "Link_Planillas": "https://drive.google.com/file/d/1d0uvVrVl4w54YqX93oYNXqJzhMbqvLsH/view?usp=drive_link",
    "Pago_Realizado": "SI",
    "Fecha_Ultimo_Pago": "2023-10-23 00:00:00",
    "Observaciones":"+"

  },
  {
    "Tipo Identificacion": "CC",
    "Identificación": 1107518873,
    "Primer Nombre": "PILAR",
    "Segundo Nombre": "CALDERON",
    "Primer Apellido": "CALDERON",
    "Segundo Apellido": "PILAR",
    "Salario o IBC": 1160000,
    "Ciudad - Departamento": "CALI (VALLE DEL CAUCA)",
    "Email": "ccastri.dev333@gmail.com",
    "Valor Total": 52900,
    "Link_Planillas": "https://drive.google.com/file/d/1d0uvVrVl4w54YqX93oYNXqJzhMbqvLsH/view?usp=drive_link",
    "Pago_Realizado": "SI",
    "Fecha_Ultimo_Pago": "2023-10-23 00:00:00",
    "Observaciones":""
  },
  // Otros perfiles...
];

const UserProfileTable = ({ profiles }: any) => {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo Identificación</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Identificación</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor planilla</th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ultimo pago</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vista Previa</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observacion</th>
            {/* ... Agregar más encabezados para otros campos */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {profiles.map((profile: any, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{profile["Tipo_Identificacion"]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{profile["Identificación"]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{profile["Primer_Nombre"]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{profile["Primer_Apellido"]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{`$${profile["Valor_Total"]}`}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap">{`${profile["Fecha_Ultimo_Pago"]}`}</td> */}
              <td className="px-6 py-4  cursor-pointer hover:text-blue-500 hover:underline truncate overflow-ellipsis truncate-link whitespace-nowrap" onClick={()=>  window.open(profile["Link_Planillas"], '_blank')}><div></div>{`${profile["Link_Planillas"]}`}</td>
              <td className="px-6 py-4  cursor-pointer hover:text-blue-500 hover:underline truncate overflow-ellipsis truncate-link whitespace-nowrap">{`${profile["Observaciones"]}`}</td>
              {/* ... Agregar más celdas para otros campos */}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default function Home() {

const mockUserProfilePreview=   {
    "Tipo Identificacion": "CC",
    "Identificación": 1107518873,
    "Primer Nombre": "CAMILO",
    "Segundo Nombre": "ANDRES",
    "Primer Apellido": "CASTRILLON",
    "Segundo Apellido": "CORDOVEZ",

    "Salario o IBC": 1160000,

    "Ciudad - Departamento": "CALI (VALLE DEL CAUCA)",
    "Email": "ccastri.dev333@gmail.com",
    "Valor Total": 52900,
    "Link_Planillas": "https://drive.google.com/file/d/1d0uvVrVl4w54YqX93oYNXqJzhMbqvLsH/view?usp=drive_linkhttps://drive.google.com/file/d/1bPRgDBQGvVL_Ccdsv0LR7_oNICviQ7DH/view?usp=sharing",
    "Pago_Realizado": "SI",
    "Fecha_Ultimo_Pago": "2023-10-23 00:00:00",
    "Observaciones":"+"
  }

// const url='http://127.0.0.1:8000/access-google-drive/10hVrKmMzQ-YumgQVJ3gDq_i9Fv1wdiBp1hPAO7wt2vk'
// const url='http://127.0.0.1:8000/afiliados/72'
const url='http://127.0.0.1:8000/afiliados'
 const accessToken =   "ya29.a0AfB_byCjB3cKqgEoI0RocSdvw-Lfhi3Yoc_AouSEb4TNdgn9eW2oZCtD4XFrx6xEIFgG3svgIVXntK0Q8iWSv44Qen_woqITVeQqX0jI5ByDQvQI2gKDOm2A0dhGq57OGwzmXHOoBfJy45JHYt4KNaz138XPkfPeoZQMaCgYKAcgSARASFQHGX2MisRilPSXk8Q0PilsjPj2cRQ0171"
    const handleClick = async () => {
    try {
      const response = await axios.get(url, {
                // headers: {
          // Authorization: `Bearer ${accessToken}`,
        // },
      });
      console.log(response.data); // Do something with the response if needed
      const users = response.data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (

    <main className="flex min-h-screen flex-col items-center border-2 bg-[#fafafa] justify-between p-8">
      <UserProfileTable profiles={mockUserProfiles} />
      <div className="mt-8 w-auto  flex text-center">
        <input type='text' placeholder="cedula"/>
        <div className="px-4 py-3 bg-blue-500 text-white rounded-full text-center cursor-pointer w-40 m-auto" onClick={handleClick}>+ Observacion</div>
        <div className="px-4 py-3 bg-blue-500 text-white rounded-full text-center cursor-pointer w-40 m-auto" onClick={handleClick}>Enviar correos</div>
        <div className="px-4 py-3 bg-blue-500 text-white rounded-full text-center cursor-pointer w-40 m-auto" onClick={handleClick}>Novedades</div>
      </div>
    </main>
  )
}










