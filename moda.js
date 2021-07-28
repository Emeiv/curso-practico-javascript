// const lista = [
//     1,
//     2,
//     1,
//     3,
//     4,
//     1,
//     2,
//     4,
//     5,
//     6,
//     3,
//     2,
//     5,
// ];

// const repeticiones = {};

// var new_Array = lista.map(
//     function(elementoEnLista) {
//         if (repeticiones[elementoEnLista]) {
//             repeticiones[elementoEnLista] += 1;
            
//         } else {
//             repeticiones[elementoEnLista] = 1;
//         }
        
//     }
// )

// let keys = Object.keys(repeticiones);
// const arrayModa = keys.sort(function(a,b){return repeticiones[a]-repeticiones[b]});
// moda = arrayModa[arrayModa.length-1]



function obtenerModa(array) {
    const lista = array;
    const valoresArray = {};

    lista.map(
        function(elementoEnLista) {
            if (valoresArray[elementoEnLista]) {
                valoresArray[elementoEnLista] += 1;
                
            } else {
                valoresArray[elementoEnLista] = 1;
            }
            
        }
    )

    let keys = Object.keys(valoresArray);
    const arrayModa = keys.sort(function(a,b){return valoresArray[a]-valoresArray[b]});
    const moda = arrayModa[arrayModa.length-1];

    return moda;





}

