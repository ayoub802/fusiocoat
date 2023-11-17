import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { Bag2 } from 'iconsax-react';
export const Header = () => {
    let location = useLocation();
    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [navabarScroll, setnavabarScroll] = useState(false)

    const statatusSet = () => {
        const urlList = [
            "/", "/about", "/careers", '/blog', 'faq'
        ]
        const status = urlList.some(item => location.pathname === item);
        setnavabarScroll(status)
    }

    const stickNavabr = () => {
        if (window.scrollY > 100) {
            setnavabarScroll(true)
        } else {
            statatusSet()
        }
    }

    useEffect(() => {
        statatusSet()
        window.addEventListener('scroll', stickNavabr);
    }, [location])
  return (
    <Fragment>

    <div className={"fixed h-full w-full bg-white z-[99] pt-[100px] menuMobile " + (ToogleMenuResponsive ? "active" : "")}>
        <div className='h-full'>
            <ul className='list-none p-0 m-0 flex items-center flex-wrap gap-4 text-[20px] w-full'>
                <li className='w-full'>
                    <NavLink to="/" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-black'>Home</NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/how-it-works" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-black'>How it works</NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/about" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-black'>About</NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/faq" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-black'>FAQ</NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/contact" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-black'>Contact</NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/booking" className='cursor-pointer font-medium text-[14px] text-Mblack !border-Mblack btnClass hover:bg-Mblack hover:text-Mwhite'>Book Now</NavLink>
                </li>
            </ul>
        </div>
    </div>

    <div className={'fixed py-4 w-full z-[999] left-0 top-0 ' + (navabarScroll && (ToogleMenuResponsive == false) ? "bg-[#010101] " : "bg-Mwhite")}>
        <div className="container">
            <div className='flex justify-between items-center'>


                <NavLink to="/" className=''>
                    {
                        <img src={Logo} className='w-[150px] h-[35px]' alt="" />
                    }

                </NavLink>


                <ul className='list-none p-0 m-0 hidden lg:flex items-center gap-4 text__16'>
                    <li>
                        <NavLink to="/" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/how-it-works" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>FUSIOCOAT®</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>En savoir plus</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>Boutique</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>Devenir partenaire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={'font-medium ' + (navabarScroll && (ToogleMenuResponsive == false) ? "text-Mwhite" : "text-Mblack")}>Mon compte</NavLink>
                    </li>
                </ul>



                <NavLink to="/booking" className="hidden lg:block">
                    <div className="rounded-full justify-center flex items-center relative">
                    <Bag2
                        size="22"
                        color="#FFF"
                        />

                        <span className='w-4 h-4 bg-[#d9534f] rounded-full absolute -top-2 -right-2.5 text-[#fff] text-[10px] flex justify-center items-center'>2</span>
                    </div>
                </NavLink>

                <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"relative px-1 py-1 barIcon w-[30px] h-[30px] cursor-pointer lg:hidden ml-auto " + (ToogleMenuResponsive ? "active" : "")}>
                    <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                    <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                    <div className={!navabarScroll ? "!bg-Mblack" : ToogleMenuResponsive ? "!bg-Mblack" : ""}></div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
  )
}
