//const precioOriginal = 13999;
//const descuento = 15;

//const porcentajePago = 100 - descuento;
//const precioFinal = (precioOriginal * porcentajePago ) / 100;

//console.log(`El precio original de tu producto es $${precioOriginal}, tiene un descuento del ${descuento}% por lo que su precio final es: $${precioFinal}`);

function calculaPrecioFinal(precio, descuento) {
    const porcentajePago = 100 - descuento;
    const precioFinal = (precio * porcentajePago) / 100;

    return precioFinal;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice"); // Llama elemento del HTML que corresponde al inputPrice
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount"); // Llama al elemento del HTML que corresponde al inputDiscount
    const discountValue = inputDiscount.value;

    const precioConDescuento = calculaPrecioFinal(priceValue, discountValue); // Se asigna resultado de función a variable

    const resultP = document.getElementById("ResultP"); // Para modificar un valor de html desde javascript innertext
    resultP.innerText = `El precio con descuento es de:  $${precioConDescuento}`;
}
