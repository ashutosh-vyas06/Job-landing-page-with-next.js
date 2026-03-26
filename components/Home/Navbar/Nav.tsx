"use client"

import { NavLink } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuNetwork } from 'react-icons/lu'
import ThemeToggler from './../../Helper/ThemeToggler';

type props = {
    openNav: () => void;

}

const Nav = ({openNav}:props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler)

    }, []);
    return (
        <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-12vh z-10000 fixed w-full `}>
            <div className="flex items-center- h-full justify-between w-92% mx-4 sm:mx-6 md:mx-8 lg:mx-4 xl:mx-6 my-6">
                <div className="flex items-center sm:space-x-20">
                    {/* Nav Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
                            <LuNetwork className="w-5 h-5 text-white dark:text-black" />
                        </div>
                        <h1 className='text-1xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold'>
                            DevHire
                        </h1>
                    </div>

                    {/* NavLinks */}
                    <div className="hidden lg:flex items-center space-x-10 ">
                        {NavLink.map((link) => {
                            return (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    className='text-base hover:text-cyan-700  dark:text-cyan-200 font-medium transition-all duration-200'>
                                    <p>{link.Lable}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {/* Buttons */}
                <div className=' flex items-center space-x-4'>
                    {/* Login / register buttons */}
                    <button
                        className='
                        px-8 
                        py-2.5 
                        text-xs 
                        sm:text-sm
                        rounded-lg 
                        cursor-pointer
                        bg-gray-100
                         dark:bg-gray-700
                          dark:hover:bg-gray-900
                        hover:bg-gray-300
                        transition-all
                        duration-300
                        '
                    >
                        Login/register
                    </button>
                    {/* Job post buttons */}
                    <button
                        className='
                            px-8 
                            py-2.5
                            text-sm
                            hidden
                            sm:block
                            cursor-pointer
                            rounded-lg
                            bg-cyan-700
                            hover:bg-cyan-900
                            transition-all
                            duration-300
                            text-white
                            '>
                        Job Post
                    </button>
                    {/* Theme Toggler */}
                        <ThemeToggler />
                    {/* Burger Menu*/}
                    <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-black lg:hidden' onClick={openNav} />
                </div>

            </div>
        </div>
    )
}

export default Nav
