// const lista1 = [
//     100,
//     200,
//     300,
//     400,
//     500,
// ];

// let sumaLista = 0;

// for (let i = 0; i < lista1.length; i++) {
//     sumaLista = sumaLista + lista1[i];
// }

// const promedioLista = sumaLista / lista1.length;

function calcularPromedio (array) {
    const lista = array;
    
    //let sumaLista = 0;
    
    //for (let i = 0; i < lista.length; i++) { // Se declara i como 0; Mientras i sea menor a la longitud de la lista: el i++ suma "1" a "i"
      //  sumaLista = sumaLista + lista[i]; // A suma lista se le suma el valor con el index de i, comienza en 0 y continua hasta que termina el array
    //}

    //const promedioLista = sumaLista / lista.length;
    //return promedioLista

    let sumaLista = lista.reduce(function (accumulator = 0, currentValue){
        return accumulator + currentValue;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista
    
    
    
    //return promedioLista;


}

// Métodos para arrays - para iterar sobre los elementos.
