import { NavLink } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { LuNetwork } from 'react-icons/lu'

const Nav = () => {
    return (
        <div className="transition-all duration-200 h-12vh z-10000 fixed w-full ">
            <div className="flex items-center- h-full justify-between w-92% mx-15 my-6">
                <div className="flex items-center sm:space-x-20">
                    {/* Nav Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center flex-col">
                            <LuNetwork className="w-5 h-5 text-white" />
                        </div>
                        <h1 className='text-1xl hidden sm:block md:text-2xl text-cyan-800 font-bold'>
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
                                    className='text-base hover:text-cyan-700 font-medium transition-all duration-200'>
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

                        {/* Burger Menu*/}

                </div>

            </div>
        </div>
    )
}

export default Nav
