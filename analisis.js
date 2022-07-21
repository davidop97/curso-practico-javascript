// Helpers 

function esPar(numerito) {
    // if (numerito % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (numerito % 2 === 0);
    // Solo esa linea devuelve todo lo del if
}

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    };
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista

};

//Mediana general 

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad]; 

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;
    } else {
        const personitaMitad = lista[mitad];

        return personitaMitad;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart; //Devuelve el número de personas que son el 10>% de salarios que para este caso de 20 personas son solo 2 personas
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
);