import React from 'react'
import Image from 'next/image'
import seller from "../assets/seller.png"
import Link from 'next/link'


const AdvertisementToContact = () => {
    return (
        <div className='contenedor bg-zinc-800 mt-5 text-white gap-5 py-10 px-5 md:px-30 lg:px-40'>
            <div className="image-text items-center gap-5 flex flex-col md:flex-row">
                <Image className=' image w-[10rem] h-[10rem]' alt='sellerimg' src={seller}></Image>
                <div className="text">
                    <h1 className='text-3xl pb-3 text-center md:text-left'>¿ Quieres publicar tu propiedad ?</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam soluta impedit nihil reprehenderit. Nisi corrupti unde commodi, nobis atque placeat quis. Tenetur, beatae quo magni voluptas necessitatibus sequi perferendis!</p>
                </div>
            </div>
            <div className='flex justify-center pt-5 md:pt-0'>
                <Link href={"/contact"} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 duration-500  py-2.5 text-center mr-2 mb-2 w-40">Contacto</Link>
            </div>
        </div>
    )
}

export default AdvertisementToContact