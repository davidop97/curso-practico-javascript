function calcularModa(lista) {

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

    lista = ordenarLista(lista);

    let contador = Array.apply(null, Array(lista.length)).map(Number.prototype.valueOf,1);
    
    let count = 1;

    for (i = 0; i < lista.length; i++) {
            
        if (lista[i] == lista[i + 1]) { 
            count += 1;
            contador[i + 1] = count;
        } else {
            count = 1;
        }

    }

    let datacatch = Array.apply(null, Array(lista.length)).map(Number.prototype.valueOf,0);

    for (i = 0; i < lista.length; i++) {
            
        if (contador[i - 1] >= 1 && contador[i + 1] == 1) {
            datacatch[i] = contador[i]; 
        } 
        datacatch[datacatch.length - 1] = contador[contador.length-1];
    }
    
    const finalcount = datacatch.filter(
        function(elemento) {
            return elemento > 0;
        }
    );
    
    let finalList = [];
    let position = -1;
    for (i = 0; i < finalcount.length; i++) {

        position = position + finalcount[i];
        finalList[i] = lista[position];

    }

    const moda = finalcount.filter(
        function(elemento) {
            return elemento == Math.max(...finalcount)
        }
    );
    
    const indices = [];
    let pos = finalcount.indexOf(moda[0]);

    while (pos != -1) {
        indices.push(pos);
        pos = finalcount.indexOf(moda[0], pos + 1);
    }

    i= 0;
    let data = [];
    while (i < indices.length) {
        data[i] = finalList[indices[i]]
        i ++;
    }
    

    return [data, moda]
}

