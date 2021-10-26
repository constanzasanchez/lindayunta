//Ver si esta funciona porque no puedo ver el stock
const finalizarCompra = async () => {

    const itemsToMP = cart.map( (prod) => {
        return {
            title: prod.nombre,
            img: "",
            category_id: prod.id,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.precio
        }
    })

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
                method: 'POST',
                headers: {
                    Authorization: "Bearer TEST-530625010370198-052019-70dec8c67253a7ded8355f1a098731e3-418556460"
                },
                body: JSON.stringify({
                    items: itemsToMP,
                    back_urls: {
                        success: window.location.href,
                        failure: window.location.href
                    }

                })
            })
    const data = await response.json()

    window.location.replace(data.init_point)
}