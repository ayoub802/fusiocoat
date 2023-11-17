import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWork } from '../components/HowItWork'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
    <div className='w-full overflow-hidden bg-black'>
        <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <Hero title="CAR RENTAL"/>
        <HowItWork />
        <Footer />
      </div>
    </div>
    </>
  )
}
