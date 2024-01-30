import { AirlineSeatFlat, AirlineSeatReclineExtraOutlined, FileCopyOutlined, MonetizationOnOutlined, PhoneDisabledOutlined, SupportAgentOutlined } from '@mui/icons-material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import React from 'react'

const Tutorial = () => {
  return (
    <div className='flex h-full flex-col max-w-4xl mx-auto p-6'>
      <h2 className='text-gray-600 pb-4 font-bold  text-center text-3xl'>¿Quieres Comenzar?</h2>
      <div className='space-y-6'>

      <div>
      <ConnectWithoutContactIcon className='text-green-600' sx={{ width: 80, height:80}}/>
      <h3 className="font-bold py-2 text-lg">Contactanos</h3>
      <>Escribiendonos a Whatsapp es la forma mas rápida de contactar a un asesor.
        También puedes diligenciar el formulario y acelerar el proceso aun más
      </>
      </div>

      <div>
      <FileCopyOutlined className='text-gray-600' sx={{ width: 80, height:80}}/>
      <h3 className="font-bold py-2 text-lg">Envianos tu informacion</h3>
      <>Hazlo desde cualquier lugar y en cualquier momento
      el sistema trabaja 24/7 para nuestros clientes. Envianos los archivos adjuntos por Whatsapp o al correo electrónico de la compañia 
      </>
      </div>

      <div>
      <MonetizationOnOutlined className='text-green-600' sx={{ width: 80, height:80}}/>
      <h3 className="font-bold py-2 text-lg">Contactanos</h3>
      <>El pago también lo puedes realizar en linea. Usa tu canal favorito y envianos el soporte de confirmación
      </>
      </div>
      </div>
<div className='space-y-2 flex pt-6 flex-col'>

      <span className='flex-col'><AirlineSeatReclineExtraOutlined className='text-blue-500'/> Dile adios a largas horas de espera</span>
      <span className='flex-col'><PhoneDisabledOutlined className='text-blue-500'/> Olvidate de pasar horas en el telefono</span>
      <span className='flex-col'><SupportAgentOutlined className='text-blue-500'/> Comunicate desde tu casa o trabajo o en cualquier momento por WhatsApp</span>
</div>
    </div>
  )
}

export default Tutorial
