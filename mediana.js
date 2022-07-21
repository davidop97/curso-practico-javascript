function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    };
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista

};

function esPar(numerito) {
    if (numerito % 2 === 0) {
        // % siginifica que es divisible entre dos y con la igualdad dice si el residuo es cero
        return true;
    } else {
        return false;
    }
}

function ordenarLista(lista1) {
    let lista = lista1;
    paso = 0;
    for (i = 0; i <= lista.length; i++) {
        for (j = 0; j < lista.length; j++) {
            if (lista1[j] > lista1[j + 1]) {
                paso = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = paso;
            }
        }
    }
    return lista
}

function calcularMediana(lista) {

    const mitadLista = parseInt(lista.length / 2);
    // Apróxima al número entero ya que va a ser la posición del array

    let mediana;

    lista = ordenarLista(lista);
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
    
        const promedioElementos = calcularMediaAritmetica([
            elemento1, 
            elemento2,
        ]);
    
        mediana = promedioElementos;
    
    } else {
        mediana = lista[mitadLista];
    }

    return mediana

}

function getmediana() {
    let median_input = document.getElementById('InputLista');
    let median_value = median_input.value;
    const median_list = median_value.split(',').map(Number);
    let median = calcularMediana(median_list);
    const resultadoMediana = document.getElementById('outputMediana');

    const listaOrdenada = ordenarLista(median_list);
    const lista = document.getElementById('outputLista');

    let conector = '';
    let contador = 0;
    for (i = 0; i < median_list.length; i++) {
        lista.innerHTML = `${conector}  ${listaOrdenada[i]}`
        conector = `${lista.innerHTML}, `;
        contador += 1;
    }
    lista.innerHTML = `${lista.innerHTML} con un total de ${contador} datos`
    
    resultadoMediana.innerText = 'La Mediana de la lista agregada es: ' + median;
}
