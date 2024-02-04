import Hero from '@/app/_components/Iphone';
import { ChangeCircleOutlined } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden h-full'>
      <div className='  
      relative flex flex-col w-screen items-center  h-screen bg-[#E2E2E2] mx-auto  pl-8'>
        {/* <div className='w-9/12 flex flex-col space-y-8 mx-auto'>
          <h1 className='tracking-wide text-2xl text-gray-900 text-center px-6 font-semibold'>
            ¡La mas alta tecnologia para mejorar el aire que respiran los ciudadanos de Medellin!
          </h1>
          <div className='grid grid-cols-3 gap-4 px-4'>
            <span>Medicion y reporte en tiempo real de CO2 Y otros contaminantes en el aire</span>
            <span>Monitoreo de las impresiones de los usuarios de transporte publico acerca de nuestro sistema</span>
            <span>Plataforma para alertas de mantenimiento enviadas por usuarios</span>
          </div>
        </div> */}
       {/* <div> */}
       <span className='pt-20 z-10'>Paraderos Autosostenibles</span>
        <Hero/>
      {/* </div> */}
      </div>
     <div>
        <> 
        
        {/* SECOND COMPONENT */}
        <div className='h-screen w-screen relative overflow-hidden bg-green-200 flex '>
        <Image className='rounded-r-md opacity-50 ' src={"/busstop.png"} alt='' width={1400} height={1200} />
        <div className=' grid grid-cols-3 absolute h-screen my-auto px-16 w-full mx-auto '>
            
        <div className='button-hovered flex flex-col items-center text-lg  font-bold text-gray-800 justify-center'>
            <span className='text-gray-800 mr-32 md:m-0 md:text-6xl text-3xl'>CO2</span>
        <ChangeCircleOutlined 
        className='items-center w-full  mr-32  md:m-0 justify-center text-green-700'
        sx={{width:40, height:40}}
        />
        <span className='text-blue-800  mr-32 md:m-0 md:text-6xl text-3xl'>O2</span>
        <div className='h-8 text-gray-900 absolute md:ml-40  w-auto  flex '><>{`°°°°°°°°  `}</> <div className='rounded-full ml-1 h-4 border-2 bg-gray-900 w-4  flex mt- items-end '> </div></div>
            </div >
            <div className='ml-32 space-y-4 flex flex-col'>

        <h2 className=' text-gray-800 w-64 opacity-0  mt-56 md:opacity-100 text-xl font-bold text-center'>Sistema inteligente de purificacion de aire impulsado por microalgas e inteligencia artificial</h2>
        <span className='py-4 z-20 md:px-6 opacity-0 md:opacity-100 font-bold text-center rounded-xl hover:border-none hover:bg-green-900 hover:text-[#e2e2e2] mx-12 border-2 button-hovered'>
            Conocer Más</span>
            </div>
        
        <div className='h-screen flex  flex-col justify-evenly items-center '>

        <div className=' flex flex-col w-auto'>
        <h2 className=' text-gray-800 w-64  text-xl font-bold'>Escanea el QR y reporta el si el color indica estado para cambio </h2>
        <div className='flex items-center justify-center'>
            <div className="h-10 w-10 text-center text-gray-900 font-semibold text-lg my-auto pt-1 justify-center bg-green-200"><>1</></div>
            <div className="h-10 w-10 text-center text-gray-900 font-semibold text-lg my-auto pt-1 justify-center bg-green-400"><>2</></div>
            <div className='flex-col relative '>
                <div className='flex'>
                    <div className="h-10 w-10 text-center text-gray-900 font-semibold text-lg my-auto pt-1 justify-center bg-green-600"><>3</></div>
                    <div className="h-10 w-10 text-center text-gray-900 font-semibold text-lg my-auto pt-1 justify-center bg-green-800"><>4</></div>
                </div>
            <span className='absolute w-20 text-center font-bold'>Cambio</span>
            </div >
        </div>
        </div>
        
        <div className='h-36 w-36 border-2'><Image src={"/qr.png"} width={250} height={250} alt=""/></div>
        
        <h2 className=' text-gray-800 w-64  left-6 bottom-20 text-xl font-bold'>Las algas están limpiando la ciudad de todos. ¡Ayudanos a cuidarlas! </h2>
        </div>
        </div >
      </div></>

      {/*  WHITE BG COMPONENT*/}
        <div className=' h-auto gap-4 bg-[#fafafa] py-12 px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            <div className='flex flex-col space-y-6  '>
            <h2 className='text-3xl font-bold'>Ciudades y Comunidades Sostenibles</h2>
        <p>Nuestro sistema monitorea las condiciones ambientales, es capaz de adaptarse y garantizar condiciones de optimas de cultivo mientras convierte el CO2 del ambiente en aire limpio</p>
        <span className='px-6 mx-8 text-center py-4 border-2 bg-[#e2e2e2] hover:bg-gray-900 hover:text-[#e2e2e2] border-gray-900 rounded-full cursor-pointer'>Ver Más</span>
            </div >
            <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl font-bold'>Educación y Sentido de Pertenencia</h2>
        <p>Ofrecemos capacitacion para que los usuarios del sistema de transporte entiendan los beneficios del cultivo sostenible, se involucren en su cuidado y el del medio ambiente en la ciudad</p>
        <span className='px-6 mx-8 text-center py-4 border-2 text-[#E2E2E2] bg-gray-900 rounded-full cursor-pointer hover:text-gray-900 hover:border-2 hover:border-gray-900 hover:bg-[#e2e2e2] '>Comenzar</span>
            </div>
            <div className='flex flex-col space-y-6'>
            <h2 className='text-3xl font-bold'>Desarrollo Tecnológico e Innovación</h2>
        <p>Conoce a Plankton, el asistente virtual entrenado por nuestros expertos en cultivo de microalgas. Es el guardian del cultivo y el guia de nuevos granjeros entusiastas</p>
        <span className='px-6 mx-8 text-center py-4 border-2 bg-[#e2e2e2] hover:bg-gray-900 hover:text-[#e2e2e2] border-gray-900 rounded-full cursor-pointer'>Chatea con Plankton</span>
        </div>
      </div>
     
      {/* THIRD COMPONENT */}
<>
<div className='h-full py-8 w-screen relative overflow-hidden bg-gray-800 md:flex flex-col grid grid-cols-1  '>
<Image className='rounded-r-md opacity-40 bg-gray-800 absolute' src={"/busstopnight.png"} alt='' width={1400} height={1200} />

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-16 md:justify-center h-full md:h-1/2 z-30 text-white items-center font-bold'>


    
    
    {/* <h2></h2> */}
    {/* <div className='rounded-full h-72 rotate-45 ml-3 pt-20 mt-[99%] flex transform transition-all opacity-60 w-full trans border-l-2 bg-gradient-to-br from-gray-800 to-gray-100'/> */}

    <div className='group button-hovered relative w-full flex md:justify-between flex-col  mt-44 z-30  '>
    <div className='bg-red-900 rounded-full hidden h-72 md:flex  -z-10 -mt-20 transform -rotate-45 transition-all absolute opacity-40 button-hovered hover:opacity-60 w-full  trans border-l-2'/>
        <div className=' h-56 rounded-md absolute opacity-60 w-full    '/>
            <h2 className='w-64 pb-4 z-20 md:ml-12'>Monitoreo de reacciones e impacto social</h2>
            <div className=' z-20 opacity-0 md:text-center group-hover:opacity-100 flex flex-col'>
                <p className=''>Emociones</p>
                <p className=''>App en Tiempo Real</p>
                <p className=''>Interacciones con la app</p>
                <p className=' md:mx-auto w-44'>Tiempo de pantalla activa en la app</p>
            </div>
        </div>
    <h2></h2>
    <div className='group button-hovered relative w-full flex  flex-col md:mt-44  items-end md:items-center   z-30  '>
    <div className='bg-red-900 rounded-full h-72 md:flex hidden  -z-10 -mt-20 transform -rotate-45 transition-all absolute opacity-40 button-hovered hover:opacity-60 w-full  trans border-l-2'/>
        <div className=' h-56 rounded-md absolute opacity-60 w-full    '/>
            <h2 className='md:w-64 w-52 pb-4  items-end z-20 ml-12'>Monitoreo de reacciones e impacto social</h2>
            <div className=' z-20 opacity-0 md:text-center mr-5 md:mr-0 items-start md:items-center group-hover:opacity-100 flex flex-col'>
                <p className=''>Emociones</p>
                <p className=''>App en Tiempo Real</p>
                <p className=''>Interacciones con la app</p>
                <p className=' md:mx-auto w-44'>Tiempo de pantalla activa en la app</p>
            </div>
        </div>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-16 md:justify-center w-full h-1/2 z-30 text-white items-start font-bold'>

{/* <h2>Sistema de medicion de concentracion de gases</h2> */}
<h2></h2>
<div className='group button-hovered relative w-full  flex md:justify-between flex-col  z-30  '>
    <div className='bg-red-900 rounded-full hidden h-72 md:flex  -z-10 -mt-20 transform -rotate-45 transition-all absolute opacity-40 button-hovered hover:opacity-60 w-full  trans border-l-2'/>
        <div className=' h-56 rounded-md absolute opacity-60 w-full  items-start flex  '/>
            <h2 className='w-64 pb-4 z-20 md:ml-12'>Monitoreo de reacciones e impacto social</h2>
            <div className=' z-20 opacity-0 md:text-center  group-hover:opacity-100 flex flex-col'>
                <p className=''>Emociones</p>
                <p className=''>App en Tiempo Real</p>
                <p className=''>Interacciones con la app</p>
                <p className=' md:mx-auto w-44'>Tiempo de pantalla activa en la app</p>
            </div>
        </div>
        
        <h2></h2>

   <div className='group button-hovered relative w-full flex items-end md:justify-between flex-col  z-30  '>
    <div className='bg-red-900 rounded-full h-72 hidden md:flex  -z-10 -mt-20 transform -rotate-45 transition-all absolute opacity-40 button-hovered hover:opacity-60 w-full  trans border-l-2'/>
        <div className=' h-56 rounded-md absolute opacity-60 w-full    '/>
            <h2 className='w-52 md:w-64 pb-4 z-20 md:ml-12'>Monitoreo de reacciones e impacto social</h2>
            <div className=' z-20 opacity-0 md:text-center mr-5 md:mx-auto md:items-center group-hover:opacity-100 flex flex-col'>
                <p className=''>Emociones</p>
                <p className=''>App en Tiempo Real</p>
                <p className=''>Interacciones con la app</p>
                <p className=' md:mx-auto w-44'>Tiempo de pantalla activa en la app</p>
            </div>
        </div>

</div>
</div>

    

</>
     </div>
    </div>
  );
};

export default Page;
