"use client"
import { showProperties } from "@/getData/fetching";
import React, { useEffect, useState } from "react";
import ContextProperty from "./ContextProperty";
type Props =
    {
        children: React.ReactNode
    }

const PropertyContext = ({ children }: Props) => {
    const [properties, setProperties] = useState<[]>([])
    useEffect(() => {
        // console.log(properties)
        if (properties.length == 0) {
            (async () => {
                const properties = await showProperties()
                // console.log(properties);
                setProperties(properties)

            })()
        }
    }, [])
    return (
        <ContextProperty.Provider value={{ properties, setProperties }}>
            {children}
        </ContextProperty.Provider>
    )
}

export default PropertyContext