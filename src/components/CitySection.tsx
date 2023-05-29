"use client"
import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import maps from "../assets/maps.svg"
import useOberver from '@/hooks/useOberver'
type Props =
    {
        place: string
        name: string
        ubication: string
        image: StaticImageData
        text: string
        direcction: string
    }

const CitySection = (props: Props) => {
    const { image, place, text, direcction, ubication, name } = props
    const { elementRef, intersecting } = useOberver({
    })

    return (
        <div ref={elementRef} className={`flex flex-col gap-5 pt-10 ${intersecting ? "showIO" : "hiddenIO"} ${direcction == "left" ? "md:flex-row" : "md:flex-row-reverse "}`}>
            <Image src={image} alt={`${place}-image`} className=' image-city w-auto  md:w-[20rem] h-[30rem] object-cover'></Image>
            <div className="text flex flex-col justify-center ">
                <h1 className='text-3xl font-bold tracking-widest'>{place}</h1>
                <p className='pt-2 italic text-sm'>{name}</p>
                <p className=' pt-3 text-lg'>{text}</p>
                <a href={ubication} className='flex w-40  items-center' target='_blank'>
                    <Image src={maps} alt='maps-image-link' className='w-10'></Image>
                    Como llegar ?
                </a>
            </div>
        </div >
    )
}

export default CitySection