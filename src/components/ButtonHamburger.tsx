"use client"
import React from 'react'
import hamburgerSvg from "../assets/hamburger.svg"
import Image from 'next/image'
type Props = {}

const ButtonHamburger = (props: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        event.preventDefault();
        console.log("ola")
    }
    return (
        <Image alt='hamburger' src={hamburgerSvg} width={20} className='object-cover sm:hidden' onClick={(Event) => { handleClick(Event) }}></Image>
    )
}

export default ButtonHamburger