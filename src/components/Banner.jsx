import React from 'react'

export const Banner = ({ image, title, chemin}) => {
  return (
    <section className="relative min-h-[300px] lg:min-h-[500px] flex justify-center items-center">
        <img src={image} className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div className="absolute left-0 top-0 w-full h-full bgWrapHead"></div>
        <div className="text-center relative z-2 w-full container">
            <p className="text-Mgreen mb-2">{chemin}</p>
            <h2 className="font-bold text__48 text-Mwhite">{title}</h2>
        </div>
    </section>
  )
}
