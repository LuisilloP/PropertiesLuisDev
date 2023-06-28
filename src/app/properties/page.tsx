"use client"
import React, { useContext, useEffect, useState } from 'react'
import PropertyContextProvider from '@/functions/PropertyContextCall'
import PropertyCard from '@/components/PropertyCard'
import SelectOptionProperty from '@/components/SelectOptionProperty'
import { showProperties } from "@/getData/fetching";
import OptionContext from "../../functions/ContextOption"

import { Property } from '@/InterfacesP'
import ContextProperty from '@/functions/ContextProperty'


const page = () => {
    const emptyObject: Record<string, never> = {};
    const [optionValues, setOptionValues] = useState(emptyObject)
    const [select, setSelect] = useState("terreno-propiedad")
    const [newProperties, setNewProperties] = useState<Property[]>([])
    const { properties } = useContext(ContextProperty)
    //testBrain
    const [houseProperties, setHouseProperties] = useState<Property[]>([])
    const [landProperties, setLandProperties] = useState<Property[]>([])
    const [firstCall, setFirstCall] = useState(true)
    useEffect(() => {

        const callProperty = async (type: string) => {
            const data = await showProperties(type)
            if (type == "propiedad")
                setHouseProperties(data)

            if (type == "terreno")
                setLandProperties(data)

        }


        //console.log(Object.entries(optionValues))
        if (houseProperties.length == 0)
            callProperty("propiedad")

        if (landProperties.length == 0)
            callProperty("terreno")
        const lengthOption = Object.keys(optionValues).length
        const FilteredProperty: React.SetStateAction<Property[]> = []
        const selectValue = (document.querySelector("#select-type") as HTMLInputElement).value

        if (selectValue == "propiedad") {
            if (lengthOption !== 0) {
                houseProperties.forEach((property) => {
                    let cheker = 0;
                    //console.log(property)
                    for (const [key, value] of Object.entries(optionValues)) {
                        const toilet = property.toilets as number;
                        const beedrooms = property.beedrooms as number;
                        if (key == "Baños") {
                            if (toilet >= +value)
                                cheker++
                        }
                        if (key == "Dormitorios") {
                            if (beedrooms >= +value)
                                cheker++
                        }
                    }
                    //console.log(cheker)
                    if (lengthOption <= cheker) {
                        FilteredProperty.push(property)
                    }
                })
                setNewProperties(FilteredProperty)
            }
        }
        if (selectValue == "terreno") {
            if (lengthOption !== 0) {
                landProperties.forEach((property) => {
                    let cheker = 0
                    for (const [key, value] of Object.entries(optionValues)) {
                        const light = property.light as string;
                        const water = property.water as string;
                        if (key == "Luz") {
                            if (light == value)
                                cheker++
                        }
                        if (key == "Agua") {
                            if (water == value)
                                cheker++
                        }
                    }
                    if (lengthOption == cheker) {
                        FilteredProperty.push(property)
                    }
                })
                setNewProperties(FilteredProperty)
            }
        }

    }, [optionValues])

    const handleChangeSelect = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionValues({})
        event.preventDefault()
        setSelect(event.target.value)
        //console.log(event.target.value)
        setFirstCall(false)
        if (event.target.value == "propiedad") {
            setNewProperties(houseProperties)
        } else if (event.target.value == "terreno") {
            setNewProperties(landProperties)
        } else {
            setFirstCall(true)
            setNewProperties(properties)
        }
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
                                        <SelectOptionProperty nameLabel='Luz' arrayOption={["si", "no", "factible"]}></SelectOptionProperty>
                                        <SelectOptionProperty nameLabel='Agua' arrayOption={["si", "no", "factible"]}></SelectOptionProperty>
                                    </div>

                                    : <></>}
                        </div>
                    </div>
                    <div className='md:w-[85%] min-h-[50rem] '>
                        <PropertyCard cant={6} firstCall={firstCall} newSearch={newProperties.length == 0 ? undefined : newProperties}></PropertyCard>
                    </div>
                </div>


            </PropertyContextProvider>
        </OptionContext.Provider>
    )
}

export default page