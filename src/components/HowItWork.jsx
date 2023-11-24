import React from 'react'
import Item1 from "../assets/how_work1.svg"
import Item2 from "../assets/how_work2.svg"
import Item3 from "../assets/how_work3.svg"
import Item4 from "../assets/how_work4.svg"
import { useTranslation } from 'react-i18next'
export const HowItWork = () => {
    const [t, i18n] = useTranslation("global");

  return (
    <section className='bg-white'>
        <div class="container">
            <div class="text-center mb-10">
                <p class="mb-2 text__16">{t('HOW IT WORKS')}</p>
                <h2 class="font-bold text__48">Pourquoi choisir notre solution<br class="hidden sm:block" /> pour votre automobile
                </h2>
            </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 text-center sideLine">
            <div class="relative px-4">
                <img src={Item1} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                    <h5 class="font-bold text__20 mb-2 capitalize">{t("EASY APPLICATIONS")}</h5>
                    <p class="text__14 text-[#525252]">{t('A single coating for a maximum efficiency')}</p>
            </div>
        <div class="relative px-4">
            <img src={Item2} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                <h5 class="font-bold text__20 mb-2 capitalize">{t('SAFE TO USE')}</h5>
                <p class="text__14 text-[#525252]">{t("Non-toxic and eco-friendly products")}</p>
        </div>
        <div class="relative px-4">
            <img src={Item3} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 class="font-bold text__20 mb-2 capitalize">{t('DURABILITY')}</h5>
            <p class="text__14 text-[#525252]">{t('Unsurpassed chemical and weather resistance')}</p>
        </div>
        <div class="relative px-4">
            <img src={Item4} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 class="font-bold text__20 mb-2 capitalize">{t('AFTER SALE')}</h5>
            <p class="text__14 text-[#525252]">{t("Shipping within 24 h – Happy or refunded – Immediate support")}</p>
        </div>
        </div>
        </div>
    </section>
  )
}
