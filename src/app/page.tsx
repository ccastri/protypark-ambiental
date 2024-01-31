'use client'
// import Image from 'next/image'
import React, { useState } from 'react'
import HeroLanding from './_components/HeroLanding'
import HostNewClients from './_components/HostNewClients'
import Tutorial from './_components/Tutorial'
import About from './_components/About'
import ContactForm from './_components/ContactForm'
import PlanCard, { plans } from './_components/PlanCard'
import NewClientForm from './_components/NewClientForm'

const Page = () => {
  // const newClientPlans = plans.filter(plan => plan.isNewClient)[0];
  // console.log(newClientPlans)
  return (
    <div id='landing' className='space-y-10   text-[#e2e2e2] bg-gray-700  '>
      <HeroLanding/>
      <HostNewClients/>
      <Tutorial/>
      <About/>
      <ContactForm/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-20 mx-auto">
          {plans.map((plan, index) => (<PlanCard key={index}  {...plan} />))}
        </div>
          <NewClientForm />
      

    </div>
  )
}

export default Page


