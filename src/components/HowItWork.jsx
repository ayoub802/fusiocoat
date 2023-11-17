import React from 'react'
import Item1 from "../assets/how_work1.png"
import Item2 from "../assets/how_work2.png"
import Item3 from "../assets/how_work3.png"
import Item4 from "../assets/how_work4.png"
export const HowItWork = () => {
  return (
    <section className='bg-white'>
        <div class="container">
            <div class="text-center mb-10">
                <p class="mb-2 text__16">HOW IT WORKS</p>
                <h2 class="font-bold text__48">Introducing your New Favorite <br class="hidden sm:block" /> Car Rental Experience
                </h2>
            </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 text-center sideLine">
            <div class="relative px-4">
                <img src={Item1} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                    <h5 class="font-bold text__20 mb-2 capitalize">EASY APPLICATIONS</h5>
                    <p class="text__14 text-[#525252]">A single coating for a maximum efficiency</p>
            </div>
        <div class="relative px-4">
            <img src={Item2} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                <h5 class="font-bold text__20 mb-2 capitalize">SAFE TO USE</h5>
                <p class="text__14 text-[#525252]">Non-toxic and eco-friendly products</p>
        </div>
        <div class="relative px-4">
            <img src={Item3} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 class="font-bold text__20 mb-2 capitalize">DURABILITY</h5>
            <p class="text__14 text-[#525252]">Unsurpassed chemical and weather resistance</p>
        </div>
        <div class="relative px-4">
            <img src={Item4} class="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 class="font-bold text__20 mb-2 capitalize">AFTER SALE</h5>
            <p class="text__14 text-[#525252]">Shipping within 24 h – Happy or refunded – Immediate support</p>
        </div>
        </div>
        </div>
    </section>
  )
}
