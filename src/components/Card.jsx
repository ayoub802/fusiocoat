import React, { Fragment } from 'react'

export const Card = ({
    items
}) => {
  return (
        <div className="container">
            <button className={'w-full relative'}>
            <img src={items.imageProduct} className='w-full h-[250px] object-cover mb-3 rounded-t-[10px]' alt="" />
            <h4 className='font-bold text__20 mb-2 text-left gap-2'>{items.title}</h4>
            </button>
        </div>
  )
}
