import React, { useState } from 'react'
import Pattern from "../assets/patern.svg"
import { Button } from './Button'
import Select from 'react-dropdown-select';
export const HomeContact = () => {

    const [selectValues, setSelectValues] = useState('')
    const options = [
        {
          id: 1,
          name: "Leanne Graham"
        },
        {
          id:  2,
          name: "Ervin Howell"
        }
      ];
  return (
    <section class="bg-Mgreen relative overflow-hidden">
        <img src={Pattern} class="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div class="text-center relative z-2 container">
            <p class="text__18 mb-2">NEWSLETTER</p>
            <h2 class="font-bold text__48 mb-8">POUR TOUTE QUESTION MERCI DE NOUS  <br />CONTACTER VIA LE FORMULAIRE CI-DESSOUS</h2>
            <div class="flex items-center gap-2 justify-center mb-3">
               <Select placeholder='Choisir *'  options={options} labelField="name" valueField="id" onChange={(values) => setSelectValues(values)} className='sm:min-w-[870px] px-3 w-full  border border-solid !border-Mblack !rounded-[24px] h-[52px] text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent  shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control'/>

            </div>
            <div class="flex items-center gap-2 justify-center mb-3">
                <div class="flex items-center gap-2 px-3 w-full sm:w-auto sm:min-w-[435px] border border-solid !border-Mblack rounded-[24px]">
                    <input placeholder="Nom* et Prénom" type="text" class="h-[52px] px-0 text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent border-none shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control" />
                </div>
                <div class="flex items-center gap-2 px-3 w-full sm:w-auto sm:min-w-[435px] border border-solid !border-Mblack rounded-[24px]">
                    <input placeholder="Société (si applicable)" type="text" class="h-[52px] px-0 text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent border-none shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control" />
                </div>
            </div>
            <div class="flex items-center gap-2 justify-center mb-3">
                <div class="flex items-center gap-2 px-3 w-full sm:w-auto sm:min-w-[435px] border border-solid !border-Mblack rounded-[24px]">
                    <input placeholder="Email*" type="text" class="h-[52px] px-0 text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent border-none shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control" />
                </div>
                <div class="flex items-center gap-2 px-3 w-full sm:w-auto sm:min-w-[435px] border border-solid !border-Mblack rounded-[24px]">
                    <input placeholder="Téléphone" type="text" class="h-[52px] px-0 text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent border-none shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control" />
                </div>
            </div>
            <div class="flex items-center gap-2 justify-center mb-3">
                <div class="flex items-center gap-2 px-3 w-full sm:w-auto sm:min-w-[870px] border border-solid !border-Mblack rounded-[24px]">
                    <textarea placeholder="Merci d'écriture votre message*" type="text" class="h-[152px] px-0 text__14 !text-Mblack placeholder:text-[#525252] outline-none bg-transparent border-none shadow-none focus:outline-none focus:bg-transparent focus:border-none focus:shadow-none form-control" />
                </div>
            </div>

            <Button title="envoyer"/>
        </div>
    </section>
  )
}
