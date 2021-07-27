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




function encontrarMediana (array) {
    const lista = array.sort();
    if (lista.length % 2 == 0) {
        const medianaIndex = (lista.length / 2);
        const medianaIndex2 = (lista.length / 2) -1;
        const mediana = (lista[medianaIndex] + lista[medianaIndex2]) / 2;
        return mediana;
        
    } else {
        const medianaIndex = ((lista.length - 1) / 2);
        const mediana = lista[medianaIndex];
        return mediana;
        
    }


}
