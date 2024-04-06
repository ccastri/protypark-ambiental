
'use client'
import NewClientForm from '@/app/_components/NewClientForm';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()

  return (
    <div className="w-screen h-screen">
      <NewClientForm/>
    </div>
  )
}

export default Page
