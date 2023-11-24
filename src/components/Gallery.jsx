import React from 'react'
import { gallery } from '../constant'
import Layout from 'react-masonry-list'
import Gellery1 from "../assets/zit pic.png"
import Gellery2 from "../assets/deco pic.png"
import Gellery3 from "../assets/gel pic.png"
import Gellery4 from "../assets/deco pic (1).png"
import Gellery5 from "../assets/gallery_5.png"
import Gellery6 from "../assets/gallery_6.jpg"
import Gellery7 from "../assets/gallery_7.png"
import Gellery8 from "../assets/gallery_8.png"
import Gellery9 from "../assets/gallery_9.png"
import Gellery10 from "../assets/gallery_10.png"
import ScrollReveal from 'scrollreveal'

export const Gallery = () => {

    ScrollReveal().reveal('.gallery_1', { delay: 250, duration: 500, })
    ScrollReveal().reveal('.gallery_2', { delay: 500, duration: 550, })
    ScrollReveal().reveal('.gallery_3', { delay: 750, duration: 600, })
  return (
    <section className='bg-black'>
        <div className="container">
        <div class="text-center mb-10">
            <h2 class="font-bold text__48 text-white">LES AVIS DE NOS UTILISATEURS
            </h2>
        </div>



        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_1" src={Gellery1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_2" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_1" src={Gellery2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_2" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_1" src={Gellery3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_2" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_1" src={Gellery4} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_2" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>


        </div>  
    </section>
  )
}
