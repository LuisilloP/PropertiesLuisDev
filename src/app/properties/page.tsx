"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import PropertyContextProvider from '@/functions/PropertyContextCall'
import PropertyCard from '@/components/PropertyCard'
import SelectOptionProperty from '@/components/SelectOptionProperty'
import { showProperties } from "@/getData/fetching";
import OptionContext from "../../functions/ContextOption"
import Context from '@/functions/ContextProperty'
import { Property } from '@/InterfacesP'
type Props = {}


const page = (props: Props) => {
    const [select, setSelect] = useState("terreno-propiedad")
    const [newProperties, setNewProperties] = useState<Property[]>([])
    const [optionValues, setOptionValues] = useState<Object>({ manzana: "sss" })
    const handleChangeSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setSelect(event.target.value)
        const propertyEvent = await showProperties(event.target.value)
        setNewProperties(propertyEvent)
        console.log(optionValues)
    }

    return (
        <OptionContext.Provider value={{ optionValues, setOptionValues }}>
            <PropertyContextProvider>
                <div className='h-[5rem] bg-black'></div>
                <div>
                    <h2 className="text-5xl pt-10 text-center font-bold ">Todas nuestras propiedades 🏠</h2>
                </div>
                <div className="container-properties flex flex-col md:flex-row pt-20 px-5 md:px-20 gap-7">
                    <div className=' md:w-[15%]'>
                        <div>
                            <label>Tipo</label>
                            <select onChange={(event) => { handleChangeSelect(event) }} id='select-type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
                                <option defaultChecked value="terreno-propiedad">Casas y Terrenos</option>
                                <option value="propiedad">Casas</option>
                                <option value="terreno" >Terrenos</option>
                            </select>
                            {select == "propiedad" ?
                                <div className='flex gap-5'>
                                    <SelectOptionProperty nameLabel='Dormitorios' arrayOption={["2", "3", "4"]}></SelectOptionProperty>
                                    <SelectOptionProperty nameLabel='Baños' arrayOption={["1", "2", "3"]}></SelectOptionProperty>
                                </div> : select == "terreno" ?
                                    <div className='flex gap-5'>
                                        <SelectOptionProperty nameLabel='luz' arrayOption={["si", "no", "factible"]}></SelectOptionProperty>
                                        <SelectOptionProperty nameLabel='Agua' arrayOption={["si", "no", "factbile"]}></SelectOptionProperty>
                                    </div>

                                    : <></>}
                        </div>
                    </div>
                    <div className='md:w-[85%]'>
                        <PropertyCard cant={6} newSearch={newProperties.length == 0 ? undefined : newProperties}></PropertyCard>
                    </div>
                </div>

            </PropertyContextProvider>
        </OptionContext.Provider>
    )
}

export default page