import Image from 'next/image'
import React from 'react'

const HeroLanding = () => {
  return (
    <div className=' z-10 text-[#E2E2E2] bg-[#f2ECE4] px-6 relative h-full group w-full flex flex-row '>
    {/* <div className='bg-slate-600 opacity-50'> */}

<div>

        {/* <Image className="absolute mt-12 md:left-20 md:-z-10 opacity-60" src={"/bg-2-no-bg.png"} 
        width={200} height={150} 
        // sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 33vw"
        //  style={{opacity:0.9}}
        alt=""/> */}
     </div>
     {/* </div> */}
    <div className='text-center text-[#E2E2E2] space-y-4 items-center justify-center flex  flex-col md:w-[40%] w-full h-screen'>
    <h4 className='font-bold text-6xl text-[#E2E2E2]'>Protipark Ambiental</h4>
    <div className='text-[#E2E2E2] font-bold  text-3xl flex flex-col'><span className='flex border-2 p-6 w-full justify-center mx-auto font-bold text-3xl'>Inversiones sostenibles</span>
    </div>
    <p className='text-xl w-64 font-bold'>{`"Por una eterna primavera libre de contaminacion"`}</p>
    <span className=' z-20 rounded-full button-hovered px-4 py-3 border-[#a1a1a1] bg-[#E2E2E2] hover:border-none hover:bg-blue-600 hover:font-semibold hover:text-[#fafafa] text-gray-900 font-bold border-2'>CONOCER MÁS</span>
    <span className='italic font-semibold'>Sostenible <span className=''>para tu bolsillo,</span> tu salud y la de tu familia</span>
    </div>
    <div className='w-full h-screen md:h-[80%] bottom-0 md:bottom-20 right-0 absolute '>

    <Image className=' flex  h-screen opacity-90 -z-40' src={"/hero_landing.jpeg"} 
    fill={true}// width={200} height={200} 
    
    // sizes="(max-width: 768px) 100vw, (max-width: 800px) 50vw, 33vw"
    alt=""/>
    </div>
    </div>
  )
}

export default HeroLanding
