"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import {
    Navigation,
    FreeMode,
    Thumbs,
} from 'swiper';
import { Property } from '@/InterfacesP'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { GetSelectedProperty } from '@/getData/fetching';

function page() {
    const [PropertySelected, setPropertySelected] = useState<Property>()
    const pathname = usePathname();
    const id = pathname.split("/")[2].trim()
    //console.log(id)

    const data = GetSelectedProperty(id)

    useEffect(() => {
        data.then((value) => {
            setPropertySelected(value)

        })
    }, [])

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <section>
            <div className='h-[5rem] bg-black'></div>
            {PropertySelected == undefined ? <div className=' min-h-[50rem]' role="status">
                <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div> :
                <div className="contenedor pt-20 px-5 md:px-20 " >
                    <div className="cont-selected">
                        <div className="cont-img-selected flex gap-3 m-auto">
                            <div className='w-[80vw] h-[20rem] lg:h-[38rem] lg:w-[45rem] xl:w-[50rem] '>
                                <Swiper
                                    //cssMode={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiperSelect"
                                >
                                    {PropertySelected.url_img == undefined ? <></> : PropertySelected.url_img.map((img: string) => (
                                        <SwiperSlide key={img}>
                                            <Image

                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className=' w-full h-[300px] md:h-[600px] object-cover object-center cursor-pointer'
                                                id={`principal${img}`}
                                                src={`https://clever-yoke-cod.cyclic.app/propiedad/get/images/${img}`}
                                                alt="img_house"
                                                loading='lazy'
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className='hidden lg:block '>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={2}
                                    slidesPerView={2}
                                    freeMode={true}
                                    navigation={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    direction="vertical"
                                    className="mySwiperVertical "
                                >
                                    {PropertySelected.url_img.map((img: string) => (
                                        <SwiperSlide key={img}>
                                            <img
                                                id={`second${img}`}
                                                src={`https://clever-yoke-cod.cyclic.app/propiedad/get/images/${img}`}
                                                alt="img_house"
                                                className="secondVertical"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div>
                            <div className="text flex flex-col justify-center ">
                                <div className="">
                                    <h2 className='text-3xl font-bold ' >{PropertySelected.title}</h2>
                                    <p className='pt-2 italic text-sm'>{PropertySelected.ubication}</p>
                                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-48"></hr>
                                    <p className="descripcion-propiedad-select">{PropertySelected.description}</p>
                                </div>
                                <div className="iconos-propiedad flex gap-5 py-4">
                                    <div className="ico-cant">
                                        <p className='font-bold'>
                                            {PropertySelected.type == 'casa' ? "Habitaciones" : "Luz"}
                                        </p>
                                        <p>{PropertySelected.type == 'casa' ? PropertySelected.beedrooms : PropertySelected.light}</p>
                                    </div>
                                    <div className="ico-cant">
                                        <p className='font-bold'>
                                            {PropertySelected.type == 'casa' ? "Baños" : "Agua"}
                                        </p>
                                        <p>{PropertySelected.type == 'casa' ? PropertySelected.toilets : PropertySelected.water}</p>
                                    </div>
                                    <div className="">
                                        <p className='font-bold'>metros</p>
                                        <p>
                                            {PropertySelected.meters}m<sup>2</sup>
                                        </p>
                                    </div>

                                </div>
                                <div className="precio-propiedad flex gap-5">
                                    <p className='font-bold'>Valor:</p><p>${PropertySelected.price.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            }
        </section>
    );
}

export default page;
