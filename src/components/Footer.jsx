import { Facebook, Instagram, Youtube } from 'iconsax-react'
import React from 'react'
import Logo from "../assets/logo.png"

export const Footer = () => {
  return (
    <section class="pb-6 bg-Mblack">
        <div class="container">
            <div class="mb-10 gap-y-8 row">
                <div class="col-md-3">
                    <img src={Logo} className='w-[150px] h-[35px] mb-2' alt="" />
                    <p class="text__16 text-[#D4D4D4] mb-4">Revêtements céramiques pour voitures, avions, bâteaux, vitrages</p>
                    <div class="flex items-center gap-3">
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                        <Facebook
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                        <Instagram
                            size="18"
                            color="#FFF"
                            />
                        </a>
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                            <Youtube
                            size="18"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>

                    </div>
                </div>
                <div class="col-6 col-md-2 offset-md-1">
                    <h5 class="font-medium text-[#A3A3A3] text__16 mb-3">NAVIGATION</h5>
                    <div class="flex flex-wrap gap-3 font-medium text__16">
                        <a class="inline-block w-full text-Mwhite" href="/blog">ACCUEIL</a>
                        <a class="inline-block w-full text-Mwhite" href="/about">EN SAVOIR PLUS</a>
                        <a class="inline-block w-full text-Mwhite" href="/careers">AUTOMOBILE</a>
                        <a class="inline-block w-full text-Mwhite" href="/contact">AÉRONAUTOQUE</a>
                        <a class="inline-block w-full text-Mwhite" href="/contact">MARINE</a>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <h5 class="font-medium text-[#A3A3A3] text__16 mb-3">MENU</h5>
                    <div class="flex flex-wrap gap-3 font-medium text__16">
                        <a class="inline-block w-full text-Mwhite" href="/blog">En savoir plus</a>
                        <a class="inline-block w-full text-Mwhite" href="/about">Boutique</a>
                        <a class="inline-block w-full text-Mwhite" href="/careers">Devnire partenaire</a>
                        <a class="inline-block w-full text-Mwhite" href="/contact">Contactez-vous</a>
                        <a class="inline-block w-full text-Mwhite" href="/contact">Mentions légales</a>
                        <a class="inline-block w-full text-Mwhite" href="/contact">Conditons générales de vente</a>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <h5 class="font-medium text-[#A3A3A3] text__16 mb-3">INFORMATIONS</h5>
                    <div class="flex flex-wrap gap-3 font-medium text__16">
                        <a class="inline-block w-full text-Mwhite" href="/privacy">42 Rue Georges Besse, 30000 Nîmes, France</a>
                        <a class="inline-block w-full text-Mwhite" href="/terms">info@fusiocoat.com</a>
                    </div>
                </div>
                <div class="col-6 col-md-2">
                    <h5 class="font-medium text-[#A3A3A3] text__16 mb-3">NOS PRODUITS</h5>
                    <div class="flex flex-wrap gap-3 font-medium text__16">
                        <a class="inline-block w-full text-Mwhite" href="/privacy">FC-ONE ULTIMATE</a>
                        <a class="inline-block w-full text-Mwhite" href="/terms">FC-ONE SMART</a>
                        <a class="inline-block w-full text-Mwhite" href="/terms">FC-BOOST</a>
                        <a class="inline-block w-full text-Mwhite" href="/terms">FC-GLASS</a>
                        <a class="inline-block w-full text-Mwhite" href="/terms">FC-TRIM</a>
                    </div>
                </div>
                {/* <div class="col-md-4">
                    <h5 class="font-medium text-[#A3A3A3] text__16 mb-3">Link</h5>
                    <div class="flex items-center gap-3">
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                        <Facebook
                            size="20"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                        <Instagram
                            size="20"
                            color="#FFF"
                            />
                        </a>
                        <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                            <Youtube
                            size="20"
                            color="#FFF"
                            variant="Bold"
                            />
                        </a>

                    </div>
                </div> */}
            </div>
            <div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-y-2 items-center px-4 py-2 bg-[#262626] rounded-full">
                <p class="text-center text__14 text-[#A3A3A3] sm:!order-1 order-2">© 2023 FUSIOCOAT® WHD AGENCY.</p>
                <div class="flex items-center justify-center sm:justify-end gap-6 order-1 sm:!order-2">
                    <a class="inline-block text__16 text-Mwhite flex-shrink-0" href="/privacy">Privacy Policy</a>
                    <a class="inline-block text__16 text-Mwhite flex-shrink-0" href="/terms">Term &amp; Conditioner</a>
                </div>
            </div>
       </div>
   </section>
  )
}
