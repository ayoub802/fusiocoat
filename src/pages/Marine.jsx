import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImage from "../assets/marine.jpg"
import Aero from "../assets/FC-AÉRO.jpg"
import Marin from "../assets/marine_aero.jpg"
import Marin1 from "../assets/marine_aero1.jpg"
import { Footer } from '../components/Footer'
export const Marine = () => {
  return (
    <div className='w-full overflow-hidden bg-black'>
        <Header />
        <div className='mt-[88px] lg:mt-[98px]'>
            <Banner image={BannerImage} chemin="FUSIOCOAT®" title="MARINE"/>
            <section className='bg-white'>
                <div className="container">
                  <h3 class="font-bold text__48 mb-8">FC – MARINE : La gamme de protection marine la plus
                    <br class="hidden sm:block" /> 
                    performante
                  </h3>
                  <div className="mt-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="my-4">
                                <h3 className='font-medium leading-6 mb-4'>
                                  <span className='font-bold text-black'>FC-MARINE POWER</span> est à ce jour l’ultime revêtement protecteur de surface en milieu marin. Composé d’une formulation unique en nanomatériaux fortement résistants aux milieux salins, il forme une barrière solide, transparente et chimiquement durable pour renforcer la résistance chimique des peintures et vernis de surfaces du type gelcoat et prévenir la corrosion des métaux.
                                </h3>
                                <img src={Marin}/> 
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-4">
                                <h3 className='font-medium leading-6 mb-4'>
                                  <span className='font-bold text-black'>FC-MARINE TOP</span> est un revêtement fontionnel de surface de type TOP COAT qui apporte une brillance éclatante, une résistance aux saletés unique et une douceur au toucher incomparable pour les couches de finitions comme le gelcoat. Doté d’une mobilité de surface unique, il peut corriger les rayures mineures et constitue le produit d’entretien référence pour l’entretien de FC-MARINE POWER.
                                </h3>
                                <img src={Marin1}/> 
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
            <Footer />
        </div>
    </div>
  )
}
