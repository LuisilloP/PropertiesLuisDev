import { Dispatch, SetStateAction, createContext } from 'react'
import { Property } from "@/InterfacesP";

interface typesProperty {
    properties: Property[],
    setProperties: Dispatch<SetStateAction<[]>>;
}

const ContextProperty = createContext<typesProperty>(
    {
        properties: [],
        setProperties: () => { }
    }
)
export default ContextProperty