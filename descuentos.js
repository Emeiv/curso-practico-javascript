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

function discountCoupon (coupon) {
    const cuponDescuento = coupon;
    switch (cuponDescuento) {
        case "pokemon":
            return 50;
            break;
        case "digimon":
            return 30;
            break;
        case "":
            return 1;
            break;
        default:
            return 0;
    }
}

function onClickButtonPriceDiscount() {
    //const inputPrice = document.getElementById("inputPrice"); // Llama elemento del HTML que corresponde al inputPrice
    //const priceValue = inputPrice.value;
    //const inputDiscount = document.getElementById("inputDiscount"); // Llama al elemento del HTML que corresponde al inputDiscount
    //const discountValue = inputDiscount.value;
    const inputCoupon = document.getElementById("inputCoupon"); 
    const valueInputCoupon = inputCoupon.value;   

    const validCoupon = discountCoupon(valueInputCoupon);
    const validCouponValue = validCoupon;

    if (validCouponValue >= 10) {
        const inputPrice = document.getElementById("inputPrice"); // Llama elemento del HTML que corresponde al inputPrice
        const priceValue = inputPrice.value;
        const precioConDescuento = calculaPrecioFinal(priceValue, validCouponValue); // Se asigna resultado de función a variable
        const resultP = document.getElementById("ResultP"); // Para modificar un valor de html desde javascript innertext
        resultP.innerText = `El precio con descuento es de:  $${precioConDescuento}`;
    } else if (validCouponValue ==  1 ) {
        const inputPrice = document.getElementById("inputPrice"); // Llama elemento del HTML que corresponde al inputPrice
        const priceValue = inputPrice.value;
        const resultP = document.getElementById("ResultP"); // Para modificar un valor de html desde javascript innertext
        resultP.innerText = `No se aplicó ningún cupón, el precio de tu artículo es de:  $${priceValue}`;

    } else {
        const resultP = document.getElementById("ResultP"); // Para modificar un valor de html desde javascript innertext
        resultP.innerText = `Cupón no válido el precio de tu artículo no se modificó.`;
    }
    
    //const precioConDescuento = calculaPrecioFinal(priceValue, couponValue); // Se asigna resultado de función a variable

    //const resultP = document.getElementById("ResultP"); // Para modificar un valor de html desde javascript innertext
    //resultP.innerText = `El precio con descuento es de:  $${precioConDescuento}`;
}
