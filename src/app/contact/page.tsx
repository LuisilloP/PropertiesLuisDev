"use client"
import FormContact from '@/components/FormContact'
import Image from 'next/image'
import React from 'react'
import dealContact from "../../../public/dealContact.jpg"
const page = () => {
    return (
        <div>
            <div className='h-[5rem] bg-black'></div>
            <div className='min-h-[50rem]'>
                <h1 className='text-3xl text-center font-bold py-10'>Contactanos  !!!</h1>
                <FormContact></FormContact>
                <Image className='w-[45rem] min-h-[25rem] pt-20 mx-auto rounded-sm' src={dealContact} alt='imagen de trato' ></Image>
            </div>
            <div>

            </div>
        </div>
    )
}

export default page