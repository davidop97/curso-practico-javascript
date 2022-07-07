// const precio0riginal = 120;
// const descuento = 18;

// console.log({
//     precio0riginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento/100);

    return precioConDescuento;
}

// const coupons = [
//     'BlackFriday',
//     'DiaSinIva',
//     'DiaDelPadre',
// ]

// CON SWITCH 

// function PriceDiscount() {
//     const inputPrice = document.getElementById('InputPrice').value;

//     const inputDiscount = document.getElementById('InputDiscount').value;

//     const inputCoupon = document.getElementById('InputCoupon').value;

//     let descuento;

//     switch(inputCoupon) {
//         case coupons[0]:
//             descuento = 15 + Number(inputDiscount); 
//         break;
//         case coupons[1]:
//             descuento = 20 + Number(inputDiscount);
//         break;
//         case coupons[2]:
//             descuento = 25 + Number(inputDiscount);
//         break;
//     }

//     const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);

//     const resultP = document.getElementById('ResultP');
//     resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
// }

// CON IF Y APLICANDO ERROR FIRST 

// function PriceDiscount() {
//     const inputPrice = document.getElementById('InputPrice').value;

//     const inputDiscount = document.getElementById('InputDiscount').value;

//     const inputCoupon = document.getElementById('InputCoupon').value;

//     let descuento;
//     // La función array.includes() nos permite validar si un elemento ha sido almacenado en el array.
//     if (!coupons.includes(inputCoupon)) {
//         alert('El cupón ' + inputCoupon +' no es valido')
//         descuento = inputDiscount;
//     } else if (inputCoupon === coupons[0]) {
//         descuento = 15 + Number(inputDiscount); 
//     } else if (inputCoupon === coupons[1]) {
//         descuento = 20 + Number(inputDiscount); 
//     } else if (inputCoupon === coupons[2]) {
//         descuento = 25 + Number(inputDiscount); 
//     } 

//     const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);

//     const resultP = document.getElementById('ResultP');
//     resultP.innerText = 'El precio con descuento son: $ ' + precioConDescuento;
// }

// CON UN ARRAY DE OBJETOS 

const coupons = [
    {
        name: 'BlackFriday',
        discount: 15,
    },
    {
        name: 'DiaSinIva',
        discount: 20,
    },
    {
        name: 'DiaDelPadre',
        discount: 25,
    },
];
function PriceDiscount() {
    const inputPrice = document.getElementById('InputPrice').value;

    const inputDiscount = document.getElementById('InputDiscount').value;

    const inputCoupon = document.getElementById('InputCoupon').value;

    const findCoupon = coupons.find(function(coupon){
        return coupon.name === inputCoupon;
    } )

    let descuento;

    if (!findCoupon) {
        alert('El cupón ' + inputCoupon +' no es valido');
        descuento = inputDiscount;
    } else {
        descuento = findCoupon.discount + Number(inputDiscount);
    }

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento);

    const resultP = document.getElementById('ResultP');
    resultP.innerText = 'El precio con descuento son: $ ' + precioConDescuento;
}