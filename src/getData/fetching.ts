

import { FormData } from '../InterfacesP';
export const showProperties = async (type?: string) => {
    const response = await fetch("https://clever-yoke-cod.cyclic.app/propiedad/mostrarpropiedadesPrincipal",
        {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tipo: type == undefined ? "terreno-propiedad" : type })

        })
    if (!response.ok) { return "error" }
    const data = await response.json();
    return data
};
export const GetSelectedProperty = async (id?: string) => {
    const response = await fetch("https://clever-yoke-cod.cyclic.app/propiedad/mostrarpropiedad",
        {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id: id })

        })
    if (!response.ok) { return "error" }
    const data = await response.json();
    return data
};
export const sendForm = (formData: FormData): Promise<Response> => {

    const { name, mail, message } = formData

    return fetch('https://formsubmit.co/ajax/trabajoluisaraya@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            mail: mail,
            message: message
        })
    })
        .then((response) => response.json())
        .catch(error => {
            console.error(error);
            // Volver a llamar a fetchData después de cierto tiempo con los mismos parámetros
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(sendForm(formData));
                }, 2000); // Esperar 2 segundos antes de volver a llamar
            });
        });
}