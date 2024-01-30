import Image from 'next/image'
import React from 'react'

const HeroLanding = () => {
  return (
    <div className='mt-14   bg-[#f2ECE4] px-6 md:relative h-screen w-full flex flex-row '>
    {/* <div className='bg-slate-600 opacity-50'> */}

    <Image className="absolute mt-12 left-20  opacity-50" src={"/bg-2-no-bg.png"} 
     width={200} height={150} 
     // sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 33vw"
    //  style={{opacity:0.9}}
     alt=""/>
     {/* </div> */}
    <div className='text-center space-y-4 items-center justify-center flex  flex-col md:w-[40%] w-full h-[50%] md:h-screen'>
    <h4 className='text-black font-bold'>Seguridad Social para todos</h4>
    <div className='text-green-800  font-bold  text-3xl flex flex-col'><span className='text-green-600 font-bold text-xl'>¡AFILIATE HOY! Y disfruta de todos los beneficios que pagar EPS tiene para ti Desde</span>
    $99.999</div>
    <p>Pagar pension no es más una obligación</p>
    <span className=' z-20 rounded-full text-gray-600 button-hovered px-4 py-3 border-[#a1a1a1]  hover:border-none hover:bg-blue-600 hover:font-semibold hover:text-[#fafafa] border-2'>AFILIATE YA</span>
    <span className='italic'>Beneficios a <span className='underline'>un solo click</span> desde la palma de tu mano</span>
    </div>
    <div className='md:w-[60%] w-full h-[40%] md:h-[70%] bottom-0 md:bottom-20 right-0 absolute '>

    <Image src={"/hero_landing-no-bg.png"} 
    fill={true}// width={200} height={200} 
    sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 33vw"
    alt=""/>
    </div>
    </div>
  )
}

export default HeroLanding
