// comece a criar a sua função add na linha abaixo
function add (n1, n2){

    return (n1 + n2)
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply (x, n){

    let resultado = 0
    let i = 0
    
    while (i < x) {
        resultado += n 
        i++   
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
 function power (x,n){

    let resultado = 0
    
    resultado = x

    for (let i = 1; i < n; i++){
        
        resultado = (multiply(resultado,x)) 
        final = resultado

    }
    return final
 }


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (x){
    
    let resultado = x
    let final = 0

    for (let i = 0; i < x; i++){
        
        resultado = (multiply(resultado, (x - 1 )))
        final = resultado
        x--
    }
    return final
}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
