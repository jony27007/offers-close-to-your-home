function laCajaDePandora(numero){
// proximamente escribiremos codigo aqui

if (numero % 2 === 0) {
    // Si es un número par, convertirlo a binario y retornarlo
    return numero.toString(2);
  } else {
    // Si es un número impar, convertirlo a hexadecimal y retornarlo
    return numero.toString(16);
  }
}



function carolina() {
    return {
        nombre: 'carolina',
        edad: 42,
        nacionalidad: 'colombia',
        
    }
}