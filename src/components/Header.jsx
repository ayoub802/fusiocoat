import React, { Fragment, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from "../assets/logo.png"
import Eng from "../assets/english.png"
import fr from "../assets/french.png"
import { ArrowDown2, Bag2 } from 'iconsax-react';
import { useTranslation } from 'react-i18next'
import { CartScreen } from './CartScreen'
export const Header = () => {
    let location = useLocation();
    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [navabarScroll, setnavabarScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isDrop, setIsDrop] = useState(false);
    const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];
    const [openCart, setOpenCart] = useState(false)

    const [SelectOption, setSelectOption] = useState('fr')
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

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

    const toggleDropdown = () => {
        setIsDrop(!isDrop);
    };

    const onOptionClicked = (value) => {
        setSelectOption(value);
        setIsDrop(false)
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
                    <NavLink to="/booking" className='cursor-pointer font-medium text-[14px] text-Mwhite !border-Mblack btnClass hover:bg-Mblack hover:text-Mwhite'>Book Now</NavLink>
                </li>
            </ul>
        </div>
    </div>

    <div className={'fixed py-4 w-full z-[999] left-0 top-0 bg-[#010101]'}>
        <div className="container">
            <div className='flex justify-between items-center'>


                <NavLink to="/" className=''>
                    {
                        <img src={Logo} className='w-[150px] h-[35px]' alt="" />
                    }

                </NavLink>


                <ul className='list-none p-0 m-0 hidden lg:flex items-center gap-4 text__16'>
                    <li>
                        <NavLink to="/" className={'font-medium text-Mwhite'}>{t('Accueil')}</NavLink>
                    </li>
                    <li className='flex items-center gap-2 cursor-pointer relative' onClick={() => {setIsOpen(!isOpen); setIsOpen1(false); setIsOpen2(false)}}>
                        <button  className={'font-medium text-Mwhite'} >FUSIOCOAT®</button>
                        <ArrowDown2
                        size="18"
                        color="#FFF"
                        variant="Bold"
                        />

                        {
                            isOpen && (
                                <ul className='bg-black text-Mgreen rounded-sm absolute top-8 w-full'>
                                    <NavLink to={'/automobile'} className='text-[13px] font-semibold  transition-all'>
                                        <li className='py-3 px-3 border-b border-[#ccc]'>
                                                {t('Automobile')}
                                        </li>
                                    </NavLink>
                                    <NavLink to={'/aeronautique'} className='text-[13px] font-semibold  transition-all'>
                                        <li className='py-3 px-3 border-b border-[#ccc]'>
                                            {t('Aéronautique')}
                                        </li>
                                    </NavLink>
                                    <NavLink to={"/marine"} className='text-[13px] font-semibold  transition-all'>
                                        <li className='py-3 px-3 border-b border-[#ccc]'>
                                            {t('Marine')}
                                        </li>
                                    </NavLink>
                                </ul>
                            )
                        }

                    </li>

                    <li className='flex items-center gap-2 cursor-pointer relative' onClick={() => {setIsOpen1(!isOpen1); setIsOpen(false); setIsOpen2(false)}}>
                        <button  className={'font-medium text-Mwhite'} >{t('En savoir plus')}</button>
                        <ArrowDown2
                        size="18"
                        color="#FFF"
                        variant="Bold"
                        />

                        {
                            isOpen1 && (
                                <ul className='bg-black text-Mgreen rounded-sm absolute top-8 w-72'>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                      {t('Qu’est ce qu’un revêtement céramique ?')}
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                      {t('Les revêtements céramiques Fusiocoat')}
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                      {t('Comment appliquer Fusiocoat ?')}
                                    </h2>
                                </li>
                                </ul>
                            )
                        }
                    </li>

                    <li className='flex items-center gap-2 cursor-pointer relative' onClick={() => {setIsOpen2(!isOpen2); setIsOpen(false); setIsOpen1(false)}}>
                        <button to="/faq" className={'font-medium text-Mwhite'}>{t('Boutique')}</button>
                        <ArrowDown2
                        size="18"
                        color="#FFF"
                        variant="Bold"
                        />

                        {
                            isOpen2 && (
                                <ul className='bg-black text-Mgreen rounded-sm absolute top-8 w-[150px]'>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                      FC-ONE ULTIMATE
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                      FC-GLASS
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                    FC-BOOST
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                    FC-ONE SMART
                                    </h2>
                                </li>
                                <li className='py-3 px-3 border-b border-[#ccc]'>
                                    <h2 className='text-[13px] font-semibold  transition-all'>
                                    FC-TRIM
                                    </h2>
                                </li>
                                </ul>
                            )
                        }
                    </li>

                    <li>
                        <NavLink to="/partner" className={'font-medium text-Mwhite'}>{t('Devenir partenaire')}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={'font-medium text-Mwhite'}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={'font-medium text-Mwhite'}>{t('Mon compte')}</NavLink>
                    </li>
                </ul>

                 

                 <div className='flex items-center gap-6'>
                        <button className="hidden lg:block" onClick={() => setOpenCart(!openCart)}>
                            <div className="rounded-full justify-center flex items-center relative">
                            <Bag2
                                size="22"
                                color="#FFF"
                                />

                                <span className='w-4 h-4 bg-[#d9534f] rounded-full absolute -top-2 -right-2.5 text-[#fff] text-[10px] flex justify-center items-center'>2</span>
                            </div>
                        </button>
                        {
                            SelectOption == 'fr'
                            ?
                                <button onClick={() => {handleChangeLanguage("en"); setSelectOption("Eng")}} className='cursor-pointer'>
                                  <img src={Eng} className='w-5 h-5'/>
                                </button>
                            :
                            <button onClick={() => {handleChangeLanguage("fr"); setSelectOption("fr")}} className='cursor-pointer'>
                              <img src={fr} className='w-5 h-5'/>
                            </button>
                        }

                 </div>
                
                  {/* {
                    openCart && (
                        <> */}
                        <div className={`fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity ${!openCart ? "hidden" : "visible"}`}></div>
                
                        <div className="fixed  overflow-hidden ">
                            <div className="absolute  overflow-hidden">
                                <div className={`pointer-events-none fixed inset-y-0 ${!openCart ? "-right-[100%] transition-all duration-1000" : "right-[0%] transition-all duration-400"} flex max-w-full pl-10`}>
                    
                                <div className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" onClick={() => setOpenCart(false)} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span className="absolute -inset-0.5"></span>
                                            <span className="sr-only">Close panel</span>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            </button>
                                        </div>
                                        </div>
                        
                                        <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                                                </div>
                        
                                                <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">Throwback Hip Bag</a>
                                                    </h3>
                                                    <p className="ml-4">$90.00</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>
                        
                                                    <div className="flex">
                                                    <button type="button" className="font-medium text-black">Remove</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </li>
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                                                </div>
                        
                                                <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">Medium Stuff Satchel</a>
                                                    </h3>
                                                    <p className="ml-4">$32.00</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">Blue</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>
                        
                                                    <div className="flex">
                                                    <button type="button" className="font-medium text-black">Remove</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                        
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>$262.00</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                            Checkout
                                        </a>
                                        </div>
                                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or <button type="button" className="font-medium text-black"> Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                      {/* </>
                    )
                  } */}

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
