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
import Doughnut from './_components/Doughnut'
import ProductPage from './_components/ProductWeb'
import Slider from './_components/Slider'

const Page = () => {
  // const newClientPlans = plans.filter(plan => plan.isNewClient)[0];
  // console.log(newClientPlans)
  return (
    <div id='landing' className=' -z-10 max-w-screen overflow-x-hidden   text-[#e2e2e2] bg-green-700  '>
      <HeroLanding/>
      <Doughnut/>
      {/* <ProductPage/> */}
      <HostNewClients/>
      <Slider/>
      <Tutorial/>
      <About/>
        <div 
        id="products"
        className="grid grid-cols-1 pb-16 md:grid-cols-2 lg:grid-cols-4 gap-8  pt-20 mx-auto">
          {plans.map((plan, index) => (<PlanCard key={index}  {...plan} />))}
        </div>
      <ContactForm/>
          {/* <NewClientForm /> */}
      

    </div>
  )
}

export default Page


