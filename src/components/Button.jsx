import React from 'react'

export const Button = ({ title }) => {
  return (
    <button className='inline-block cursor-pointer font-medium text__16 text-Mwhite !rounded-[24px] !border-Mblue bg-Mblue btnClass !py-[14px] uppercase'>{title}</button>
  )
}
