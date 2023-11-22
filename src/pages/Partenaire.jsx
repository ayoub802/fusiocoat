import React from 'react'
import BannerImage from "../assets/partenaire_banner.jpg"
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { PartnerContact } from '../components/PartnerContact'
import { Footer } from '../components/Footer'
export const Partenaire = () => {
  return (
    <div className='w-full overflow-hidden bg-black'>
      <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
         <Banner image={BannerImage} chemin="Acceuil" title="NOUS REJOINDRE"/>
         <PartnerContact />

         <Footer /> 
      </div>
    </div>
  )
}
