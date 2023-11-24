import React from 'react'
import { gallery } from '../constant'
import Layout from 'react-masonry-list'
import Gellery1 from "../assets/gallery_1.png"
import Gellery2 from "../assets/gallery_2.jpg"
import Gellery3 from "../assets/gallery_3.png"
import Gellery4 from "../assets/gallery_4.png"
import Gellery5 from "../assets/gallery_5.png"
import Gellery6 from "../assets/gallery_6.jpg"
import Gellery7 from "../assets/gallery_7.png"
import Gellery8 from "../assets/gallery_8.png"
import Gellery9 from "../assets/gallery_9.png"
import Gellery10 from "../assets/gallery_10.png"
export const Gallery = () => {
  return (
    <section className='bg-white'>
        <div className="container">
        <div class="text-center mb-10">
            <h2 class="font-bold text__48">LES AVIS DE NOS UTILISATEURS
            </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center place-content-center">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery1} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery2} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery3} alt="" />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery4} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery5} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery6} alt="" />
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery7} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery8} alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={Gellery9} alt="" />
                </div>
            </div>
        </div>

        </div>
    </section>
  )
}
