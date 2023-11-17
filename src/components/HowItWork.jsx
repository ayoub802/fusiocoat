import React from 'react'
import Item1 from "../assets/how_work1.svg"
import Item2 from "../assets/how_work2.svg"
import Item3 from "../assets/how_work3.svg"
import Item4 from "../assets/how_work4.svg"
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
                <img src={Item1} class="mb-4 mx-auto" alt="" />
                    <h5 class="font-bold text__20 mb-2">Pick Location</h5>
                    <p class="text__14 text-[#525252]">We do things smarter, not harder, with grace and gratitude.</p>
            </div>
        <div class="relative px-4">
            <img src={Item2} class="mb-4 mx-auto" alt="" />
                <h5 class="font-bold text__20 mb-2">Pick Your Car</h5>
                <p class="text__14 text-[#525252]">Take a look at availableTeslas, their features&amp; pricing</p>
        </div>
        <div class="relative px-4">
            <img src={Item3} class="mb-4 mx-auto" alt="" />
            <h5 class="font-bold text__20 mb-2">Confirmation</h5>
            <p class="text__14 text-[#525252]">Just verify your driver's license, add a payment methodand you're good to go</p>
        </div>
        <div class="relative px-4">
            <img src={Item4} class="mb-4 mx-auto" alt="" />
            <h5 class="font-bold text__20 mb-2">Start Driving</h5>
            <p class="text__14 text-[#525252]">Charging, insurance and roadside assistance are already included in the price</p>
        </div>
        </div>
        </div>
    </section>
  )
}
