
'use client'
import React, {useEffect} from 'react'
import LoginForm from '../_components/LoginForm'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()

  return (
    <div className="w-screen h-screen">
      <LoginForm/>
    </div>
  )
}

export default Page
