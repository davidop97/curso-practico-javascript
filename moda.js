 function calcularModa(lista) {
          const listaCount = {};
          
          lista.map(
              function (elemento) {
                  if (listaCount[elemento]) {
          
                      listaCount[elemento] += 1;
          
                  } else {
                      
                      listaCount[elemento] = 1;
                      
                  }
              }
          );
          
          const listaArray = Object.entries(listaCount).sort(
              function (elementoA, elementoB) {
                  return elementoA[1] - elementoB[1];
              }
          );

          const moda = [];
          for(let i = 0; i < listaArray.length; i++){
              if(listaArray[i][1] == listaArray[listaArray.length - 1][1]){
                  moda.push(listaArray[i])
              }
          }
        return moda
}

function getmoda() {
    let moda_input = document.getElementById('InputLista');
    let moda_value = moda_input.value;
    const moda_list = moda_value.split(',').map(Number);
    let moda = calcularModa(moda_list);
    const resultadomoda = document.getElementById('outputModa');
    let captura = ' ';
    if(moda.length >= 1 && moda.length != moda_list.length) {
        for(let i = 0; i < moda.length; i++){
           resultadomoda.innerHTML =`La moda es ${moda[i][0]} y se repite ${moda[i][1]} veces <br/> ${captura}`;
           captura = resultadomoda.innerHTML;
        }
    } 
    else 
    {
        resultadomoda.innerHTML = 'NO EXISTE MODA';
    }
}
