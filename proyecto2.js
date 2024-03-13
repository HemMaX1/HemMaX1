//ENCONTRAR NUMERO MAYOR EN ARRAY

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let length = numeros.length

let maxNumero = 0


for (let i = 0; i < numeros.length; i++){
  if (maxNumero < numeros[i]){
    maxNumero = numeros[i]
  }
}

  console.log("el numero mas alto es " + maxNumero)
