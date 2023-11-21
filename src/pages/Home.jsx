import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWork } from '../components/HowItWork'
import { Footer } from '../components/Footer'
import { Summury } from '../components/Summury'
import { HomeContact } from '../components/HomeContact'

export const Home = () => {
  return (
    <>
    <div className='w-full overflow-hidden bg-black'>
        <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <Hero title="CAR RENTAL"/>
        <HowItWork />
        <Summury />
        <HomeContact />
        <Footer />
      </div>
    </div>
    </>
  )
}
