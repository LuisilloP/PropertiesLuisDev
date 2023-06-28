import Image from 'next/image'
import React from 'react'
import AdvertisementToContact from '@/components/AdvertisementToContact'
//images
import PropertyForSell from "../../../public/PropertyForSell.jpg"
import Businessmen from "../../../public/businessmen.png"



const page = () => {
    return (
        <div className=' text-zinc-900 text-[14px]    '>
            <div className='h-[5rem] bg-black'></div>
            <div className=''>
                <div className='h-[15rem] p-10 bg-slate-700 '>
                    <h1 className='text-3xl text-center font-bold pb-6  text-slate-50'>Sobre nosotros</h1>
                    <p className=' text-center text-slate-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure id aliquam nobis, veniam,
                        soluta obcaecati perferendis quia pariatur modi hic. Alias perspiciatis iusto sint accusamus
                        dolorem adipisci asperiores deleniti!
                    </p>
                </div>
                <div className='flex flex-col pt-10 md:flex-row gap-10 px-5 '>
                    <Image className=' object-cover max-h-[20rem]   ' alt="image Sell" src={PropertyForSell}></Image>
                    <div className='py-10 px-5'>
                        <h2 className='text-2xl'>Nosotros contamos con </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur magnam, sapiente maiores ut ipsam, commodi atque voluptate illo reprehenderit aut deserunt fugiat error suscipit ullam minima nesciunt tempore cupiditate cum.
                            Aliquam in harum vitae tempore optio qui cum facere neque ipsam laborum voluptatum, eius quasi excepturi sequi quaerat sit placeat, doloremque nostrum aperiam deserunt iste ratione dolorem. Similique, qui optio!
                        </p>
                    </div>
                </div>
                <div className='flex flex-col pt-10 md:flex-row gap-10 px-5 '>
                    <div className='py-10 px-5'>
                        <h2 className='text-2xl'>Somos los mas destacados de la region</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto consequuntur, eum tenetur repudiandae cum enim deleniti, perspiciatis sint vitae ipsam voluptatum beatae non molestiae, accusantium voluptatem aperiam a. Praesentium, ad!
                            Illo distinctio nulla, ut, inventore beatae esse nihil voluptatem numquam minima laborum saepe eveniet! Velit, repellendus harum voluptatem consequuntur facere ipsam neque deserunt dolor ex, animi vel perferendis nulla quaerat?
                        </p>
                    </div>
                    <Image className=' object-cover max-h-[20rem]   ' alt="image Sell" src={Businessmen}></Image>
                </div>
                <section className="mt-10"><AdvertisementToContact></AdvertisementToContact></section>
            </div>
        </div>
    )
}

export default page