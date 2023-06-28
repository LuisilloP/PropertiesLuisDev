"use client"
import React from 'react'
import hamburgerSvg from "../assets/hamburger.svg"
import Image from 'next/image'


const ButtonHamburger = () => {
    const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.preventDefault();

    }
    return (
        <Image alt='hamburger' src={hamburgerSvg} width={20} className='object-cover sm:hidden' onClick={(Event) => { handleClick(Event) }}></Image>
    )
}

export default ButtonHamburger