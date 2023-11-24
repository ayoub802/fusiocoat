import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWork } from '../components/HowItWork'
import { Footer } from '../components/Footer'
import { Summury } from '../components/Summury'
import { HomeContact } from '../components/HomeContact'
import { Card } from '../components/Card'
import { product } from '../constant'
import { Gallery } from '../components/Gallery'

export const Home = () => {
  return (
    <>
    <div className='w-full overflow-hidden bg-black'>
        <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <Hero title="CAR RENTAL"/>
        <HowItWork />
        <Summury />
        <section className='bg-white'>
          <div className="container">
              <div class="text-center mb-10">
                      <h2 class="font-bold text__48">UN CHOIX DE CÉRAMIQUES POUR <br class="hidden sm:block" /> PROFESSIONNELS & NOVICES
                      </h2>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-3">
                      {
                        product.map((item, index) => (
                          <Card items={item} key={index}/>
                        ))
                      }
                  </div>
          </div>
        </section>
        <Gallery />
        <HomeContact />
        <Footer />
      </div>
    </div>
    </>
  )
}
