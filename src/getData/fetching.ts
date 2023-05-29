
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



    // .get(UrlImages + `/${urlKey}`, {
    // 	responseType: 'blob',
    // })
    // .then((response) => {
    // 	let idImg = document.getElementById(UrlGetId);
    // 	let imgUrl = URL.createObjectURL(response.data);
    // 	idImg.src = imgUrl;
    // })
    // .catch();
};
