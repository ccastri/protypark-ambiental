import { AccountBalanceWalletOutlined, 
  Diversity3Outlined, 
  ElderlyOutlined, 
  Grass, 
  HealthAndSafetyOutlined, 
  LocalAtmOutlined,
   LocalHospital,
   MonetizationOnOutlined, 
   PaymentOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
interface Plan {
    title: string;
    firstMonthValue: string;
    icon: React.ReactNode; // Assuming you'll pass a Material-UI icon component
    savingsValue: string;
    bgImage:string;
    isNewClient:boolean;
  }
  export const plans:Plan[] = [
    {
      title: "Cepas para cultivo",
      firstMonthValue: "desde 25ml",
      icon: <Grass sx={{ width: 60, height:60}}/>,
      savingsValue: "¡PROXIMAMENTE!",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
    {
      title: "Fibroreactor Manual",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
    {
      title: "Fibroreactor semi automatico",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <Diversity3Outlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },

    {
      title: "Biomasa x Kg",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
    {
      title: "Sistema de purificacion de aire para interiores",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
    {
      title: "Sistema de purificacion para empresas",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
    {
      title: "Sistema de purificacion para exteriores",
      firstMonthValue: "¡PROXIMAMENTE!",
      icon: <HealthAndSafetyOutlined  sx={{ width: 60, height:60}}/>,
      savingsValue: "20%",
      bgImage:"escalacion_de_cultivo.png",
      isNewClient:false
    },
  ];

const PlanCard: FC<Plan> = ({ title, firstMonthValue, icon, savingsValue, bgImage,  }) => {
const router = useRouter()
  return (
    <div className="group h-auto z-30 flex items-center my-auto justify-center button-hovered shadow-lg border-2 text-center rounded-lg   mx-auto ">
      
        <div className='max-w-1/4 max-h-1/2 p-6  px-12 relative   group-hover:bg-[#E2E2E2] h-auto border-2'>
      <Image className="absolute -z-10 opacity-40  rounded-lg " src={`/${bgImage}`} fill={true} alt=""/>
    <h3 className="text-xl text-[#E2E2E2] group-hover:text-gray-900   font-semibold   mb-4">{title}</h3>
    <div className="flex flex-col opacity-100 items-center z-30 mb-4">
      <span className="mr-2 text-gray-900">Valor Primer Mes:</span>
      <span className="text-[#E2E2E2] group-hover:text-green-600 text-xl font-semibold">{firstMonthValue}</span>
    </div>
    <div className="flex items-center group-hover:text-gray-600 justify-center mb-4">
      {icon}
    </div>
    <div className="flex flex-col items-center mb-4">
      <span className="mr-2 text-[#E2E2E2] text-lg font-semibold group-hover:text-gray-900">Total Ahorro:</span>
      <span className="text-[#E2E2E2] group-hover:text-green-500 text-lg font-semibold">{savingsValue}</span>
    </div>
    <div className='flex flex-col space-y-4'>

    <span  className='border-green-500 border-2 z-40 px-4 py-3 text-[#E2E2E2] group-hover:text-gray-900 font-semibold rounded-full button-hovered hover:bg-green-500'>
      Comprar
    </span>
    <span 
    onClick={()=>router.push("/#contact-form")}
    className='border-green-500 border-2 px-4 py-3  text-[#E2E2E2] group-hover:text-gray-900  font-semibold rounded-full button-hovered hover:bg-green-500'>
      Más info
    </span>
    </div>
        </div>

        
  </div>
  )
}

export default PlanCard
