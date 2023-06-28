import React from "react"
import PropertyContextProvider from "../functions/PropertyContextCall"
import Image from 'next/image'
import PropertyCard from '@/components/PropertyCard'
//images 
import propertiesPrincipal from "../assets/propertiesPrincipal.jpg"
import OvalleImage from "../assets/Ovalle.png"
import SerenaImage from "../assets/LaSerena.jpg"
import CoquimboImage from "../assets/Coquimbo.jpg"
import CitySection from '@/components/CitySection'
import AdvertisementToContact from '@/components/AdvertisementToContact'
export default function Home() {

  return (
    <main >
      <div className='principal  text-zinc-700 text-[14px]'>
        <Image className=' h-[23rem] sm:h-[30rem] lg:h-[45rem] object-cover duration-500 ' src={propertiesPrincipal} alt="text" ></Image>
        <section className="contenedor flex flex-col gap-5  px-5 md:px-40 lg:px-60">
          <div className="texto_intro pt-20 flex gap-5 flex-col ">
            <h1 className='text-3xl text-center font-bold'>Venta de Propiedades en la cuarta region </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
              alias eius saepe et? Quibusdam facere quis, dolorum repellendus
              aperiam architecto saepe quod laborum earum ut dolore esse, ipsa, illo
              sed.
            </p>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptates aut laudantium, corrupti, recusandae minima ad voluptatem
            dolor ipsum praesentium expedita, accusamus eius impedit. Ipsum eius
            incidunt suscipit molestias eligendi? Nesciunt, obcaecati. Fugiat quia
            laudantium, molestiae perspiciatis sequi perferendis quam praesentium
            voluptatem explicabo, velit aliquid incidunt odit doloremque sint atque
            commodi magnam ab dolorum autem eligendi aut, possimus asperiores
            voluptates. Modi veniam tenetur temporisantium, debitis distinctio quia
            sed quos asperiores sint, velit et non autem excepturi numquam. Eos
            minima voluptatibus dolore sequi illum eius consequatur esse nam!
            Doloremque maxime cumque minus eligendi quo ipsam magni voluptatem nisi
            vitae aspernatur ex minima tempora, aperiam fugiat laboriosam
          </p>
        </section>
        <section className='contenedor flex flex-col gap-5 pt-10 px-5 md:px-30 lg:px-40'>
          <h1 className='text-3xl text-center font-bold'>Mira nuestras Propiedades!!!</h1>
          <div>
            <PropertyContextProvider>
              <PropertyCard firstCall={true} cant={3}></PropertyCard>
            </PropertyContextProvider>
          </div>
        </section>
        <section >
          <AdvertisementToContact></AdvertisementToContact>
        </section>
        <section className=' pt-10 px-5 md:px-30 lg:px-40'>
          <h1 className='text-4xl font-bold text-center'>Los mejores lugares de la region !!!</h1>
          <div className='container-places flex flex-col gap-5'>
            <CitySection
              place='Ovalle'
              name='Plaza de armas Ovalle'
              ubication='https://goo.gl/maps/o5wL9TgCw2Byic8R8'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam soluta impedit nihil reprehenderit. Nisi corrupti unde commodi, nobis atque placeat quis. Tenetur, beatae quo magni voluptas necessitatibus sequi perferendis!'
              image={OvalleImage}
              direcction='left'
            ></CitySection>
            <CitySection
              place='La Serena'
              name='Avenida del mar'
              ubication='https://goo.gl/maps/FdWsSvwyLfv1ZNir5'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatibus saepe. Assumenda, quos nam! Atque laudantium impedit libero iure inventore tenetur, iste, voluptatem cupiditate quasi aut explicabo a ea sapiente?'
              image={SerenaImage}
              direcction='right'
            ></CitySection>
            <CitySection
              place='Coquimbo'
              name='Isla Damas'
              ubication='https://goo.gl/maps/fv6pjd7AGNdzVeLFA'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus quod corrupti maxime, ab id vero ipsa consectetur molestias ut tenetur voluptatum mollitia, quia autem debitis similique nesciunt! Quidem, tempora?'
              image={CoquimboImage}
              direcction='left'
            ></CitySection>
          </div>
        </section>
      </div>
    </main >
  )
}
