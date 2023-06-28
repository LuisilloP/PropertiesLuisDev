
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { navNames } from "../../components/dataNavNames"

import React, { useEffect, useState } from 'react'
import hamburgerSvg from "../../assets/hamburger.svg"
import Image from 'next/image'


const Header = () => {
    const router = useRouter()
    const [btn, setBtn] = useState(false)
    const [scroll, setScroll] = useState(0)
    const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent> | React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setBtn(!btn)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })
    }, [scroll])
    function RouteClick(route: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        router.push(route)
        setBtn(!btn)
    }

    return (
        <header className={` font-open bold font-semibold  ${scroll > 0 ? "text-gray-600" : "text-gray-50"} `}>
            <div className={`fixed z-50 ${scroll > 0 ? "h-[4rem] bg-white shadow-sm" : "h-[5rem] bg-gradient-to-b from-neutral-900 "} ease-in duration-500  w-full 
             flex items-center justify-between px-5 `} >
                <a className=' flex z-50'>Logo</a>
                <ul className={`hidden sm:flex  flex-col sm:flex-row gap-5 ${btn ? "" : ""}`}>
                    {
                        navNames.map(nav =>
                        (
                            <li key={nav[0]}><Link href={nav[1]}>{nav[0]}</Link></li>
                        ))
                    }
                </ul>
                <Image alt='hamburger' src={hamburgerSvg} width={20} className={`object-cover sm:hidden cursor-pointer ${scroll > 0 ? "" : "invert"}`} onClick={(Event) => { handleClick(Event) }}></Image>
            </div>
            <div id="menuMobile" className={` z-40 fixed p-10  left-0  ease-out duration-500 ${scroll > 0 ? "h-[4rem] bg-white shadow-sm" : "h-[5rem] bg-gradient-to-b from-neutral-900 "}   top-0 w-[70%] h-screen  sm:hidden   ${btn ? "" :
                " left-[-100%]"}`}>
                <div className=' flex w-full pt-10 h-[100vw]'>
                    <ul className={` flex flex-col gap-3 ${btn ? "" : ""}`}>
                        {
                            navNames.map(nav =>
                            (
                                <li key={nav[0]}><a onClick={(Event) => RouteClick(nav[1], Event)}>{nav[0]}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header