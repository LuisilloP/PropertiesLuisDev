import React from 'react'
import { navNames } from "../../components/dataNavNames"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=' bg-neutral-900 min-h-[5rem] mt-10'>

            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className='flex gap-5 items-center text-white '>
                        Logo
                    </a>
                    <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-5 md:pt-0">
                        {
                            navNames.map(nav =>
                            (
                                <li key={nav[0]}><Link href={nav[1]}>{nav[0]}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default Footer