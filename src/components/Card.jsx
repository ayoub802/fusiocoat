import React, { Fragment } from 'react'

export const Card = ({
    items
}) => {
  return (
        <div className="container">
            <button className={'w-full relative'}>
            <img src={items.imageProduct} className='w-full h-[450px] object-cover rounded-t-[10px]' alt="" />
            <div className='p-2 bg-Mgreen'>
              <h4 className='font-bold text-[18px] mb-2 text-center gap-2'>{items.title}</h4>

            </div>
            </button>
        </div>
  )
}
