import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import BannerImage from "../assets/automobile.jpg"
import Aero from "../assets/FC-AÉRO.jpg"
import Scaled1 from "../assets/scaled1.jpg"
import Scaled2 from "../assets/scaled2.jpg"
import { Footer } from '../components/Footer'
export const Automobile = () => {
  return (
    <div className='w-full overflow-hidden bg-black'>
        <Header />
        <div className='mt-[88px] lg:mt-[98px]'>
            <Banner image={BannerImage} chemin="FUSIOCOAT®" title="AUTOMOBILE"/>
            <section className='bg-white'>
                <div className="container">

                  <div className='row mt-5 items-center'>
                      <div className="col-md-6">
                            <h3 class="font-bold text-[28px] mb-2 text-black">AVANTAGES</h3>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>Protection :</span> Anticorrosion et résistance aux produits chimiques.
                                </h3>
                            </div>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>Esthétique :</span>  Effet déperlant, brillance, profondeur de la couleur, résistance aux petites rayures.
                                </h3>
                            </div>

                            <div className="my-4">
                                <h3 className='font-medium leading-6'>
                                <span className='font-bold text-black'>Entretien :</span> Les lavages sont facilités.
                                </h3>
                            </div>
                      </div>

                      <div className="col-md-5">
                          <h3 className='font-medium leading-7'>
                          Les revêtements céramiques FUSIOCOAT® protègent toutes les surfaces extérieures des voitures contre les agressions environnementales responsables de la dégradation, du ternissement et de l’encrassement excessif de la peinture, du verre, des métaux et des plastiques.
                           Les produits FUSIOCOAT® répondent aux exigences de chacune de ces surfaces en offrant une durabilité inégalée, tant sur le plan de la préservation de l’esthétique que sur celui de la fonctionnalité et du confort d’utilisation.
                         </h3>
                      </div>


                  </div>

                </div>
            </section>
            <Footer />
        </div>
    </div>
  )
}
