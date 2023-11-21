import React from 'react'

export const Banner = ({ image, title, chemin}) => {
  return (
    <section class="relative min-h-[300px] lg:min-h-[500px] flex justify-center items-center">
        <img src={image} class="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div class="absolute left-0 top-0 w-full h-full bgWrapHead"></div>
        <div class="text-center relative z-2 w-full container">
            <p class="text-Mgreen mb-2">{chemin}</p>
            <h2 class="font-bold text__48 text-Mwhite">{title}</h2>
        </div>
    </section>
  )
}
