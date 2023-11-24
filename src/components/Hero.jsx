import React from 'react'
import HeroBanner from "../assets/banner.png"
export const Hero = ({title, sub })  => {
  return (
        <section className='relative overflow-hidden min-h-[calc(100vh_-_88px)] lg:min-h-[calc(100vh_-_98px)] bg-[#010101] flex flex-wrap pb-0'>
        <img src={HeroBanner} className='absolute left-0 top-0 w-full h-full object-cover object-top hidden md:block' alt="" />
        <div className="relative z-[2] w-full container flex justify-start items-center">
            <div class="row">
                <div class="col-md-8">
                    <p class="text__18 text-Mgreen mb-2">FUSIOCOAT</p>
                    <h1 class="font-bold text__48 text-Mwhite mb-2">La solution ultime pour protéger votre voiture<br class="hidden xl:block" />et lui donner un nouveau look</h1>
                    <p class="text__18 text-[#A3A3A3] mb-2">With our car rental services, you can experience the ultimate 
                    <br class="hidden xl:block" /> convenience and freedom of exploring your destination at your 
                    <br class="hidden xl:block" /> own pace.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
