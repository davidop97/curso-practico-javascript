
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // };

    // Metodo diferente con array.reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { // Comienza en cero porque al principio no va a tener ningun valor
            
            return valorAcumulado + nuevoElemento;
        } 
    );

    
    const promedioLista = sumaLista / lista.length;

    return promedioLista

};

function getpromedio() {
    let average_input = document.getElementById('InputLista');
    let average_value = average_input.value;
    const average_list = average_value.split(',').map(Number);
    let average = calcularMediaAritmetica(average_list);
    const resultadoPromedio = document.getElementById('outputPromedio');

    resultadoPromedio.innerText = 'El promedio de la lista agregada es: ' + average;
}