

export interface Property {
    _id: string,
    title: string,
    ubication: string,
    description: string,
    url_img: string[],
    type: string,
    beedrooms?: number,
    toilets?: number,
    light?: string,
    water?: string
    meters: number,
    price: number,
    __v: number
}
export interface InterfaceOptionValues {
    Baños?: string,
    Dormitorios?: string,
    Luz?: string,
    Agua?: string
}
export interface FormData {
    name: string
    mail: string
    message: string
}