let retornoimc
retornoimc = calcularIMC(63, 1.78)
console.log(retornoimc)
classificarIMC(retornoimc)

function calcularIMC(argPeso, argAltura){
    imc = argPeso / (argAltura **2)
    //console.log(imc)
    return imc
}
function classificarIMC(argIMC){
    if(argIMC < 18.5){
        console.log('desnutrição')
    }
    else if(argIMC < 25){
        console.log('Peso normal')
    }
    else if(argIMC < 30){
        console.log('sobrepeso')
    }
    else if(argIMC < 35){
        console.log('obesidade I')
    }
    else if(argIMC < 40){
        console.log('obesidade II')
    }
    else {
        console.log('obesidade III')
    }

}
