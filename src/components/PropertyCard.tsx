"use client"
import React, { useContext, useEffect, useState } from 'react'
import { showProperties } from "../getData/fetching"
import { Property } from '@/InterfacesP'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectFade, Autoplay } from 'swiper';
import Image from 'next/image';
import Context from '@/functions/ContextProperty';
import ContextProperty from '@/functions/ContextProperty';

type Props =
    {
        cant: number
        next?: number
        newSearch?: Property[]
    }

const PropertyCard = (props: Props) => {
    const { cant, next, newSearch } = props

    const { properties, setProperties } = useContext(ContextProperty)
    let propertyesCard = properties
    if (newSearch != undefined) {
        propertyesCard = newSearch
    }
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {propertyesCard.length === 0 ? <div>"to do Loader..."</div> : propertyesCard.slice(0 || next, cant).map((property, i) => (
                <div key={property._id} className=' rounded overflow-hidden shadow-lg'>
                    <Swiper
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard, EffectFade, Autoplay]}
                        className="mySwiper"
                        navigation={true}

                        autoplay={{
                            delay: 2500,
                        }}
                    >
                        {property.url_img.map((img) => (
                            <SwiperSlide key={img}>
                                <Image

                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className=' w-full h-[300px] object-cover object-center cursor-pointer'
                                    id={`principal${img}`}
                                    src={`https://clever-yoke-cod.cyclic.app/propiedad/get/images/${img}`}
                                    alt="img_house"
                                    loading='lazy'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='info py-5 flex px-2 flex-col gap-3'>
                        <p className='text-[17px] font-bold'>{property.title}</p>
                        <p className='italic'>{property.ubication}</p>
                        <p >{property.description.length >= 185
                            ? `${property.description.slice(0, 180)}...`
                            : property.description}</p>
                        <div className='flex justify-between pt-3'>
                            <div className='type flex gap-3 '>
                                {property.type === "casa" ?
                                    <><p><span className=' font-bold'>Dormitorios</span>: {property.beedrooms}</p>
                                        <p><span className=' font-bold'>Baños</span>: {property.toilets}</p></>
                                    : <><p><span className=' font-bold'>Luz</span>: {property.light}</p>
                                        <p><span className=' font-bold'>Agua</span>:{property.water}</p></>}
                            </div>
                            <p><span className=' font-bold'>Precio</span>: ${property.price.toLocaleString()}</p>
                        </div>

                    </div>

                </div>))}

        </div>

    )
}

export default PropertyCard