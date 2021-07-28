// const lista = [
//     100,
//     300,
//     800,
//     1200,
//     60000,
//     800000,
//     900000,

// ];

// if (lista.length % 2 == 0) {
//     const medianaIndex = (lista.length / 2);
//     const medianaIndex2 = (lista.length / 2) -1;
//     const mediana = (lista[medianaIndex] + lista[medianaIndex2]) / 2;
//     console.log(mediana)
    
// } else {
//     const medianaIndex = ((lista.length - 1) / 2);
//     const mediana = lista[medianaIndex];
//     console.log(mediana)
    
// }




function encontrarMediana (array) { // Recibe un array
    const lista = array.sort(); // Ordena el array
    if (lista.length % 2 == 0) { // Condicional que define ruta en caso que el lenght del array sea par
        const medianaIndex = (lista.length / 2);
        const medianaIndex2 = (lista.length / 2) -1;
        const mediana = (lista[medianaIndex] + lista[medianaIndex2]) / 2; // Operación para sumar los valores de en medio
        return mediana;
        
    } else { 
        const medianaIndex = ((lista.length - 1) / 2);
        const mediana = lista[medianaIndex]; // Regresa el valor que se encuentra en el array en caso que el array sea impar.
        return mediana;
        
    }


}
