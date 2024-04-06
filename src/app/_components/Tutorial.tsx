import { AirlineSeatFlat, AirlineSeatReclineExtraOutlined, CloudSync, FileCopyOutlined, GrassOutlined, MonetizationOnOutlined, PhoneDisabledOutlined, RecyclingOutlined, SupportAgentOutlined, WindPowerOutlined } from '@mui/icons-material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import React from 'react'

const Tutorial = () => {
  return (
    <div 
    id="services"
    className='flex pb-28 h-full flex-col w-full text-[#E2E2E2]  mx-auto p-6'>
      <h2 className='pb-4 font-bold  text-center text-3xl'>Nuestras lineas de negocio</h2>
      <div className='space-y-28 mx-auto max-w-4xl'>

      <div className='relative  w-full'>
      {/* <span className="text-[120px] right-0 flex items-start justify-end w-full font-semibold opacity-30 mb-20 absolute">
              {"1)"}
            </span> */}
      <GrassOutlined className='opacity-20 justify-end items-end   w-full  flex text-slate-200 absolute' sx={{ width: 150, height:200}}/>
      <h3 className="font-bold py-2 items-end  justify-end text-lg">Cultivo de cepas y diseño de fibroreactores</h3>
      <p>Contamos con guías de acondicionamiento de medios de cultivo 
      desarrolladas por nuestros especialistas en ciencia, tecnología, desarrollo e innovacion en ingenieria
      </p>
      <span className=" font-bold text-xl">¡Te asesoramos para que inicies cuanto antes!</span>
      </div>

      <div className='relative w-full'>
        {/* <span className="text-[120px] right-0 flex items-start justify-end border-2 border-black w-full font-semibold opacity-20 absolute">
                {"2)"}
        </span> */}
      <WindPowerOutlined className='opacity-20 justify-end items-end   w-full  flex text-slate-200 absolute' sx={{ width: 150, height:200}}/>
      {/* <CloudSync className='opacity-20 justify-end items-end   w-full  flex text-slate-200 absolute' sx={{ width: 150, height:200}}/> */}
      <h3 className="font-bold py-2 text-lg">Sistemas de purificación de oxigeno</h3>
      <p>
      Las microalgas cuidan de nuestra salud y son una gran oportunidad que nos brinda la naturaleza para reducir nuestra huella de carbono.
      Durante su ciclo de vida se alimentan del dioxido de carbono y la contaminación de nuestras cuidades y producen oxigeno limpio 
      </p>
      <span className=" font-bold text-xl">¡Te ofrecemos Salud y vida!. ¿Qué esperas?</span>
      </div>

      <div className='relative w-full'>
    
          {/* <span className="text-[120px] right-0 flex   items-start justify-end border-2 border-black w-full font-semibold opacity-10 absolute">
              {"3)"}
            </span> */}
          

      <RecyclingOutlined className='opacity-20 justify-end items-end   w-full  flex text-slate-200 absolute' sx={{ width: 150, height:200}}/>
      <h3 className="font-bold py-2 text-lg">Aprovechamiento de residuos</h3>
      <p>Nuestro modelo de negocio satisface los parametros de la economía 
      circular, por lo el desperdicio de nuestro producto sirve como 
      materia prima para diversos procesos productivos
      </p>
      <span className=" font-bold text-xl">comestibles, cosméticos y mucho más... ¡PROXIMAMENTE!</span>
      </div>
      </div>
{/* <div className='relative space-y-20 text-base flex  justify-center mt-36 max-w-4xl mx-auto flex-col '>

  <span className='flex-col'><AirlineSeatReclineExtraOutlined sx={{ width: 80, height:80}} className='text-[#E2E2E2]'/> Dile adios a largas horas de espera</span>

          <span className='flex-col'><PhoneDisabledOutlined sx={{ width: 80, height:80}}className='text-[#E2E2E2]]'/> Olvidate de pasar horas en el telefono</span>
        
      <span className='flex-col'><SupportAgentOutlined  sx={{ width: 80, height:80}} className='text-[#E2E2E2]]'/> Comunicate desde tu casa o trabajo o en cualquier momento por WhatsApp</span>

        
    </div> */}
    </div>
  )
}

export default Tutorial
