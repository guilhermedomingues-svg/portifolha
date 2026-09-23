function passa(){
    let materia;
    let primeiranota;
    let segundanota;
    let resultado;

    alert("Use ponto >.<")
    materia = prompt("Informe a matéria")
    primeiranota = Number(prompt("Informe a nota do primeiro trimestre."));
    segundanota = Number(prompt("Informe a nota do segundo trimestre."));
    
    resultado = primeiranota - segundanota 

    if(primeiranota + segundanota >= "18.0"){
        alert("Parabéns!!! Você PASSOU em " + materia + "!")
    }else{
        alert("Você ainda não passo em " + materia + "! Ainda falta " + resultado + ".")
    }
}